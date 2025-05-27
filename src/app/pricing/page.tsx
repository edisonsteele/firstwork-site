'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Single Device',
    id: 'tier-single',
    price: { monthly: '$12.99' },
    description: 'Perfect for individual students or small families.',
    features: [
      'Access to all learning modules',
      'One device license',
      'Basic progress tracking',
      'Email support',
      'Regular content updates',
    ],
    cta: 'Get started',
    mostPopular: false,
  },
  {
    name: 'Family Pack',
    id: 'tier-family',
    price: { monthly: '$24.99' },
    description: 'Ideal for families with multiple children.',
    features: [
      'Access to all learning modules',
      'Up to 5 device licenses',
      'Advanced progress tracking',
      'Priority email support',
      'Regular content updates',
      'Family dashboard',
      'Customizable learning paths',
    ],
    cta: 'Get started',
    mostPopular: true,
  },
  {
    name: 'Classroom',
    id: 'tier-classroom',
    price: { monthly: '$49.99' },
    description: 'Designed for educational institutions and larger groups.',
    features: [
      'Access to all learning modules',
      'Up to 10 device licenses',
      'Comprehensive progress tracking',
      'Priority support',
      'Regular content updates',
      'Teacher dashboard',
      'Customizable learning paths',
      'Bulk user management',
      'Detailed analytics',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
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
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Choose the perfect plan for your needs. All plans include access to our complete learning platform and regular content updates.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#035183]' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 transition-all duration-300 hover:shadow-lg'
              )}
            >
              <h2
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-[#035183]' : 'text-gray-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-[#035183]">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Link
                href={tier.id === 'tier-classroom' ? '/?showContact=true' : '/?showContact=true'}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#035183] text-white hover:bg-[#035183]/90'
                    : 'bg-[#035183]/10 text-[#035183] hover:bg-[#035183]/20',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105'
                )}
              >
                {tier.cta}
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-[#035183]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Have questions about our pricing? We're here to help.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Can I change plans later?</h3>
            <p className="mt-4 text-[#035183]/80">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">What devices are supported?</h3>
            <p className="mt-4 text-[#035183]/80">
              FirstWork works on all major tablets and smartphones. We support iOS, Android, and web browsers.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Is there a free trial?</h3>
            <p className="mt-4 text-[#035183]/80">
              Yes, we offer a 14-day free trial for all plans. No credit card required to start.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">How do I get support?</h3>
            <p className="mt-4 text-[#035183]/80">
              All plans include email support. Family and Classroom plans receive priority support with faster response times.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Join the growing number of educators and students using FirstWork to enhance learning outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/?showContact=true"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-sm font-semibold leading-6 text-[#035183] transition-all duration-300 hover:text-[#035183]/80"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  )
} 