'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Contact() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isContactOpen = searchParams.get('showContact') === 'true'

  const closeModal = () => {
    router.push('/')
  }

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#035183]">Get Started</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">
              Ready to Transform Learning?
            </p>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Join the growing number of schools and organizations using FirstWork to enhance their learning programs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/?showContact=true"
                className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183]"
              >
                Contact Us
              </Link>
              <Link
                href="https://firstworkapp.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-[#035183]"
              >
                Download FirstWork <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-[#035183] hover:text-[#035183]/80 focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-base font-semibold leading-6 text-[#035183]">Contact Us</h3>
                    <div className="mt-4">
                      <p className="text-sm text-[#035183]/80">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>
                    <form className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#035183]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 block w-full rounded-md border-0 py-1.5 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#035183]">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-0 py-1.5 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#035183]">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="mt-1 block w-full rounded-md border-0 py-1.5 text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 focus:ring-2 focus:ring-inset focus:ring-[#035183] sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-[#035183] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 sm:ml-3 sm:w-auto"
                        >
                          Send Message
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#035183] shadow-sm ring-1 ring-inset ring-[#035183]/10 hover:bg-[#035183]/10 sm:mt-0 sm:w-auto"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 