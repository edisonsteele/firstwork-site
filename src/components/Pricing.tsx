import Link from 'next/link'

const tiers = [
  {
    name: 'Single Device',
    id: 'tier-single',
    price: { monthly: '$12.99' },
    description: 'For individual students.',
    features: [
      'Full curriculum access',
      'Personalized learning',
      'Progress tracking',
      'Digital tools',
      'Cross-platform',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Family Pack',
    id: 'tier-family',
    price: { monthly: '$24.99' },
    description: 'For families with multiple children.',
    features: [
      'All Single Device features',
      'Up to 5 device licenses',
      'Group monitoring',
      'Shared resources',
      'Collaboration tools',
    ],
    cta: 'Get Started',
    mostPopular: true,
  },
  {
    name: 'Classroom',
    id: 'tier-classroom',
    price: { monthly: '$49.99' },
    description: 'For educational institutions.',
    features: [
      'All Family Pack features',
      'Up to 10 device licenses',
      'Advanced analytics',
      'Custom paths',
      'Priority support',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: 'Custom' },
    description: 'For larger organizations.',
    features: [
      'All Classroom features',
      '11+ device licenses',
      '+$10 per additional device',
      'Custom integration',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#035183]">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">
            Simple, Transparent Pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Choose the perfect plan for your needs. All plans include access to our complete curriculum and learning tools.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl p-8 ring-1 ring-[#035183]/10 ${
                tier.mostPopular ? 'bg-[#035183] text-white' : 'bg-white'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-[#6FCEF4] px-3 py-1 text-center text-sm font-semibold text-[#035183]">
                  Most popular
                </div>
              )}
              <div className="flex flex-col">
                <div className="h-[72px]">
                  <h3 className={`text-lg font-semibold leading-8 ${tier.mostPopular ? 'text-white' : 'text-[#035183]'}`}>
                    {tier.name}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${tier.mostPopular ? 'text-white/80' : 'text-[#035183]/80'}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="h-[48px] mt-6">
                  <p className="flex items-baseline gap-x-1">
                    <span className={`text-4xl font-bold tracking-tight ${tier.mostPopular ? 'text-white' : 'text-[#035183]'}`}>
                      {tier.price.monthly}
                    </span>
                    {tier.price.monthly !== 'Custom' && (
                      <span className={`text-sm font-semibold leading-6 ${tier.mostPopular ? 'text-white/80' : 'text-[#035183]/80'}`}>
                        /month
                      </span>
                    )}
                  </p>
                </div>
                <div className="h-[200px] mt-8">
                  <ul role="list" className="space-y-3 text-sm leading-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-white' : 'text-[#035183]'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={tier.mostPopular ? 'text-white/80' : 'text-[#035183]/80'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-[40px] mt-8">
                  <Link
                    href={tier.id === 'tier-enterprise' || tier.id === 'tier-classroom' ? '/?showContact=true' : '/?showContact=true'}
                    className={`block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      tier.mostPopular
                        ? 'bg-white text-[#035183] hover:bg-white/90 focus-visible:outline-white'
                        : 'bg-[#035183] text-white hover:bg-[#035183]/90 focus-visible:outline-[#035183]'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 