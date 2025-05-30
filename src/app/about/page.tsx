'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  LightBulbIcon,
  HeartIcon,
  AcademicCapIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in educational technology.',
    icon: LightBulbIcon,
  },
  {
    name: 'Student Success',
    description: 'Every decision we make is focused on improving student outcomes and engagement.',
    icon: HeartIcon,
  },
  {
    name: 'Educational Excellence',
    description: 'We maintain the highest standards in educational content and methodology.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Future-Focused',
    description: 'We prepare students for the challenges and opportunities of tomorrow.',
    icon: RocketLaunchIcon,
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    imageUrl: '/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    imageUrl: '/team/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Education',
    imageUrl: '/team/emily.jpg',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    imageUrl: '/team/david.jpg',
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
              About FirstWork
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              We're on a mission to transform learning through technology, making education more engaging and effective for students everywhere.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            At FirstWork, we believe that every student deserves access to engaging and effective learning tools. Our mission is to leverage technology to create personalized learning experiences that inspire and empower students to reach their full potential.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            These core values guide everything we do at FirstWork.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183]">
                  <value.icon className="h-5 w-5 flex-none text-[#035183]" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Meet the passionate individuals behind FirstWork.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                <div className="h-full w-full flex items-center justify-center text-[#035183]/60">
                  <span className="text-sm">Team member photo</span>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-[#035183]">{person.name}</h3>
              <p className="text-base leading-7 text-[#035183]/80">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Join Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Be part of the movement to transform education through technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/careers"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              View Careers
            </Link>
            <Link 
              href="/?showContact=true" 
              className="text-sm font-semibold leading-6 text-[#035183] transition-all duration-300 hover:text-[#035183]/80"
            >
              Contact Us <span aria-hidden="true">→</span>
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