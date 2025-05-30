'use client'

import { useState, useEffect } from 'react'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { submitContactForm } from '@/app/actions/contact'

function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

  // Reset status after 5 seconds on success
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    if (result.success) {
      setStatus('success')
      event.currentTarget.reset()
    } else {
      setStatus('error')
      setError(result.error || 'Something went wrong')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#035183]/5 to-white">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-[#035183] sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Get in touch with our team. We're here to help you get the most out of FirstWork.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Choose the best way to reach us based on your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none">
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="h-6 w-6 text-[#035183]" />
              <h3 className="text-lg font-semibold text-[#035183]">Email Us</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              For general inquiries and support:
            </p>
            <a href="mailto:support@firstworkapp.com" className="mt-4 block text-[#035183] hover:text-[#035183]/80">
              support@firstworkapp.com
            </a>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-[#035183]" />
              <h3 className="text-lg font-semibold text-[#035183]">Call Us</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              For immediate assistance:
            </p>
            <a href="tel:+1234567890" className="mt-4 block text-[#035183] hover:text-[#035183]/80">
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Send Us a Message</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-[#035183]">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#035183]">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-[#035183]">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-[#035183]">
                Organization
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-[#035183]">
                Subject
              </label>
              <div className="mt-2.5">
                <select
                  name="subject"
                  id="subject"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#035183]">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {status === 'success' && (
            <div className="rounded-md bg-green-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                </div>
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="rounded-md bg-red-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {error || 'Something went wrong. Please try again.'}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="block w-full rounded-md bg-[#035183] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Additional Information */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Additional Information</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Find more ways to connect with us and learn about FirstWork.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <div className="flex items-center gap-4">
              <BuildingOfficeIcon className="h-6 w-6 text-[#035183]" />
              <h3 className="text-lg font-semibold text-[#035183]">Office Location</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              123 Innovation Street<br />
              Tech City, TC 12345<br />
              United States
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <div className="flex items-center gap-4">
              <ClockIcon className="h-6 w-6 text-[#035183]" />
              <h3 className="text-lg font-semibold text-[#035183]">Business Hours</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday: 10:00 AM - 2:00 PM EST<br />
              Sunday: Closed
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-[#035183]" />
              <h3 className="text-lg font-semibold text-[#035183]">Visit Us</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Schedule a visit to our office to learn more about FirstWork and see our team in action.
            </p>
            <button className="mt-4 text-[#035183] hover:text-[#035183]/80">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 