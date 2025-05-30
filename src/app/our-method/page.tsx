'use client'

import Link from 'next/link'
import { 
  AcademicCapIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Adaptive Learning',
    description: 'Our system continuously adapts to each student\'s learning style and pace, ensuring optimal engagement and progress.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Digital Reinforcement',
    description: 'We use proven reinforcement learning techniques to create engaging and effective learning experiences on smart devices.',
    icon: SparklesIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Comprehensive analytics and progress tracking help educators and parents monitor student development.',
    icon: ChartBarIcon,
  },
  {
    name: 'Smart Device Integration',
    description: 'Seamlessly integrates with existing smart devices to create a familiar and accessible learning environment.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Personalized Learning',
    description: 'Each student receives a customized learning path based on their unique needs and goals.',
    icon: UserGroupIcon,
  },
  {
    name: 'Academic Excellence',
    description: 'Our methodology is designed to improve academic performance while making learning more engaging.',
    icon: AcademicCapIcon,
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
              Our Learning Methodology
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              FirstWork combines cutting-edge technology with proven educational methods to create an engaging and effective learning experience.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Key Components</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Our methodology is built on six core principles that work together to create an optimal learning environment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183]">
                  <feature.icon className="h-5 w-5 flex-none text-[#035183]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                  <p className="flex-auto">{feature.description}</p>
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
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Ready to Transform Learning?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Join the growing number of educators and students using FirstWork to enhance learning outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/?showContact=true"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              Get Started
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