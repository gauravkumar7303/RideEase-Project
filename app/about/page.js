'use client'

import { FaShieldAlt, FaUsers, FaMapMarkerAlt, FaAward, FaChartLine, FaHandshake } from 'react-icons/fa'

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: <FaUsers /> },
    { label: 'Vehicles Rented', value: '25,000+', icon: <FaChartLine /> },
    { label: 'Cities Covered', value: '2', icon: <FaMapMarkerAlt /> },
    { label: 'Service Rating', value: '4.8/5', icon: <FaAward /> },
  ]

  const values = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Safety First',
      description: 'Every vehicle undergoes thorough inspection and verification before delivery'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Trust & Transparency',
      description: 'No hidden charges, clear pricing, and honest communication'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Customer Centric',
      description: '24/7 support and personalized service for every user'
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            About <span className="text-[--color-primary-600]">RideEase</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted bike and car rental platform in Delhi & Gurugram. 
            Bridging the gap between vehicle owners and renters through company-managed verification.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-primary-100] rounded-full flex items-center justify-center text-[--color-primary-600] text-xl mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To make vehicle rental accessible, affordable, and safe for everyone in Delhi NCR. 
              We aim to revolutionize urban mobility through technology and trusted services.
            </p>
            <p className="text-gray-600">
              By providing company-verified vehicles with comprehensive insurance, 
              we eliminate the trust issues associated with traditional rental services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To become India's most trusted vehicle rental platform, expanding to 50+ cities 
              and serving 1 million customers by 2026.
            </p>
            <p className="text-gray-600">
              We envision a future where renting a vehicle is as easy and reliable as 
              booking a ride-sharing service.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center font-display">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[--color-primary-100] rounded-xl flex items-center justify-center text-[--color-primary-600] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-gradient-to-r from-[--color-primary-50] to-[--color-primary-100] p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-display">How We Ensure Safety</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-2xl font-bold text-[--color-primary-600] mb-2">01</div>
              <h3 className="text-lg font-semibold mb-3">Vehicle Verification</h3>
              <p className="text-gray-600">Physical inspection of every vehicle by company representatives</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-2xl font-bold text-[--color-primary-600] mb-2">02</div>
              <h3 className="text-lg font-semibold mb-3">Document Check</h3>
              <p className="text-gray-600">RC book, insurance, and PUC verification for all vehicles</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-2xl font-bold text-[--color-primary-600] mb-2">03</div>
              <h3 className="text-lg font-semibold mb-3">Damage Protection</h3>
              <p className="text-gray-600">Comprehensive insurance coverage for every rental</p>
            </div>
          </div>
        </div>

        {/* Team Info */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Project Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MCA Project by <span className="font-semibold">Gaurav Kumar (2451232556)</span><br />
            Guided by <span className="font-semibold">Mr. Vishal Dhiman</span><br />
            Indira Gandhi National Open University, RC Delhi-3
          </p>
        </div>
      </div>
    </div>
  )
}