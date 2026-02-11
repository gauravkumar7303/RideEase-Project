'use client'

import { useState } from 'react'
import { 
  FaTimes, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUser, 
  FaCreditCard, 
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function BookingModal({ vehicle, isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    withDriver: false,
    paymentMethod: 'upi'
  })

  if (!isOpen) return null

  const steps = [
    { number: 1, title: 'Dates', icon: <FaCalendarAlt /> },
    { number: 2, title: 'Location', icon: <FaMapMarkerAlt /> },
    { number: 3, title: 'Payment', icon: <FaCreditCard /> },
    { number: 4, title: 'Confirm', icon: <FaCheckCircle /> }
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      handleConfirm()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConfirm = () => {
    toast.success('Booking confirmed successfully!')
    onClose()
  }

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateTotal = () => {
    const days = bookingData.returnDate && bookingData.pickupDate ? 
      Math.ceil((new Date(bookingData.returnDate) - new Date(bookingData.pickupDate)) / (1000 * 60 * 60 * 24)) : 1
    return vehicle.price * days + (bookingData.withDriver ? 500 * days : 0) + 300
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Book {vehicle?.brand} {vehicle?.model}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaTimes />
          </button>
        </div>

        {/* Steps Indicator */}
        <div className="px-6 py-4 border-b">
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step.number === currentStep 
                    ? 'bg-[--color-primary-600] text-white' 
                    : step.number < currentStep 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.number === currentStep ? step.icon : step.number}
                </div>
                <span className="text-sm">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Dates</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={bookingData.pickupDate}
                    onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={bookingData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Location</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <select
                    value={bookingData.pickupLocation}
                    onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                  >
                    <option value="">Select location</option>
                    <option value="delhi-cp">Delhi - Connaught Place</option>
                    <option value="delhi-aerocity">Delhi - Aerocity</option>
                    <option value="gurugram-cybercity">Gurugram - Cyber City</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Location
                  </label>
                  <select
                    value={bookingData.returnLocation}
                    onChange={(e) => handleInputChange('returnLocation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                  >
                    <option value="same">Same as Pickup</option>
                    <option value="delhi-cp">Delhi - Connaught Place</option>
                    <option value="delhi-aerocity">Delhi - Aerocity</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={bookingData.paymentMethod === 'upi'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="w-5 h-5 text-[--color-primary-600]"
                  />
                  <div>
                    <div className="font-semibold">UPI Payment</div>
                    <div className="text-gray-600 text-sm">Instant payment with UPI apps</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={bookingData.paymentMethod === 'card'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="w-5 h-5 text-[--color-primary-600]"
                  />
                  <div>
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-gray-600 text-sm">Pay with your card</div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirm Booking</h3>
              <p className="text-gray-600 mb-6">
                Total Amount: <span className="font-bold text-[--color-primary-600]">₹{calculateTotal()}</span>
              </p>
              <p className="text-gray-500 text-sm">
                By confirming, you agree to our terms and conditions
              </p>
            </div>
          )}

          {/* Pricing Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{vehicle?.brand} {vehicle?.model}</div>
                <div className="text-sm text-gray-600">₹{vehicle?.price}/day</div>
              </div>
              <div className="text-lg font-bold text-[--color-primary-600]">
                ₹{calculateTotal()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t">
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium ${
                currentStep === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[--color-primary-600] hover:bg-[--color-primary-50]'
              }`}
            >
              <FaArrowLeft className="inline mr-2" />
              Previous
            </button>
            
            <button
              onClick={handleNext}
              className="bg-[--color-primary-600] text-white px-8 py-3 rounded-lg font-medium hover:bg-[--color-primary-700] transition-colors"
            >
              {currentStep === 4 ? 'Confirm Booking' : 'Continue'}
              {currentStep < 4 && <FaArrowRight className="inline ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}