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
              Privacy Policy
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
            <h2>1. Introduction</h2>
            <p>
              FirstWork ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our learning platform and services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Create an account</li>
              <li>Use our learning platform</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <p>We automatically collect certain information about your device and how you interact with our platform, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Learning progress and performance</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Personalize your learning experience</li>
              <li>Improve our platform and services</li>
              <li>Communicate with you about updates and support</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist in operating our platform</li>
              <li>Educational institutions you are associated with</li>
              <li>Law enforcement when required by law</li>
              <li>Third parties with your consent</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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