/*app/add-vehicle/page.js*/
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FaCar,
  FaMotorcycle,
  FaCamera,
  FaImage,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUpload,
  FaTimes
} from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function AddVehiclePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])

  const [vehicleData, setVehicleData] = useState({
    // Step 1: Basic Info
    vehicleType: 'car',
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    
    // Step 2: Features & Pricing
    features: ['ac', 'music', 'airbags'],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    securityDeposit: 5000,
    
    // Step 3: Location & Availability
    location: '',
    address: '',
    availableFrom: '',
    availableTo: '',
    
    // Step 4: Owner Info
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    bankAccount: ''
  })

  const featuresList = [
    { id: 'ac', label: 'Air Conditioning', icon: '❄️' },
    { id: 'music', label: 'Music System', icon: '🎵' },
    { id: 'airbags', label: 'Airbags', icon: '🛡️' },
    { id: 'gps', label: 'GPS Navigation', icon: '🗺️' },
    { id: 'bluetooth', label: 'Bluetooth', icon: '📱' },
    { id: 'camera', label: 'Reverse Camera', icon: '📷' },
    { id: 'sunroof', label: 'Sunroof', icon: '🌞' },
    { id: 'leather', label: 'Leather Seats', icon: '💺' }
  ]

  const handleInputChange = (field, value) => {
    setVehicleData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFeatureToggle = (featureId) => {
    setVehicleData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + images.length > 10) {
      toast.error('Maximum 10 images allowed')
      return
    }
    
    // Simulate image upload
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      name: file.name
    }))
    
    setImages(prev => [...prev, ...newImages])
    toast.success(`${files.length} image(s) added`)
  }

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id))
  }

  const calculateWeeklyPrice = (daily) => daily * 7 * 0.9 // 10% discount
  const calculateMonthlyPrice = (daily) => daily * 30 * 0.8 // 20% discount

  const handlePriceChange = (field, value) => {
    const price = parseFloat(value) || 0
    handleInputChange(field, price)
    
    if (field === 'pricePerDay') {
      handleInputChange('pricePerWeek', calculateWeeklyPrice(price))
      handleInputChange('pricePerMonth', calculateMonthlyPrice(price))
    }
  }

  const validateStep = () => {
    switch(step) {
      case 1:
        if (!vehicleData.brand || !vehicleData.model || !vehicleData.year) {
          toast.error('Please fill all required fields')
          return false
        }
        return true
      case 2:
        if (vehicleData.pricePerDay <= 0) {
          toast.error('Please set a valid price per day')
          return false
        }
        if (images.length < 2) {
          toast.error('Please upload at least 2 images')
          return false
        }
        return true
      case 3:
        if (!vehicleData.location || !vehicleData.address) {
          toast.error('Please provide location details')
          return false
        }
        return true
      case 4:
        if (!vehicleData.ownerName || !vehicleData.ownerPhone || !vehicleData.ownerEmail) {
          toast.error('Please fill all owner details')
          return false
        }
        return true
      default:
        return true
    }
  }

  const handleNext = () => {
    if (!validateStep()) return
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep()) return
    
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Vehicle listed successfully!')
      
      // Reset form and redirect
      setTimeout(() => {
        router.push('/profile')
      }, 1500)
      
    } catch (error) {
      toast.error('Failed to list vehicle. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { number: 1, title: 'Vehicle Details' },
    { number: 2, title: 'Photos & Pricing' },
    { number: 3, title: 'Location' },
    { number: 4, title: 'Owner Info' }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center relative z-10 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all ${
                  s.number === step 
                    ? 'bg-[--color-primary-600] text-white shadow-lg' 
                    : s.number < step 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {s.number < step ? <FaCheckCircle /> : s.number}
                </div>
                <span className={`text-sm font-medium ${s.number === step ? 'text-[--color-primary-600]' : 'text-gray-500'}`}>
                  {s.title}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
          {/* Step 1: Vehicle Details */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Vehicle Details</h2>
              
              <div className="space-y-6">
                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Vehicle Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${vehicleData.vehicleType === 'car' ? 'border-[--color-primary-600] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleInputChange('vehicleType', 'car')}
                    >
                      <div className="flex flex-col items-center">
                        <FaCar className="text-4xl mb-3 text-gray-600" />
                        <div className="font-semibold">Car</div>
                      </div>
                    </div>
                    <div
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${vehicleData.vehicleType === 'bike' ? 'border-[--color-primary-600] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleInputChange('vehicleType', 'bike')}
                    >
                      <div className="flex flex-col items-center">
                        <FaMotorcycle className="text-4xl mb-3 text-gray-600" />
                        <div className="font-semibold">Bike</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand *
                    </label>
                    <input
                      type="text"
                      value={vehicleData.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      placeholder="e.g., Hyundai, Honda, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      value={vehicleData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      placeholder="e.g., Creta, City, etc."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <select
                      value={vehicleData.year}
                      onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    >
                      {Array.from({ length: 20 }, (_, i) => {
                        const year = new Date().getFullYear() - i
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Type
                    </label>
                    <select
                      value={vehicleData.fuelType}
                      onChange={(e) => handleInputChange('fuelType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    >
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="cng">CNG</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transmission
                    </label>
                    <select
                      value={vehicleData.transmission}
                      onChange={(e) => handleInputChange('transmission', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    >
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                </div>

                {vehicleData.vehicleType === 'car' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Seats
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[2, 4, 5, 7, 8].map(seats => (
                        <button
                          key={seats}
                          type="button"
                          onClick={() => handleInputChange('seats', seats)}
                          className={`px-6 py-3 rounded-lg ${vehicleData.seats === seats ? 'bg-[--color-primary-600] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {seats} Seats
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Step 2: Photos & Pricing */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Photos & Pricing</h2>
              
              <div className="space-y-8">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Upload Photos * (Min. 2, Max. 10)
                  </label>
                  
                  {/* Upload Button */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-[--color-primary-500] transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="vehicle-images"
                    />
                    <label htmlFor="vehicle-images" className="cursor-pointer">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCamera className="text-2xl text-blue-600" />
                      </div>
                      <div className="text-lg font-medium mb-2">Click to upload photos</div>
                      <p className="text-gray-500 text-sm">
                        Upload clear photos from different angles
                      </p>
                      <div className="mt-4 text-sm text-gray-600">
                        Supports JPG, PNG • Max 5MB each
                      </div>
                    </label>
                  </div>

                  {/* Image Preview */}
                  {images.length > 0 && (
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="font-medium">Uploaded Photos ({images.length}/10)</div>
                        <div className="text-sm text-gray-500">
                          Click on image to remove
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image) => (
                          <div key={image.id} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                              {/* Mock image */}
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                                <FaImage className="text-3xl text-gray-400" />
                              </div>
                            </div>
                            <button
                              onClick={() => removeImage(image.id)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                              <FaTimes className="text-xs" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Features
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {featuresList.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${vehicleData.features.includes(feature.id) ? 'border-[--color-primary-600] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="text-sm font-medium">{feature.label}</div>
                        {vehicleData.features.includes(feature.id) && (
                          <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                            <FaCheckCircle />
                            Selected
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="text-lg font-semibold mb-6">Set Your Pricing</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FaRupeeSign className="text-gray-500" />
                        <div className="font-semibold">Daily Rate</div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          min="0"
                          value={vehicleData.pricePerDay}
                          onChange={(e) => handlePriceChange('pricePerDay', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                      <div className="mt-2 text-sm text-gray-500">Base price per day</div>
                    </div>
                    
                    <div className="border rounded-lg p-6 bg-blue-50">
                      <div className="flex items-center gap-2 mb-4">
                        <FaRupeeSign className="text-blue-600" />
                        <div className="font-semibold text-blue-600">Weekly Rate</div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        ₹{vehicleData.pricePerWeek}
                      </div>
                      <div className="mt-2 text-sm text-gray-500">Save 10% (₹{vehicleData.pricePerDay * 7 - vehicleData.pricePerWeek}/week)</div>
                    </div>
                    
                    <div className="border rounded-lg p-6 bg-green-50">
                      <div className="flex items-center gap-2 mb-4">
                        <FaRupeeSign className="text-green-600" />
                        <div className="font-semibold text-green-600">Monthly Rate</div>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        ₹{vehicleData.pricePerMonth}
                      </div>
                      <div className="mt-2 text-sm text-gray-500">Save 20% (₹{vehicleData.pricePerDay * 30 - vehicleData.pricePerMonth}/month)</div>
                    </div>
                  </div>
                </div>

                {/* Security Deposit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Deposit
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      min="0"
                      value={vehicleData.securityDeposit}
                      onChange={(e) => handleInputChange('securityDeposit', e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      placeholder="5000"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Refundable amount held for damages (recommended: ₹5,000)
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Location */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-[--color-primary-600]" />
                Location Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Location *
                  </label>
                  <select
                    value={vehicleData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                  >
                    <option value="">Select a location</option>
                    <option value="delhi-cp">Delhi - Connaught Place</option>
                    <option value="delhi-aerocity">Delhi - Aerocity</option>
                    <option value="gurugram-cybercity">Gurugram - Cyber City</option>
                    <option value="gurugram-sector29">Gurugram - Sector 29</option>
                    <option value="noida-sector62">Noida - Sector 62</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    value={vehicleData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    placeholder="Enter complete address with landmark"
                    rows="4"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available From
                    </label>
                    <input
                      type="date"
                      value={vehicleData.availableFrom}
                      onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available To
                    </label>
                    <input
                      type="date"
                      value={vehicleData.availableTo}
                      onChange={(e) => handleInputChange('availableTo', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      min={vehicleData.availableFrom || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Map Preview */}
                <div className="mt-8">
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🗺️</div>
                      <div className="font-semibold text-gray-700">Location Preview</div>
                      <p className="text-gray-500 text-sm mt-2">
                        Pickup location will be shown to customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 4: Owner Info */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Owner Information</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={vehicleData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={vehicleData.ownerPhone}
                      onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                      placeholder="Enter 10-digit phone number"
                      maxLength="10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={vehicleData.ownerEmail}
                    onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Account Details (for payments)
                  </label>
                  <input
                    type="text"
                    value={vehicleData.bankAccount}
                    onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    placeholder="Account number or UPI ID"
                  />
                  <div className="mt-2 text-sm text-gray-500">
                    Payments will be transferred to this account
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Listing Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium">{vehicleData.brand} {vehicleData.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Rate:</span>
                      <span className="font-medium">₹{vehicleData.pricePerDay}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{vehicleData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Deposit:</span>
                      <span className="font-medium">₹{vehicleData.securityDeposit}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Expected Monthly Earnings:</span>
                        <span className="text-green-600">₹{Math.round(vehicleData.pricePerMonth * 0.8)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        *Based on 80% occupancy rate
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 text-[--color-primary-600] rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions. I confirm that all information provided is accurate and I am the rightful owner of this vehicle. I understand that RideEase will charge a 15% commission on each booking.
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[--color-primary-600] hover:bg-[--color-primary-50] border border-gray-300'}`}
          >
            Previous
          </button>
          
          <button
            onClick={step === 4 ? handleSubmit : handleNext}
            disabled={loading}
            className={`px-8 py-3 rounded-lg font-medium flex items-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-black'}`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : step === 4 ? (
              <>
                <FaUpload />
                List Vehicle
              </>
            ) : (
              'Next Step'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}