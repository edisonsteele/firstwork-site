'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon, 
  PlayCircleIcon, 
  ComputerDesktopIcon,
  BookOpenIcon,
  CalculatorIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

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
              How FirstWork Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              FirstWork revolutionizes learning by combining education with motivation. Our unique approach lets children earn access to their favorite apps by completing educational modules, creating a powerful incentive for learning.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Work for Play Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Work for Play: Our Core Concept</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            At FirstWork, we've created a system that transforms learning into a rewarding experience. Children complete educational modules to earn time with their favorite apps, creating a natural motivation to learn.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Complete Learning Modules</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Children engage with our carefully designed educational content, mastering concepts through interactive exercises and activities.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <PlayCircleIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Earn Reward Time</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Successful completion of learning modules earns children access to their favorite apps, creating a powerful incentive to learn.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <ComputerDesktopIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Proprietary Software</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Our custom software manages the learning-reward cycle, ensuring a safe and effective balance between education and play.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Modules Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Our Learning Modules</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork offers a comprehensive range of learning modules designed to build essential skills while keeping children engaged and motivated.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <BookOpenIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Early Learning Skills</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Build foundational skills through engaging activities that teach colors, shapes, numbers, and basic concepts. Perfect for young learners starting their educational journey.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Language Development</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Develop essential language skills through phonics, vocabulary building, and comprehension exercises. Our interactive modules make learning to read and communicate fun and effective.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <CalculatorIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Mathematics & Logic</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Master mathematical concepts from basic counting to problem-solving. Our step-by-step approach builds confidence and understanding through interactive practice.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Social & Life Skills</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Learn essential life skills through practical exercises that teach social interaction, emotional understanding, and daily living activities in a supportive environment.
            </p>
          </div>
        </div>
      </div>

      {/* Research & Results Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Research & Results</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork's effectiveness is backed by research and proven results in educational settings.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <LightBulbIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Proven Methodology</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Our approach is based on established educational research and best practices in digital learning.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Measurable Results</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              Students using FirstWork show significant improvements in learning outcomes and engagement.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8 transition-all duration-300 hover:bg-[#035183]/10 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#035183] p-2">
                <ArrowPathIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#035183]">Continuous Improvement</h3>
            </div>
            <p className="mt-4 text-[#035183]/80">
              We regularly update our system based on research findings and user feedback to ensure optimal learning outcomes.
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
              href="/pricing" 
              className="text-sm font-semibold leading-6 text-[#035183] transition-all duration-300 hover:text-[#035183]/80"
            >
              View Pricing <span aria-hidden="true">→</span>
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