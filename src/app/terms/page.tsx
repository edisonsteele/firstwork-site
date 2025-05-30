'use client'

import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#035183]/5 to-white">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-[#035183] sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-[#035183]">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using FirstWork's learning platform and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>2. Use of Services</h2>
            <h3>2.1 Eligibility</h3>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 13 years old</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the services under applicable laws</li>
            </ul>

            <h3>2.2 Account Registration</h3>
            <p>When you create an account, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2>3. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Interfere with the proper functioning of the platform</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Share account credentials</li>
              <li>Engage in any harmful or disruptive behavior</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our platform are owned by FirstWork and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our permission.
            </p>

            <h2>5. Subscription and Payments</h2>
            <h3>5.1 Subscription Terms</h3>
            <p>By subscribing to our services, you agree to:</p>
            <ul>
              <li>Pay all fees in accordance with the selected plan</li>
              <li>Provide valid payment information</li>
              <li>Authorize recurring charges</li>
            </ul>

            <h3>5.2 Cancellation</h3>
            <p>
              You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period. No refunds will be provided for partial subscription periods.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              FirstWork shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
            </p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to our services at any time, without notice, for any reason, including violation of these Terms of Service.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which FirstWork is established, without regard to its conflict of law provisions.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-6">
              <Link
                href="/?showContact=true"
                className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 