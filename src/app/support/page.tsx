'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  QuestionMarkCircleIcon,
  PlayCircleIcon,
  UserGroupIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const faqSections = [
  {
    title: 'For ABA Professionals',
    icon: AcademicCapIcon,
    questions: [
      {
        question: 'How can FirstWork improve my workflow as a BCBA?',
        answer: 'FirstWork simplifies your workflow by reducing the need for manual DTT material creation, allowing you to spend more time with clients and less time on prep work.'
      },
      {
        question: 'How does FirstWork support data collection?',
        answer: 'FirstWork includes built-in data collection tools that allow you to track client progress directly within the app. This feature helps streamline reporting and ensure accurate, up-to-date information for treatment decisions.'
      },
      {
        question: 'Can FirstWork be used by teams?',
        answer: 'Absolutely! You can use the platform to share lesson programs and monitor progress, making it ideal for collaboration, even remotely!'
      },
      {
        question: 'What type of materials are in FirstWork?',
        answer: 'FirstWork covers a wide range of Discrete Trial Training (DTT) based programs. Our resources are designed to be versatile and adaptable so you can customize lessons to meet the needs of your learners.'
      },
      {
        question: 'Can parents use FirstWork too?',
        answer: "Absolutely! FirstWork is easy to use and collaborate with. It's a great continued learning tool for many families who would like to increase learning opportunities at home. You can easily share programs with families that they can access on their device making it highly transferable into the home context."
      }
    ]
  },
  {
    title: 'Pricing & Access',
    icon: CurrencyDollarIcon,
    questions: [
      {
        question: 'What does the FirstWork pricing structure look like?',
        answer: 'FirstWork is free to download and use through the App Store! Over 500 targets are always available, and when you first download the app you start with access to the ~10,000 targets in the app. Organizations can also access FirstWork through a pilot to explore the app.'
      },
      {
        question: 'Are there discounts available for larger organizations?',
        answer: 'Yes, FirstWork offers discounts for larger organizations and long-term subscribers. Contact our sales team for more information on group rates and enterprise pricing.'
      },
      {
        question: 'Is the free trial full access?',
        answer: "Yes, during the free trial, you have access to all of FirstWork's features, so you can explore everything the platform has to offer before committing to a subscription."
      },
      {
        question: 'Can I change my pricing plan after signing up?',
        answer: 'Absolutely. You can upgrade or downgrade your plan at any time, depending on your changing needs. FirstWork allows for flexible subscription management.'
      },
      {
        question: 'How many devices can I unlock with a subscription?',
        answer: 'If you subscribe through the App Store you will have access on the device you subscribed using. Each device can support an unlimited number of student profiles. For multiple devices, we recommend signing up as an organization for better account management and group login capabilities.'
      }
    ]
  },
  {
    title: 'Customization Options',
    icon: Cog6ToothIcon,
    questions: [
      {
        question: 'Can I customize the lesson plans in FirstWork?',
        answer: 'Yes, FirstWork offers full customization options. You have control over field size, distractor similarity/difficulty, number of questions/lessons, reward magnitude, error correction style, and pace of speaker.'
      },
      {
        question: 'Can I upload my own images into FirstWork?',
        answer: 'Currently you cannot upload your own images into FirstWork. The app was designed to cover a massive set of common targets with ~10,000 goals. In the future, we plan to include the ability to add custom visuals/prompts.'
      },
      {
        question: 'Does FirstWork integrate with other digital platforms?',
        answer: 'Yes! FirstWork integrates with many common technology platforms used by ABA centers. Contact us for details on specific integrations.'
      },
      {
        question: 'Can I save custom DTT programs?',
        answer: 'Yes, you can save up to 10 custom programs in each student profile. These programs can also be shared with team members or parents.'
      },
      {
        question: 'What learning goals are supported by FirstWork?',
        answer: 'FirstWork supports ~10,000 DTT based learning goals, including matching lessons, receptive lessons, feature/function/class, reading, counting, and more.'
      }
    ]
  },
  {
    title: 'Access & Usage',
    icon: DevicePhoneMobileIcon,
    questions: [
      {
        question: 'Can I transfer data and lesson plans?',
        answer: 'Yes, FirstWork offers easy import options to transfer data and lesson plans across devices so you can access your programs and progress reports whenever and wherever you need them.'
      },
      {
        question: 'How do I start a free trial?',
        answer: 'When you download FirstWork on iOS or Android you will automatically have full access to the app for one week!'
      },
      {
        question: 'Can multiple users access the same account?',
        answer: 'Yes, when you sign up as an organization FirstWork supports multi-user access, making it ideal for teams.'
      },
      {
        question: 'Is FirstWork available on all mobile devices?',
        answer: 'Yes, FirstWork is available on iOS and Android phones and tablets!'
      }
    ]
  },
  {
    title: 'How It Works',
    icon: PlayCircleIcon,
    questions: [
      {
        question: "How does FirstWork's focus feature work?",
        answer: 'FirstWork has a parental control style feature that makes it possible to limit fun apps during learning lessons. Simply select all of the fun/distracting apps during setup, and they will be restricted while FirstWork is asking questions.'
      },
      {
        question: "How does FirstWork's reinforcement feature work?",
        answer: 'After a lesson is completed, you can grant a digital reward: time on fun apps like YouTube or games! You can set the amount of reward time before the lesson. Once completed, fun apps will be made available for the set duration. When time is up, FirstWork can restrict the apps again, requesting another lesson to regain access.'
      },
      {
        question: 'How is FirstWork different from other DTT platforms?',
        answer: 'FirstWork digitizes DTT from setup to reinforcement. It has a best-in-class library of teaching images, incredible customization, easy lesson sharing, data tracking, and report generation. Uniquely, it leverages existing digital rewards that learners already know and love, making it particularly effective for cross-context use.'
      }
    ]
  }
]

export default function Page() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

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
              Support & FAQs
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              Find answers to common questions about FirstWork. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#035183] to-[#6FCEF4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-[#035183]/10">
          {faqSections.map((section) => (
            <div key={section.title} className="py-8">
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
              >
                <section.icon className="h-6 w-6 text-[#035183]" />
                <h2 className="text-2xl font-bold text-[#035183]">{section.title}</h2>
                <svg
                  className={`h-5 w-5 text-[#035183] transition-transform ${
                    openSection === section.title ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {openSection === section.title && (
                <div className="mt-6 space-y-6">
                  {section.questions.map((faq) => (
                    <div key={faq.question} className="rounded-2xl bg-[#035183]/5 p-6">
                      <button
                        className="flex w-full items-start justify-between text-left"
                        onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                      >
                        <span className="text-base font-semibold text-[#035183]">{faq.question}</span>
                        <svg
                          className={`h-5 w-5 text-[#035183] transition-transform ${
                            openQuestion === faq.question ? 'rotate-180' : ''
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {openQuestion === faq.question && (
                        <div className="mt-4 text-[#035183]/80">{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Still Have Questions?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Our support team is here to help. Contact us for personalized assistance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/?showContact=true"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
            >
              Contact Support
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