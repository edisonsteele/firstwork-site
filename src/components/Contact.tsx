'use client'

import { useState } from 'react'
import { submitContactForm } from '@/app/actions/contact'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

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
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-gray-900">
                Organization
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                Subject
              </label>
              <div className="mt-2.5">
                <select
                  name="subject"
                  id="subject"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
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
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="block w-full rounded-md bg-[#035183] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-sm text-green-600">
              Thank you for your message. We'll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600">
              {error || 'Something went wrong. Please try again.'}
            </p>
          )}
        </form>
      </div>
    </div>
  )
} 