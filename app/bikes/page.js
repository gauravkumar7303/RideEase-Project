'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaFilter, FaTimes, FaMotorcycle, FaStar, FaMapMarkerAlt } from 'react-icons/fa'

export default function BikesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [bikes, setBikes] = useState([])
  const [filteredBikes, setFilteredBikes] = useState([])
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [],
    rating: null,
    features: []
  })

  useEffect(() => {
    // Sample bike data
    const bikeData = [
      {
        id: 1,
        type: 'bike',
        brand: 'Royal Enfield',
        model: 'Classic 350',
        price: 800,
        location: 'Delhi, CP',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500',
        features: ['350cc', 'Petrol', 'Cruiser'],
        available: true,
        verified: true,
        delivery: 'Free'
      },
      {
        id: 2,
        type: 'bike',
        brand: 'KTM',
        model: 'Duke 390',
        price: 1200,
        location: 'Gurugram, Cyber City',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500',
        features: ['390cc', 'Petrol', 'Sports'],
        available: true,
        verified: true,
        delivery: 'Free'
      },
      {
        id: 3,
        type: 'bike',
        brand: 'Honda',
        model: 'Activa 125',
        price: 500,
        location: 'Delhi, Rohini',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=500',
        features: ['125cc', 'Petrol', 'Scooter'],
        available: true,
        verified: true,
        delivery: '₹50'
      },
      {
        id: 4,
        type: 'bike',
        brand: 'Yamaha',
        model: 'R15 V4',
        price: 1100,
        location: 'Gurugram, Sector 29',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1599744357807-5d5d6005d8c3?auto=format&fit=crop&w=500',
        features: ['155cc', 'Petrol', 'Sports'],
        available: true,
        verified: true,
        delivery: 'Free'
      }
    ]
    
    setBikes(bikeData)
    setFilteredBikes(bikeData)
    setLoading(false)

    // Check for URL filters
    const brand = searchParams.get('brand')
    if (brand) {
      setFilters(prev => ({ ...prev, brand: [brand] }))
    }
  }, [searchParams])

  useEffect(() => {
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    let result = [...bikes]

    // Brand filter
    if (filters.brand.length > 0) {
      result = result.filter(bike => filters.brand.includes(bike.brand))
    }

    // Price range filter
    if (filters.priceRange.length > 0) {
      const priceFilter = filters.priceRange[0]
      result = result.filter(bike => 
        bike.price >= priceFilter.min && bike.price <= priceFilter.max
      )
    }

    // Rating filter
    if (filters.rating) {
      result = result.filter(bike => bike.rating >= filters.rating)
    }

    // Features filter
    if (filters.features.length > 0) {
      result = result.filter(bike => {
        return filters.features.every(feature => {
          if (feature === 'free_delivery') return bike.delivery === 'Free'
          if (feature === 'verified') return bike.verified
          return true
        })
      })
    }

    setFilteredBikes(result)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (filterType === 'brand' || filterType === 'features' || filterType === 'priceRange') {
        const current = prev[filterType]
        const exists = current.find(item => 
          typeof item === 'object' ? item.min === value.min : item === value
        )
        
        if (exists) {
          return {
            ...prev,
            [filterType]: current.filter(item => 
              typeof item === 'object' ? item.min !== value.min : item !== value
            )
          }
        } else {
          return {
            ...prev,
            [filterType]: [...current, value]
          }
        }
      } else {
        return {
          ...prev,
          [filterType]: prev[filterType] === value ? null : value
        }
      }
    })
  }

  const clearFilters = () => {
    setFilters({
      brand: [],
      priceRange: [],
      rating: null,
      features: []
    })
  }

  const handleBookNow = (bikeId) => {
    router.push(`/booking?vehicle=${bikeId}`)
  }

  const activeFiltersCount = Object.values(filters).reduce((count, filter) => {
    if (Array.isArray(filter)) {
      return count + filter.length
    }
    return count + (filter ? 1 : 0)
  }, 0)

  const BRANDS = {
    bikes: [
      'Royal Enfield', 'KTM', 'Honda', 'Yamaha', 'Bajaj', 
      'TVS', 'Hero', 'Suzuki', 'Kawasaki', 'BMW'
    ]
  }

  const FILTER_OPTIONS = {
    priceRanges: [
      { label: 'Under ₹500', min: 0, max: 500 },
      { label: '₹500 - ₹1000', min: 500, max: 1000 },
      { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
      { label: '₹2000 - ₹3000', min: 2000, max: 3000 },
      { label: 'Above ₹3000', min: 3000, max: 10000 }
    ],
    ratings: [
      { label: '4.5 & above', value: 4.5 },
      { label: '4.0 & above', value: 4.0 },
      { label: '3.5 & above', value: 3.5 },
      { label: '3.0 & above', value: 3.0 }
    ],
    features: [
      { label: 'Free Delivery', value: 'free_delivery' },
      { label: 'Company Verified', value: 'verified' },
      { label: 'Instant Booking', value: 'instant' }
    ]
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-lg flex items-center justify-center">
              <FaMotorcycle className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-display">Rent Bikes in Delhi & Gurugram</h1>
              <p className="text-gray-600 mt-2">Choose from 100+ verified bikes with damage protection</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <FaStar className="text-yellow-400 mr-2" />
                <span>4.8/5 (2,500+ Reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-[--color-primary-600] mr-2" />
                <span>50+ Pickup Locations</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {filteredBikes.length} bikes available
              </span>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="border-2 border-[--color-primary-600] text-[--color-primary-600] px-4 py-2 rounded-lg font-medium hover:bg-[--color-primary-50] transition-colors flex items-center gap-2"
              >
                <FaFilter />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-[--color-primary-600] hover:text-[--color-primary-800] text-sm font-medium"
                >
                  Clear all
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-2">
                  {FILTER_OPTIONS.priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.priceRange.some(r => r.label === range.label)}
                        onChange={() => handleFilterChange('priceRange', range)}
                        className="w-4 h-4 text-[--color-primary-600] rounded"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rating</h4>
                <div className="space-y-2">
                  {FILTER_OPTIONS.ratings.map((rating) => (
                    <label key={rating.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating.value}
                        onChange={() => handleFilterChange('rating', rating.value)}
                        className="w-4 h-4 text-[--color-primary-600]"
                      />
                      <span className="flex items-center text-gray-700">
                        <FaStar className="text-yellow-400 mr-1" />
                        {rating.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Features</h4>
                <div className="space-y-2">
                  {FILTER_OPTIONS.features.map((feature) => (
                    <label key={feature.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.features.includes(feature.value)}
                        onChange={() => handleFilterChange('features', feature.value)}
                        className="w-4 h-4 text-[--color-primary-600] rounded"
                      />
                      <span className="text-gray-700">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Header */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}

          {/* Bikes Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredBikes.length > 0 ? (
              <>
                {/* Active Filters */}
                {activeFiltersCount > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filters.brand.map(brand => (
                      <span key={brand} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Brand: {brand}
                        <button
                          onClick={() => handleFilterChange('brand', brand)}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    {filters.priceRange.map(range => (
                      <span key={range.label} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Price: {range.label}
                        <button
                          onClick={() => handleFilterChange('priceRange', range)}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    {filters.rating && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Rating: {filters.rating}+
                        <button
                          onClick={() => handleFilterChange('rating', filters.rating)}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    <button
                      onClick={clearFilters}
                      className="text-[--color-primary-600] hover:text-[--color-primary-800] text-sm font-medium"
                    >
                      Clear all
                    </button>
                  </div>
                )}

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBikes.map(bike => (
                    <div key={bike.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={bike.image} 
                          alt={`${bike.brand} ${bike.model}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                            🏍️ BIKE
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[--color-primary-600] transition-colors">
                          {bike.brand} {bike.model}
                        </h3>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt className="text-gray-400 text-sm mr-1" />
                          <span className="text-sm text-gray-500">{bike.location}</span>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-[--color-primary-600]">
                              ₹{bike.price}
                              <span className="text-sm text-gray-500 font-normal">/day</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <FaStar className="text-yellow-400 mr-1" />
                              <span className="font-semibold">{bike.rating}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => handleBookNow(bike.id)}
                            className="bg-[--color-primary-600] text-white px-6 py-2 rounded-lg hover:bg-[--color-primary-700] transition-colors"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaMotorcycle className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No bikes found</h3>
                <p className="text-gray-600 mb-6">Try changing your filters or search criteria</p>
                <button
                  onClick={clearFilters}
                  className="bg-[--color-primary-600] text-white px-6 py-3 rounded-lg hover:bg-[--color-primary-700] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Brand Quick Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 font-display">Popular Bike Brands</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {BRANDS.bikes.map(brand => (
                  <button
                    key={brand}
                    onClick={() => {
                      handleFilterChange('brand', brand)
                      if (window.innerWidth < 1024) {
                        setShowFilters(false)
                      }
                    }}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      filters.brand.includes(brand)
                        ? 'border-[--color-primary-500] bg-[--color-primary-50] text-[--color-primary-700]'
                        : 'border-gray-200 hover:border-[--color-primary-300] hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{brand}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}