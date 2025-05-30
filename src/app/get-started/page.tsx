'use client'

import Link from 'next/link'
import { 
  UserPlusIcon,
  UserCircleIcon,
  CreditCardIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Create Your Account',
    description: 'Sign up for FirstWork to get started with our learning platform.',
    icon: UserPlusIcon,
    details: [
      'Fill out the registration form with your details',
      'Verify your email address',
      'Set up your password and security preferences',
      'Complete your organization profile'
    ],
    link: '/signup',
    linkText: 'Sign Up Now'
  },
  {
    name: 'Access Your Dashboard',
    description: 'Log in to your personalized dashboard to manage your account.',
    icon: UserCircleIcon,
    details: [
      'View your account overview',
      'Access your learning materials',
      'Track your progress and achievements',
      'Manage your profile settings'
    ],
    link: '/dashboard',
    linkText: 'Go to Dashboard'
  },
  {
    name: 'Purchase Licenses',
    description: 'Buy licenses for your team or organization through the dashboard.',
    icon: CreditCardIcon,
    details: [
      'Choose from our flexible pricing plans',
      'Select the number of licenses needed',
      'Complete the secure payment process',
      'Receive immediate access to purchased licenses'
    ],
    link: '/dashboard/licenses',
    linkText: 'View Pricing'
  },
  {
    name: 'Add Team Members',
    description: 'Invite and manage your team members through the admin panel.',
    icon: UserGroupIcon,
    details: [
      'Send invitations to team members',
      'Assign roles and permissions',
      'Set up learning groups',
      'Monitor team progress'
    ],
    link: '/dashboard/team',
    linkText: 'Manage Team'
  },
  {
    name: 'Monitor Progress',
    description: 'Track and analyze your team\'s learning progress and performance.',
    icon: ChartBarIcon,
    details: [
      'View detailed analytics and reports',
      'Track individual and group progress',
      'Identify areas for improvement',
      'Generate custom reports'
    ],
    link: '/dashboard/analytics',
    linkText: 'View Analytics'
  }
]

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
              Get Started with FirstWork
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Follow these simple steps to set up your FirstWork account and start transforming your learning experience.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Steps Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Getting Started Guide</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Follow these steps to set up your FirstWork account and start your learning journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#035183] text-white">
                    {index + 1}
                  </div>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183]">
                    <step.icon className="h-5 w-5 flex-none text-[#035183]" aria-hidden="true" />
                    {step.name}
                  </dt>
                </div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                  <p className="flex-auto">{step.description}</p>
                  <ul className="mt-4 space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-x-2">
                        <ArrowRightIcon className="h-4 w-4 flex-none text-[#035183]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={step.link}
                      className="text-sm font-semibold leading-6 text-[#035183] hover:text-[#035183]/80"
                    >
                      {step.linkText} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Ready to Begin?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Start your journey with FirstWork today and transform your learning experience.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              Create Account
            </Link>
            <Link 
              href="/?showContact=true" 
              className="text-sm font-semibold leading-6 text-[#035183] transition-all duration-300 hover:text-[#035183]/80"
            >
              Need Help? <span aria-hidden="true">→</span>
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