import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Curriculum',
    description: 'Features essential learning areas including Matching, FFC (Feature, Function, Class), Mathematics, Phonics, and more.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Cross-Platform',
    description: 'Available on iOS and other platforms, ensuring accessibility across devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Affordable Pricing',
    description: 'Starting at just $12.99/month, making quality education accessible to everyone.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'No Data Collection',
    description: 'We prioritize privacy - FirstWork doesn\'t collect any user data, ensuring complete confidentiality.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Personalized Learning',
    description: 'Adapts to each learner\'s pace with customizable programs and goals.',
    icon: UserGroupIcon,
  },
  {
    name: 'Digital Reinforcement',
    description: 'Patented technology that makes learning engaging and effective through smart device motivation.',
    icon: SparklesIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#035183]">Why FirstWork</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">
            Transform Learning with Smart Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork combines comprehensive curriculum with innovative digital reinforcement learning technology to create an engaging and effective educational experience.
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* App Screenshot */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative aspect-[9/19.5] w-full max-w-[300px] bg-[#6FCEF4]/10 rounded-3xl overflow-hidden border-2 border-dashed border-[#6FCEF4] flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-[#035183] font-medium">App Screenshot</p>
                  <p className="text-sm text-[#035183]/60 mt-2">1170 x 2532 pixels</p>
                  <p className="text-xs text-[#035183]/40 mt-1">iPhone 13 Pro resolution</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="order-1 lg:order-2">
              <dl className="grid grid-cols-2 gap-x-12">
                <div className="flex flex-col justify-between h-[600px]">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature.name} className="flex flex-col items-center text-center">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183] whitespace-nowrap">
                        <feature.icon className="h-5 w-5 flex-none text-[#6FCEF4]" aria-hidden="true" />
                        <span className="truncate">{feature.name}</span>
                      </dt>
                      <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-between h-[600px]">
                  {features.slice(3, 6).map((feature) => (
                    <div key={feature.name} className="flex flex-col items-center text-center">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#035183] whitespace-nowrap">
                        <feature.icon className="h-5 w-5 flex-none text-[#6FCEF4]" aria-hidden="true" />
                        <span className="truncate">{feature.name}</span>
                      </dt>
                      <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-[#035183]/80">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 