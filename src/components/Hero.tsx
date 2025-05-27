import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6FCEF4] to-[#035183] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-2 sm:pb-32 lg:flex lg:px-8 lg:py-12">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-12 sm:mt-16 lg:mt-8">
            <Link href="/get-started" className="inline-flex space-x-6">
              <span className="rounded-full bg-[#6FCEF4]/10 px-3 py-1 text-sm font-semibold leading-6 text-[#035183] ring-1 ring-inset ring-[#6FCEF4]/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-[#035183]">
                <span>Just shipped v1.0</span>
                <svg className="h-5 w-5 text-[#6FCEF4]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-[#035183] sm:text-6xl">
            Transform Learning with Smart Device Motivation
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork uses digital reinforcement learning technology to make learning on smart devices more engaging and effective. Our adaptive system personalizes the experience for each learner.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/get-started"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183]"
            >
              Get started
            </Link>
            <Link href="/how-it-works" className="text-sm font-semibold leading-6 text-[#035183]">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:mt-0 lg:flex-1 lg:pt-24">
          <div className="w-full max-w-5xl">
            <div className="w-full aspect-[16/9] bg-[#6FCEF4]/10 rounded-md flex items-center justify-center text-[#035183] border-2 border-dashed border-[#6FCEF4]">
              <div className="text-center">
                <p className="text-lg font-medium">Hero Image Required</p>
                <p className="text-sm mt-2">Dimensions: 2432 x 1442 pixels</p>
                <p className="text-sm">(16:9 aspect ratio)</p>
                <p className="text-xs mt-4 text-[#035183]/60">Recommended format: PNG or WebP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6FCEF4] to-[#035183] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 