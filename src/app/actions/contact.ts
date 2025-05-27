'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const organization = formData.get('organization') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Debug logging
  console.log('Environment check:', {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    hasResendKey: !!process.env.RESEND_API_KEY,
  })

  // Check if Supabase environment variables are set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Missing Supabase environment variables:', {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
    return { success: false, error: 'Server configuration error' }
  }

  // Create Supabase client
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  try {
    // Insert into Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          organization,
          subject,
          message,
        },
      ])

    if (error) {
      console.error('Supabase insert error:', error)
      throw error
    }

    // Send email notification if Resend API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'FirstWork Contact <contact@firstworkapp.com>',
          to: ['admin@firstworkapp.com'],
          subject: `New Contact Form Submission: ${subject}`,
          text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Organization: ${organization || 'Not provided'}
            Subject: ${subject}
            Message: ${message}
          `,
        })

        // Send confirmation email to user
        await resend.emails.send({
          from: 'FirstWork Contact <contact@firstworkapp.com>',
          to: [email],
          subject: 'Thank you for contacting FirstWork',
          text: `
            Dear ${name},

            Thank you for contacting FirstWork. We have received your message and will get back to you as soon as possible.

            Best regards,
            The FirstWork Team
          `,
        })
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Don't fail the whole submission if email fails
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Failed to submit contact form' }
  }
} 