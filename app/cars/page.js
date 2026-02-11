'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaFilter, FaTimes, FaCar, FaStar, FaMapMarkerAlt, FaGasPump, FaCogs, FaSnowflake } from 'react-icons/fa'

export default function CarsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [],
    transmission: [],
    fuelType: [],
    rating: null,
    features: []
  })

  useEffect(() => {
    // Sample car data
    const carData = [
      {
        id: 1,
        type: 'car',
        brand: 'Hyundai',
        model: 'Creta SX',
        price: 2200,
        location: 'Delhi, Aerocity',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=500',
        features: ['Automatic', 'Petrol', '5 Seater', 'AC', 'Sunroof'],
        transmission: 'Automatic',
        fuelType: 'Petrol',
        seats: 5,
        verified: true,
        delivery: 'Free'
      },
      {
        id: 2,
        type: 'car',
        brand: 'Maruti Suzuki',
        model: 'Swift Dzire',
        price: 1800,
        location: 'Gurugram, Sector 14',
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=500',
        features: ['Manual', 'Petrol', '5 Seater', 'AC'],
        transmission: 'Manual',
        fuelType: 'Petrol',
        seats: 5,
        verified: true,
        delivery: '₹100'
      },
      {
        id: 3,
        type: 'car',
        brand: 'Toyota',
        model: 'Innova Crysta',
        price: 3500,
        location: 'Delhi, Saket',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500',
        features: ['Automatic', 'Diesel', '7 Seater', 'AC', 'Leather Seats'],
        transmission: 'Automatic',
        fuelType: 'Diesel',
        seats: 7,
        verified: true,
        delivery: 'Free'
      },
      {
        id: 4,
        type: 'car',
        brand: 'Tata',
        model: 'Nexon EV',
        price: 2800,
        location: 'Gurugram, Sector 45',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500',
        features: ['Automatic', 'Electric', '5 Seater', 'AC', 'Sunroof'],
        transmission: 'Automatic',
        fuelType: 'Electric',
        seats: 5,
        verified: true,
        delivery: 'Free'
      },
    ]
    
    setCars(carData)
    setFilteredCars(carData)
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
    let result = [...cars]

    // Brand filter
    if (filters.brand.length > 0) {
      result = result.filter(car => filters.brand.includes(car.brand))
    }

    // Price range filter
    if (filters.priceRange.length > 0) {
      const priceFilter = filters.priceRange[0]
      result = result.filter(car => 
        car.price >= priceFilter.min && car.price <= priceFilter.max
      )
    }

    // Transmission filter
    if (filters.transmission.length > 0) {
      result = result.filter(car => filters.transmission.includes(car.transmission))
    }

    // Fuel type filter
    if (filters.fuelType.length > 0) {
      result = result.filter(car => filters.fuelType.includes(car.fuelType))
    }

    // Rating filter
    if (filters.rating) {
      result = result.filter(car => car.rating >= filters.rating)
    }

    // Features filter
    if (filters.features.length > 0) {
      result = result.filter(car => {
        return filters.features.every(feature => {
          if (feature === 'free_delivery') return car.delivery === 'Free'
          if (feature === 'verified') return car.verified
          if (feature === 'ac') return car.features.includes('AC')
          return true
        })
      })
    }

    setFilteredCars(result)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (filterType === 'brand' || filterType === 'features' || 
          filterType === 'priceRange' || filterType === 'transmission' || 
          filterType === 'fuelType') {
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
      transmission: [],
      fuelType: [],
      rating: null,
      features: []
    })
  }

  const handleBookNow = (carId) => {
    router.push(`/booking?vehicle=${carId}`)
  }

  const activeFiltersCount = Object.values(filters).reduce((count, filter) => {
    if (Array.isArray(filter)) {
      return count + filter.length
    }
    return count + (filter ? 1 : 0)
  }, 0)

  const BRANDS = {
    cars: [
      'Maruti Suzuki', 'Hyundai', 'Toyota', 'Honda', 'Tata',
      'Mahindra', 'Ford', 'Volkswagen', 'Skoda', 'MG', 'Kia'
    ]
  }

  const FILTER_OPTIONS = {
    priceRanges: [
      { label: 'Under ₹1500', min: 0, max: 1500 },
      { label: '₹1500 - ₹2500', min: 1500, max: 2500 },
      { label: '₹2500 - ₹3500', min: 2500, max: 3500 },
      { label: '₹3500 - ₹5000', min: 3500, max: 5000 },
      { label: 'Above ₹5000', min: 5000, max: 20000 }
    ],
    transmissions: [
      { label: 'Automatic', value: 'Automatic' },
      { label: 'Manual', value: 'Manual' }
    ],
    fuelTypes: [
      { label: 'Petrol', value: 'Petrol' },
      { label: 'Diesel', value: 'Diesel' },
      { label: 'Electric', value: 'Electric' },
      { label: 'CNG', value: 'CNG' }
    ],
    ratings: [
      { label: '4.5 & above', value: 4.5 },
      { label: '4.0 & above', value: 4.0 },
      { label: '3.5 & above', value: 3.5 },
      { label: '3.0 & above', value: 3.0 }
    ],
    features: [
      { label: 'AC Available', value: 'ac' },
      { label: 'Free Delivery', value: 'free_delivery' },
      { label: 'With Driver Option', value: 'with_driver' },
      { label: 'Company Verified', value: 'verified' }
    ]
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-lg flex items-center justify-center">
              <FaCar className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-display">Rent Cars in Delhi & Gurugram</h1>
              <p className="text-gray-600 mt-2">Choose from premium cars with optional driver service</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <FaStar className="text-yellow-400 mr-2" />
                <span>4.7/5 (3,000+ Reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-[--color-primary-600] mr-2" />
                <span>30+ Pickup Locations</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {filteredCars.length} cars available
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
                <h4 className="font-semibold mb-3">Price Range (per day)</h4>
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

              {/* Transmission */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Transmission</h4>
                <div className="space-y-2">
                  {FILTER_OPTIONS.transmissions.map((trans) => (
                    <label key={trans.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.transmission.includes(trans.value)}
                        onChange={() => handleFilterChange('transmission', trans.value)}
                        className="w-4 h-4 text-[--color-primary-600] rounded"
                      />
                      <span className="text-gray-700">{trans.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Fuel Type</h4>
                <div className="space-y-2">
                  {FILTER_OPTIONS.fuelTypes.map((fuel) => (
                    <label key={fuel.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.fuelType.includes(fuel.value)}
                        onChange={() => handleFilterChange('fuelType', fuel.value)}
                        className="w-4 h-4 text-[--color-primary-600] rounded"
                      />
                      <span className="text-gray-700">{fuel.label}</span>
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

          {/* Cars Grid */}
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
            ) : filteredCars.length > 0 ? (
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
                    {filters.transmission.map(trans => (
                      <span key={trans} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Transmission: {trans}
                        <button
                          onClick={() => handleFilterChange('transmission', trans)}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <button
                      onClick={clearFilters}
                      className="text-[--color-primary-600] hover:text-[--color-primary-800] text-sm font-medium"
                    >
                      Clear all
                    </button>
                  </div>
                )}

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map(car => (
                    <div key={car.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={car.image} 
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            🚗 CAR
                          </span>
                        </div>
                        {car.fuelType === 'Electric' && (
                          <div className="absolute top-3 right-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              ⚡ Electric
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[--color-primary-600] transition-colors">
                          {car.brand} {car.model}
                        </h3>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt className="text-gray-400 text-sm mr-1" />
                          <span className="text-sm text-gray-500">{car.location}</span>
                        </div>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
                            <FaCogs className="text-gray-500" />
                            <span>{car.transmission}</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
                            <FaGasPump className="text-gray-500" />
                            <span>{car.fuelType}</span>
                          </div>
                          {car.features.includes('AC') && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
                              <FaSnowflake className="text-gray-500" />
                              <span>AC</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-[--color-primary-600]">
                              ₹{car.price}
                              <span className="text-sm text-gray-500 font-normal">/day</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <FaStar className="text-yellow-400 mr-1" />
                              <span className="font-semibold">{car.rating}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => router.push(`/booking?vehicle=${car.id}&type=car&withDriver=true`)}
                              className="border-2 border-[--color-primary-600] text-[--color-primary-600] px-4 py-2 rounded-lg hover:bg-[--color-primary-50] transition-colors text-sm"
                            >
                              With Driver
                            </button>
                            <button 
                              onClick={() => handleBookNow(car.id)}
                              className="bg-[--color-primary-600] text-white px-4 py-2 rounded-lg hover:bg-[--color-primary-700] transition-colors text-sm"
                            >
                              Self Drive
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCar className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No cars found</h3>
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
              <h3 className="text-xl font-semibold mb-6 font-display">Popular Car Brands</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {BRANDS.cars.map(brand => (
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

            {/* Car Types Info */}
            <div className="mt-12 bg-gradient-to-r from-[--color-primary-50] to-[--color-primary-100] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 font-display">Rental Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Self Drive</h4>
                  <p className="text-gray-600 text-sm mb-3">Drive the car yourself with flexible pickup and drop locations</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Free cancellation up to 24 hours</li>
                    <li>• Comprehensive insurance included</li>
                    <li>• 24/7 roadside assistance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">With Driver</h4>
                  <p className="text-gray-600 text-sm mb-3">Professional driver provided for hassle-free travel</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Verified drivers with background check</li>
                    <li>• Flexible hourly/daily packages</li>
                    <li>• Perfect for business trips & tours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}