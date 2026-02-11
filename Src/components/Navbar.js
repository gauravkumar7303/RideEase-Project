'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaMotorcycle, FaCar, FaUser, FaHeart, FaShoppingCart, FaBell } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bikes', href: '/bikes', icon: <FaMotorcycle /> },
    { name: 'Cars', href: '/cars', icon: <FaCar /> },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const user = {
    name: 'Gaurav Kumar',
    avatar: 'GK',
    bookings: 3,
    favorites: 5,
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-800] rounded-lg flex items-center justify-center">
              <FaMotorcycle className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              RideEase
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[--color-primary-600]'
                    : 'text-gray-600 hover:text-[--color-primary-600]'
                }`}
              >
                {link.icon && <span>{link.icon}</span>}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 text-gray-600 hover:text-[--color-primary-600] relative"
              onClick={() => toast.info('Favorites feature coming soon!')}
            >
              <FaHeart className="text-xl" />
              {user.favorites > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {user.favorites}
                </span>
              )}
            </button>

            <button 
              className="p-2 text-gray-600 hover:text-[--color-primary-600] relative"
              onClick={() => toast.info('Notifications feature coming soon!')}
            >
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[--color-primary-600] rounded-full"></span>
            </button>

            <Link
              href="/booking"
              className="p-2 text-gray-600 hover:text-[--color-primary-600] relative"
            >
              <FaShoppingCart className="text-xl" />
              {user.bookings > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[--color-primary-600] text-white text-xs rounded-full flex items-center justify-center">
                  {user.bookings}
                </span>
              )}
            </Link>

            <Link
              href="/profile"
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-800] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{user.avatar}</span>
              </div>
              <span className="font-medium hidden lg:inline">{user.name}</span>
            </Link>

            <Link
              href="/booking"
              className="bg-[--color-primary-600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[--color-primary-700] transition-colors ml-4"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[--color-primary-600]"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-[--color-primary-50] text-[--color-primary-600]'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon && <span className="text-lg">{link.icon}</span>}
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t space-y-3">
                <Link
                  href="/profile"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUser />
                  <span>My Profile</span>
                </Link>
                <Link
                  href="/booking"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <FaShoppingCart />
                  <span>My Bookings</span>
                </Link>
                <button className="bg-[--color-primary-600] text-white w-full py-3 rounded-lg font-medium mt-2">
                  Book Vehicle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}