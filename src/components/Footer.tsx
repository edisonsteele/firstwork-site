import Link from 'next/link'

const navigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Method', href: '/our-method' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: "Don't Sell My Data", href: '/do-not-sell' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-display font-bold text-primary-600">
              FirstWork
            </Link>
            <p className="text-base text-gray-500">
              Making learning on smart devices motivating and adaptive.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FirstWork LLC. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              'Digital Reinforcement Learning Technology' Patent Pending
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-primary-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-primary-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 