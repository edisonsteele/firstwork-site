'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/lib/AuthContext'
import { getProfile } from '@/lib/profile'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Our Method', href: '/our-method' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Support', href: '/support' }
]

function DefaultAvatar() {
  return (
    <span className="inline-block w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
      </svg>
    </span>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const [profileLoading, setProfileLoading] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setProfileLoading(true)
      getProfile(user.id)
        .then(({ data }) => setProfile(data))
        .finally(() => setProfileLoading(false))
    } else {
      setProfile(null)
    }
  }, [user])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <header className="relative z-[1100] isolate overflow-hidden bg-gradient-to-b from-[#6FCEF4]/10 to-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-display font-bold">
              <span className="text-[#035183]">First</span>
              <span className="text-[#6FCEF4]">Work</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#035183]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-[#035183] hover:text-[#6FCEF4] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          {!user && (
            <Link href="/login" className="text-sm font-semibold leading-6 text-[#035183] hover:text-[#6FCEF4] transition-colors py-2">
              Log in
            </Link>
          )}
          {user && (
            <>
              <Link
                href="/create"
                className="rounded-md bg-[#035183] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
              >
                Create
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setDropdownOpen((open) => !open)}
                  aria-label="Open profile menu"
                >
                  {profile && profile.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <DefaultAvatar />
                  )}
                </button>
                {dropdownOpen && (
                  <>
                    {/* Overlay */}
                    <div
                      className="fixed inset-0 z-[1199] bg-transparent"
                      aria-hidden="true"
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Dropdown menu */}
                    <div
                      className="fixed top-16 right-8 min-h-[100px] min-w-[200px] bg-white border border-gray-300 rounded-lg shadow-xl z-[1200] py-2"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Link
                        href="/profile"
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        type="button"
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        onClick={() => { signOut(); setDropdownOpen(false); }}
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-display font-bold text-primary-600">FirstWork</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                {!user && (
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                )}
                {user && (
                  <>
                    <Link
                      href="/profile"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      type="button"
                      className="block w-full btn btn-primary"
                      onClick={() => { signOut(); setMobileMenuOpen(false); }}
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 