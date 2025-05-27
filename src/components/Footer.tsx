import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const social = [
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Instagram', href: '#', icon: FaInstagram },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">F</span>
              </div>
              <Link href="/" className="text-xl font-display font-bold text-primary-600">
                FirstWork
              </Link>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Making learning on smart devices motivating and adaptive.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} FirstWork LLC. All rights reserved.
              </p>
              <br />
              <p className="text-xs text-gray-400">
                'Digital Reinforcement Learning Tech<br />
                Patent Pending'
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-xs text-gray-400 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col items-center space-y-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="w-[280px]">
            <h3 className="text-xs font-medium text-gray-900 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border-0 py-2.5 pl-9 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="block w-full rounded-lg border-0 py-2.5 px-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-sm py-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
} 