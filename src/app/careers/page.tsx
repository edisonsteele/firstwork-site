'use client'

import Link from 'next/link'
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family.',
    icon: HeartIcon,
  },
  {
    name: 'Learning & Development',
    description: 'Continuous learning opportunities and professional development support.',
    icon: SparklesIcon,
  },
  {
    name: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous paid time off.',
    icon: UserGroupIcon,
  },
  {
    name: 'Growth Opportunities',
    description: 'Clear career paths and opportunities for advancement.',
    icon: RocketLaunchIcon,
  },
]

const jobs = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build and scale our learning platform.',
  },
  {
    title: 'Educational Content Developer',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create engaging educational content for our learning platform.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead product development and strategy for our learning solutions.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Support and grow relationships with our educational partners.',
  },
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
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Help us transform education through technology. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Why Join FirstWork?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            We offer competitive benefits and a supportive work environment to help you thrive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183]">
                  <benefit.icon className="h-5 w-5 flex-none text-[#035183]" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Open Positions</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Explore our current job openings and find the perfect role for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.title} className="flex flex-col rounded-2xl bg-[#035183]/5 p-8">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="rounded-full bg-[#6FCEF4]/10 px-3 py-1 text-[#035183] font-medium">
                  {job.department}
                </span>
                <span className="rounded-full bg-[#6FCEF4]/10 px-3 py-1 text-[#035183] font-medium">
                  {job.location}
                </span>
                <span className="rounded-full bg-[#6FCEF4]/10 px-3 py-1 text-[#035183] font-medium">
                  {job.type}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-6 text-[#035183]">{job.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#035183]/80">{job.description}</p>
              <div className="mt-4">
                <Link
                  href="/?showContact=true"
                  className="text-sm font-semibold leading-6 text-[#035183] hover:text-[#035183]/80"
                >
                  Apply now <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Don't See the Right Role?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/?showContact=true"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              Send Resume
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold leading-6 text-[#035183] transition-all duration-300 hover:text-[#035183]/80"
            >
              Learn More About Us <span aria-hidden="true">→</span>
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