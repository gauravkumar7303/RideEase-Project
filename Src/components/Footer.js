import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Self-Drive Bikes', href: '/bikes' },
      { name: 'Self-Drive Cars', href: '/cars' },
      { name: 'Car with Driver', href: '/cars?withDriver=true' },
      { name: 'Long Term Rental', href: '/rental/long-term' },
      { name: 'Corporate Rental', href: '/corporate' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Safety', href: '/safety' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    cities: [
      { name: 'Delhi', href: '/delhi' },
      { name: 'Gurugram', href: '/gurugram' },
      { name: 'Noida', href: '/noida' },
      { name: 'Faridabad', href: '/faridabad' },
      { name: 'Ghaziabad', href: '/ghaziabad' },
    ],
  }

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="section-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">RideEase</h3>
                  <p className="text-gray-400 text-sm">Delhi & Gurugram</p>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted bike and car rental platform in Delhi NCR. 
                Company-verified vehicles with end-to-end service, damage protection, and 24/7 support.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                             hover:bg-[--color-primary-600] transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaPhone className="text-[--color-primary-500]" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaEnvelope className="text-[--color-primary-500]" />
                  <span>support@rideease.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="text-[--color-primary-500]" />
                  <span>Delhi & Gurugram, India</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Our Cities</h4>
                <div className="flex flex-wrap gap-2">
                  {footerLinks.cities.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm 
                               hover:bg-[--color-primary-600] transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} RideEase. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}