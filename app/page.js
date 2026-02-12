// // // 'use client'

// // // import { useState, useEffect } from 'react'
// // // import { useRouter } from 'next/navigation'
// // // import { 
// // //   FaSearch, 
// // //   FaStar, 
// // //   FaUsers, 
// // //   FaShieldAlt, 
// // //   FaCar, 
// // //   FaMotorcycle,
// // //   FaMapMarkerAlt,
// // //   FaCalendarAlt,
// // //   FaChevronLeft,
// // //   FaChevronRight
// // // } from 'react-icons/fa'

// // // export default function HomePage() {
// // //   const router = useRouter()
// // //   const [currentSlide, setCurrentSlide] = useState(0)
// // //   const [loading, setLoading] = useState(false)
  
// // //   const heroImages = [
// // //     'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920',
// // //     'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920',
// // //     'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920',
// // //   ]

// // //   const features = [
// // //     {
// // //       icon: <FaShieldAlt className="text-2xl" />,
// // //       title: 'Company Verified',
// // //       description: 'All vehicles undergo 50-point inspection by our team',
// // //       bgColor: 'bg-blue-100',
// // //       color: 'text-blue-600'
// // //     },
// // //     {
// // //       icon: <FaCar className="text-2xl" />,
// // //       title: 'Wide Selection',
// // //       description: 'Choose from bikes, cars, and SUVs with driver options',
// // //       bgColor: 'bg-green-100',
// // //       color: 'text-green-600'
// // //     },
// // //     {
// // //       icon: <FaUsers className="text-2xl" />,
// // //       title: '24/7 Support',
// // //       description: 'Dedicated support team available round the clock',
// // //       bgColor: 'bg-purple-100',
// // //       color: 'text-purple-600'
// // //     },
// // //     {
// // //       icon: <FaStar className="text-2xl" />,
// // //       title: 'Best Prices',
// // //       description: 'Competitive pricing with transparent costs',
// // //       bgColor: 'bg-orange-100',
// // //       color: 'text-orange-600'
// // //     }
// // //   ]

// // //   const popularVehicles = [
// // //     {
// // //       id: 1,
// // //       brand: 'Royal Enfield',
// // //       model: 'Classic 350',
// // //       type: 'bike',
// // //       price: 699,
// // //       rating: 4.8,
// // //       image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500'
// // //     },
// // //     {
// // //       id: 2,
// // //       brand: 'Hyundai',
// // //       model: 'Creta',
// // //       type: 'car',
// // //       price: 2499,
// // //       rating: 4.7,
// // //       image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500'
// // //     },
// // //     {
// // //       id: 3,
// // //       brand: 'KTM',
// // //       model: 'Duke 390',
// // //       type: 'bike',
// // //       price: 899,
// // //       rating: 4.9,
// // //       image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500'
// // //     },
// // //     {
// // //       id: 4,
// // //       brand: 'Maruti Suzuki',
// // //       model: 'Swift',
// // //       type: 'car',
// // //       price: 1999,
// // //       rating: 4.6,
// // //       image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500'
// // //     }
// // //   ]

// // //   const howItWorks = [
// // //     {
// // //       step: '01',
// // //       title: 'Search & Select',
// // //       description: 'Choose from verified bikes and cars in your location',
// // //       icon: <FaSearch />
// // //     },
// // //     {
// // //       step: '02',
// // //       title: 'Book & Pay',
// // //       description: 'Select dates and make secure payment online',
// // //       icon: <FaCalendarAlt />
// // //     },
// // //     {
// // //       step: '03',
// // //       title: 'Vehicle Delivery',
// // //       description: 'Company representative delivers verified vehicle',
// // //       icon: <FaCar />
// // //     },
// // //     {
// // //       step: '04',
// // //       title: 'Enjoy & Return',
// // //       description: 'Use the vehicle and return at designated location',
// // //       icon: <FaMotorcycle />
// // //     },
// // //   ]

// // //   const testimonials = [
// // //     {
// // //       name: 'Rahul Sharma',
// // //       role: 'Software Engineer',
// // //       comment: 'Best bike rental service in Delhi! The Classic 350 was in perfect condition.',
// // //       rating: 5,
// // //       avatar: 'RS'
// // //     },
// // //     {
// // //       name: 'Priya Singh',
// // //       role: 'College Student',
// // //       comment: 'Perfect for my daily commute. Affordable prices and excellent support.',
// // //       rating: 5,
// // //       avatar: 'PS'
// // //     },
// // //     {
// // //       name: 'Amit Verma',
// // //       role: 'Business Traveler',
// // //       comment: 'Car with driver service saved me so much time during my business trips.',
// // //       rating: 4,
// // //       avatar: 'AV'
// // //     }
// // //   ]

// // //   const nextSlide = () => {
// // //     setCurrentSlide((prev) => (prev + 1) % heroImages.length)
// // //   }

// // //   const prevSlide = () => {
// // //     setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
// // //   }

// // //   const goToSlide = (index) => {
// // //     setCurrentSlide(index)
// // //   }

// // //   const handleBookNow = (vehicleId) => {
// // //     router.push(`/booking?vehicle=${vehicleId}`)
// // //   }

// // //   useEffect(() => {
// // //     const interval = setInterval(nextSlide, 5000)
// // //     return () => clearInterval(interval)
// // //   }, [])

// // //   // If you want to redirect users to auth page when not logged in, add this:
// // //   useEffect(() => {
// // //     // Check if user is logged in
// // //     const user = localStorage.getItem('user')
// // //     const authToken = localStorage.getItem('authToken')
    
// // //     if (!user || !authToken) {
// // //       // If not logged in, redirect to auth
// // //       router.push('/auth')
// // //     }
// // //   }, [router])

// // //   return (
// // //     <>
// // //       {/* Hero Section with Slideshow */}
// // //       <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden h-[85vh] min-h-[600px]">
// // //         {/* Slideshow Container */}
// // //         <div className="absolute inset-0 overflow-hidden">
// // //           {heroImages.map((image, index) => (
// // //             <div
// // //               key={index}
// // //               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// // //                 index === currentSlide ? 'opacity-100' : 'opacity-0'
// // //               }`}
// // //             >
// // //               <div
// // //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// // //                 style={{
// // //                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
// // //                   animation: index === currentSlide ? 'zoomIn 15s ease-in-out infinite alternate' : 'none'
// // //                 }}
// // //               />
// // //             </div>
// // //           ))}
          
// // //           {/* Animated Overlay */}
// // //           <div className="absolute inset-0">
// // //             <div className="absolute top-0 right-0 w-72 h-72 bg-[--color-primary-400] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
// // //             <div className="absolute bottom-0 left-0 w-72 h-72 bg-[--color-secondary-400] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
// // //             <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[--color-primary-300] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
// // //           </div>
// // //         </div>

// // //         {/* Slide Navigation */}
// // //         <button
// // //           onClick={prevSlide}
// // //           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
// // //         >
// // //           <FaChevronLeft />
// // //         </button>
// // //         <button
// // //           onClick={nextSlide}
// // //           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
// // //         >
// // //           <FaChevronRight />
// // //         </button>

// // //         {/* Slide Indicators */}
// // //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
// // //           {heroImages.map((_, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => goToSlide(index)}
// // //               className={`w-3 h-3 rounded-full transition-all ${
// // //                 index === currentSlide 
// // //                   ? 'bg-white w-8' 
// // //                   : 'bg-white/50 hover:bg-white/80'
// // //               }`}
// // //             />
// // //           ))}
// // //         </div>

// // //         {/* Hero Content */}
// // //         <div className="relative z-10 h-full flex items-center">
// // //           <div className="section-padding w-full">
// // //             <div className="max-w-4xl mx-auto text-center">
// // //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-slide-up">
// // //                 Rent <span className="text-[--color-secondary-300]">Bikes & Cars</span><br />
// // //                 in <span className="bg-gradient-to-r from-[--color-secondary-400] to-[--color-secondary-600] bg-clip-text text-transparent">Delhi & Gurugram</span>
// // //               </h1>
              
// // //               <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
// // //                 Company-verified vehicles with affordable pricing, damage protection, and 24/7 support.
// // //                 Your trusted mobility partner.
// // //               </p>
              
// // //               {/* Search Bar */}
// // //               <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl mx-auto border border-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
// // //                 <div className="flex flex-col md:flex-row gap-4 p-4">
// // //                   <div className="flex-1">
// // //                     <div className="relative">
// // //                       <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // //                       <input 
// // //                         type="text" 
// // //                         placeholder="Search bikes, cars, or locations..." 
// // //                         className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent text-lg"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex gap-2">
// // //                     <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]">
// // //                       <option>Delhi</option>
// // //                       <option>Gurugram</option>
// // //                       <option>Noida</option>
// // //                     </select>
// // //                     <button className="bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-700] text-white px-8 py-3 rounded-lg hover:from-[--color-primary-700] hover:to-[--color-primary-800] transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
// // //                       <FaSearch />
// // //                       Search
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
              
// // //               {/* Stats */}
// // //               <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
// // //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// // //                   <FaStar className="text-[--color-secondary-400] mr-2" />
// // //                   <span>4.8/5 (2,500+ Reviews)</span>
// // //                 </div>
// // //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// // //                   <FaUsers className="text-[--color-secondary-400] mr-2" />
// // //                   <span>10,000+ Happy Customers</span>
// // //                 </div>
// // //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// // //                   <FaShieldAlt className="text-[--color-secondary-400] mr-2" />
// // //                   <span>100% Verified Vehicles</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section className="py-16 bg-white relative">
// // //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[--color-primary-500] to-transparent"></div>
// // //         <div className="section-padding">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// // //               Why Choose <span className="text-[--color-primary-600]">RideEase</span>?
// // //             </h2>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // //               We bridge the gap between vehicle owners and renters through a company-managed ecosystem
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {features.map((feature, index) => (
// // //               <div 
// // //                 key={index} 
// // //                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
// // //               >
// // //                 <div className="absolute -right-10 -top-10 w-20 h-20 bg-[--color-primary-100] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //                 <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
// // //                   {feature.icon}
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
// // //                 <p className="text-gray-600">{feature.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Popular Vehicles */}
// // //       <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// // //         <div className="absolute -top-24 -right-24 w-96 h-96 bg-[--color-primary-100] rounded-full opacity-20"></div>
// // //         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[--color-secondary-100] rounded-full opacity-20"></div>
        
// // //         <div className="section-padding relative z-10">
// // //           <div className="flex flex-col md:flex-row justify-between items-center mb-10">
// // //             <div>
// // //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">
// // //                 Popular <span className="text-[--color-primary-600]">Vehicles</span>
// // //               </h2>
// // //               <p className="text-gray-600">Most booked vehicles in your area</p>
// // //             </div>
// // //             <div className="flex space-x-4 mt-4 md:mt-0">
// // //               <button 
// // //                 onClick={() => router.push('/bikes')}
// // //                 className="border-2 border-[--color-primary-600] text-[--color-primary-600] px-6 py-3 rounded-lg font-medium hover:bg-[--color-primary-50] transition-all hover:scale-105"
// // //               >
// // //                 <FaMotorcycle className="inline mr-2" />
// // //                 View All Bikes
// // //               </button>
// // //               <button 
// // //                 onClick={() => router.push('/cars')}
// // //                 className="bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-700] text-white px-6 py-3 rounded-lg font-medium hover:from-[--color-primary-700] hover:to-[--color-primary-800] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
// // //               >
// // //                 <FaCar className="inline mr-2" />
// // //                 View All Cars
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {loading ? (
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //               {[...Array(4)].map((_, i) => (
// // //                 <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
// // //                   <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
// // //                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
// // //                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //               {popularVehicles.map((vehicle, index) => (
// // //                 <div 
// // //                   key={vehicle.id} 
// // //                   className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden border border-gray-100"
// // //                 >
// // //                   <div className="relative overflow-hidden">
// // //                     <img 
// // //                       src={vehicle.image} 
// // //                       alt={`${vehicle.brand} ${vehicle.model}`}
// // //                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
// // //                     />
// // //                     <div className="absolute top-3 left-3">
// // //                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${vehicle.type === 'car' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
// // //                         {vehicle.type === 'car' ? '🚗' : '🏍️'} {vehicle.type.toUpperCase()}
// // //                       </span>
// // //                     </div>
// // //                     <div className="absolute top-3 right-3">
// // //                       <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
// // //                         <FaStar className="text-yellow-400 text-sm mr-1" />
// // //                         <span className="font-semibold text-sm">{vehicle.rating}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="p-5">
// // //                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-[--color-primary-600] transition-colors">
// // //                       {vehicle.brand} {vehicle.model}
// // //                     </h3>
// // //                     <div className="flex items-center mt-2 text-gray-500 text-sm">
// // //                       <FaMapMarkerAlt className="mr-1" />
// // //                       <span>Delhi & Gurugram</span>
// // //                     </div>
                    
// // //                     <div className="mt-4 flex justify-between items-center">
// // //                       <div>
// // //                         <div className="text-2xl font-bold text-[--color-primary-600]">
// // //                           ₹{vehicle.price}
// // //                           <span className="text-sm text-gray-500 font-normal ml-1">/day</span>
// // //                         </div>
// // //                         <div className="text-xs text-gray-400">+ ₹200 insurance</div>
// // //                       </div>
// // //                       <button 
// // //                         onClick={() => handleBookNow(vehicle.id)}
// // //                         className="bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-700] text-white px-6 py-2 rounded-lg font-medium hover:from-[--color-primary-700] hover:to-[--color-primary-800] transition-all hover:scale-105 shadow-md hover:shadow-lg"
// // //                       >
// // //                         Book Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* How It Works */}
// // //       <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
// // //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[--color-secondary-500] to-transparent"></div>
        
// // //         <div className="section-padding">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// // //               How <span className="text-[--color-secondary-600]">It Works</span>
// // //             </h2>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // //               Rent a vehicle in just 4 simple steps
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
// // //             {/* Connecting Line */}
// // //             <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
            
// // //             {howItWorks.map((step, index) => (
// // //               <div 
// // //                 key={index} 
// // //                 className="relative text-center group"
// // //               >
// // //                 <div className="w-24 h-24 bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300 shadow-lg">
// // //                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[--color-primary-600] text-2xl">
// // //                     {step.icon}
// // //                   </div>
// // //                   <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-[--color-secondary-500] to-[--color-secondary-600] rounded-full flex items-center justify-center text-white font-bold shadow-md">
// // //                     {step.step}
// // //                   </div>
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-[--color-primary-600] transition-colors">
// // //                   {step.title}
// // //                 </h3>
// // //                 <p className="text-gray-600">{step.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials */}
// // //       <section className="py-16 bg-gradient-to-br from-gray-50 to-[--color-primary-50] relative overflow-hidden">
// // //         <div className="absolute -top-32 -right-32 w-64 h-64 bg-[--color-primary-200] rounded-full opacity-20"></div>
// // //         <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[--color-secondary-200] rounded-full opacity-20"></div>
        
// // //         <div className="section-padding relative z-10">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// // //               What Our <span className="text-[--color-primary-600]">Customers</span> Say
// // //             </h2>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // //               Join 10,000+ satisfied customers who trust RideEase
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {testimonials.map((testimonial, index) => (
// // //               <div 
// // //                 key={index} 
// // //                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
// // //               >
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="w-12 h-12 bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-full flex items-center justify-center text-white font-bold mr-4">
// // //                     {testimonial.avatar}
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="font-semibold">{testimonial.name}</h4>
// // //                     <p className="text-gray-500 text-sm">{testimonial.role}</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex mb-4">
// // //                   {[...Array(5)].map((_, i) => (
// // //                     <FaStar 
// // //                       key={i} 
// // //                       className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
// // //                     />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-gray-600 italic">"{testimonial.comment}"</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="py-20 relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-800]">
// // //           {/* Animated circles */}
// // //           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full animate-pulse"></div>
// // //           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
// // //           <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
// // //         </div>
        
// // //         <div className="section-padding relative z-10 text-center">
// // //           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
// // //             Ready to <span className="bg-gradient-to-r from-[--color-secondary-400] to-[--color-secondary-600] bg-clip-text text-transparent">Ride</span>?
// // //           </h2>
// // //           <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
// // //             Join thousands of satisfied customers. Rent your perfect vehicle today!
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row justify-center gap-6">
// // //             <button 
// // //               onClick={() => router.push('/bikes')}
// // //               className="bg-white text-[--color-primary-600] px-10 py-5 text-xl rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
// // //             >
// // //               <FaMotorcycle className="group-hover:animate-bounce" />
// // //               Rent a Bike
// // //             </button>
// // //             <button 
// // //               onClick={() => router.push('/cars')}
// // //               className="bg-gradient-to-r from-[--color-secondary-500] to-[--color-secondary-700] text-white px-10 py-5 text-xl rounded-xl font-semibold hover:from-[--color-secondary-600] hover:to-[--color-secondary-800] transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
// // //             >
// // //               <FaCar className="group-hover:animate-bounce" />
// // //               Rent a Car
// // //             </button>
// // //           </div>
          
// // //           {/* Additional Info */}
// // //           <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
// // //             <div className="text-white text-center">
// // //               <div className="text-3xl font-bold">24/7</div>
// // //               <div className="text-white/80 text-sm">Support</div>
// // //             </div>
// // //             <div className="text-white text-center">
// // //               <div className="text-3xl font-bold">100%</div>
// // //               <div className="text-white/80 text-sm">Verified</div>
// // //             </div>
// // //             <div className="text-white text-center">
// // //               <div className="text-3xl font-bold">50+</div>
// // //               <div className="text-white/80 text-sm">Locations</div>
// // //             </div>
// // //             <div className="text-white text-center">
// // //               <div className="text-3xl font-bold">10K+</div>
// // //               <div className="text-white/80 text-sm">Customers</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <style jsx>{`
// // //         @keyframes zoomIn {
// // //           0% {
// // //             transform: scale(1);
// // //           }
// // //           100% {
// // //             transform: scale(1.1);
// // //           }
// // //         }

// // //         @keyframes slideUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes float {
// // //           0% {
// // //             transform: translateY(0px);
// // //           }
// // //           50% {
// // //             transform: translateY(-20px);
// // //           }
// // //           100% {
// // //             transform: translateY(0px);
// // //           }
// // //         }

// // //         .animate-slide-up {
// // //           animation: slideUp 0.8s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-float {
// // //           animation: float 6s ease-in-out infinite;
// // //         }
// // //       `}</style>
// // //     </>
// // //   )
// // // }
// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useRouter } from 'next/navigation'
// // import { 
// //   FaSearch, 
// //   FaStar, 
// //   FaUsers, 
// //   FaShieldAlt, 
// //   FaCar, 
// //   FaMotorcycle,
// //   FaMapMarkerAlt,
// //   FaCalendarAlt,
// //   FaChevronLeft,
// //   FaChevronRight
// // } from 'react-icons/fa'

// // export default function HomePage() {
// //   const router = useRouter()
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //   const [loading, setLoading] = useState(false)
// //   const [isCheckingAuth, setIsCheckingAuth] = useState(true)
// //   const [user, setUser] = useState(null)
  
// //   const heroImages = [
// //     'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920',
// //     'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920',
// //     'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920',
// //   ]

// //   const features = [
// //     {
// //       icon: <FaShieldAlt className="text-2xl" />,
// //       title: 'Company Verified',
// //       description: 'All vehicles undergo 50-point inspection by our team',
// //       bgColor: 'bg-blue-100',
// //       color: 'text-blue-600'
// //     },
// //     {
// //       icon: <FaCar className="text-2xl" />,
// //       title: 'Wide Selection',
// //       description: 'Choose from bikes, cars, and SUVs with driver options',
// //       bgColor: 'bg-green-100',
// //       color: 'text-green-600'
// //     },
// //     {
// //       icon: <FaUsers className="text-2xl" />,
// //       title: '24/7 Support',
// //       description: 'Dedicated support team available round the clock',
// //       bgColor: 'bg-purple-100',
// //       color: 'text-purple-600'
// //     },
// //     {
// //       icon: <FaStar className="text-2xl" />,
// //       title: 'Best Prices',
// //       description: 'Competitive pricing with transparent costs',
// //       bgColor: 'bg-orange-100',
// //       color: 'text-orange-600'
// //     }
// //   ]

// //   const popularVehicles = [
// //     {
// //       id: 1,
// //       brand: 'Royal Enfield',
// //       model: 'Classic 350',
// //       type: 'bike',
// //       price: 699,
// //       rating: 4.8,
// //       image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500'
// //     },
// //     {
// //       id: 2,
// //       brand: 'Hyundai',
// //       model: 'Creta',
// //       type: 'car',
// //       price: 2499,
// //       rating: 4.7,
// //       image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500'
// //     },
// //     {
// //       id: 3,
// //       brand: 'KTM',
// //       model: 'Duke 390',
// //       type: 'bike',
// //       price: 899,
// //       rating: 4.9,
// //       image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500'
// //     },
// //     {
// //       id: 4,
// //       brand: 'Maruti Suzuki',
// //       model: 'Swift',
// //       type: 'car',
// //       price: 1999,
// //       rating: 4.6,
// //       image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500'
// //     }
// //   ]

// //   const howItWorks = [
// //     {
// //       step: '01',
// //       title: 'Search & Select',
// //       description: 'Choose from verified bikes and cars in your location',
// //       icon: <FaSearch />
// //     },
// //     {
// //       step: '02',
// //       title: 'Book & Pay',
// //       description: 'Select dates and make secure payment online',
// //       icon: <FaCalendarAlt />
// //     },
// //     {
// //       step: '03',
// //       title: 'Vehicle Delivery',
// //       description: 'Company representative delivers verified vehicle',
// //       icon: <FaCar />
// //     },
// //     {
// //       step: '04',
// //       title: 'Enjoy & Return',
// //       description: 'Use the vehicle and return at designated location',
// //       icon: <FaMotorcycle />
// //     },
// //   ]

// //   const testimonials = [
// //     {
// //       name: 'Rahul Sharma',
// //       role: 'Software Engineer',
// //       comment: 'Best bike rental service in Delhi! The Classic 350 was in perfect condition.',
// //       rating: 5,
// //       avatar: 'RS'
// //     },
// //     {
// //       name: 'Priya Singh',
// //       role: 'College Student',
// //       comment: 'Perfect for my daily commute. Affordable prices and excellent support.',
// //       rating: 5,
// //       avatar: 'PS'
// //     },
// //     {
// //       name: 'Amit Verma',
// //       role: 'Business Traveler',
// //       comment: 'Car with driver service saved me so much time during my business trips.',
// //       rating: 4,
// //       avatar: 'AV'
// //     }
// //   ]

// //   // Check authentication on mount
// //   useEffect(() => {
// //     const checkAuth = () => {
// //       if (typeof window !== 'undefined') {
// //         const userData = localStorage.getItem('rideease_user')
// //         const token = localStorage.getItem('rideease_token')
        
// //         if (userData && token) {
// //           try {
// //             const parsedUser = JSON.parse(userData)
// //             setUser(parsedUser)
// //             console.log('✅ User is logged in:', parsedUser.email)
// //           } catch (error) {
// //             console.error('Error parsing user data:', error)
// //           }
// //         } else {
// //           console.log('❌ User is not logged in')
// //           setUser(null)
// //         }
        
// //         setIsCheckingAuth(false)
// //       }
// //     }
    
// //     checkAuth()
// //   }, [])

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % heroImages.length)
// //   }

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
// //   }

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index)
// //   }

// //   const handleBookNow = (vehicleId) => {
// //     // Check if user is logged in before booking
// //     if (!user) {
// //       router.push('/auth')
// //       return
// //     }
// //     router.push(`/booking?vehicle=${vehicleId}`)
// //   }

// //   const handleViewProfile = () => {
// //     if (user) {
// //       // Redirect based on user type
// //       switch(user.userType) {
// //         case 'driver':
// //           router.push('/driver/dashboard')
// //           break
// //         case 'owner':
// //           router.push('/owner/dashboard')
// //           break
// //         default:
// //           router.push('/profile')
// //       }
// //     }
// //   }

// //   useEffect(() => {
// //     const interval = setInterval(nextSlide, 5000)
// //     return () => clearInterval(interval)
// //   }, [])

// //   // Don't show anything while checking auth
// //   if (isCheckingAuth) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <>
// //       {/* Hero Section with Slideshow */}
// //       <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden h-[85vh] min-h-[600px]">
// //         {/* Slideshow Container */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           {heroImages.map((image, index) => (
// //             <div
// //               key={index}
// //               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //                 index === currentSlide ? 'opacity-100' : 'opacity-0'
// //               }`}
// //             >
// //               <div
// //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //                 style={{
// //                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
// //                   animation: index === currentSlide ? 'zoomIn 15s ease-in-out infinite alternate' : 'none'
// //                 }}
// //               />
// //             </div>
// //           ))}
          
// //           {/* Animated Overlay */}
// //           <div className="absolute inset-0">
// //             <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
// //             <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
// //             <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
// //           </div>
// //         </div>

// //         {/* Slide Navigation */}
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
// //         >
// //           <FaChevronLeft />
// //         </button>
// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
// //         >
// //           <FaChevronRight />
// //         </button>

// //         {/* Slide Indicators */}
// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
// //           {heroImages.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => goToSlide(index)}
// //               className={`w-3 h-3 rounded-full transition-all ${
// //                 index === currentSlide 
// //                   ? 'bg-white w-8' 
// //                   : 'bg-white/50 hover:bg-white/80'
// //               }`}
// //             />
// //           ))}
// //         </div>

// //         {/* Hero Content */}
// //         <div className="relative z-10 h-full flex items-center">
// //           <div className="section-padding w-full">
// //             <div className="max-w-4xl mx-auto text-center">
// //               {user ? (
// //                 <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
// //                   <span className="text-white">Welcome back, </span>
// //                   <span className="text-yellow-300 font-semibold">{user.name}</span>
// //                   <button 
// //                     onClick={handleViewProfile}
// //                     className="ml-4 text-white bg-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
// //                   >
// //                     View Profile
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
// //                   <span className="text-white">New to RideEase? </span>
// //                   <button 
// //                     onClick={() => router.push('/auth')}
// //                     className="text-yellow-300 font-semibold hover:underline ml-1"
// //                   >
// //                     Sign up now
// //                   </button>
// //                 </div>
// //               )}
              
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-slide-up">
// //                 Rent <span className="text-yellow-300">Bikes & Cars</span><br />
// //                 in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Delhi & Gurugram</span>
// //               </h1>
              
// //               <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
// //                 Company-verified vehicles with affordable pricing, damage protection, and 24/7 support.
// //                 Your trusted mobility partner.
// //               </p>
              
// //               {/* Search Bar */}
// //               <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl mx-auto border border-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
// //                 <div className="flex flex-col md:flex-row gap-4 p-4">
// //                   <div className="flex-1">
// //                     <div className="relative">
// //                       <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                       <input 
// //                         type="text" 
// //                         placeholder="Search bikes, cars, or locations..." 
// //                         className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
// //                       <option>Delhi</option>
// //                       <option>Gurugram</option>
// //                       <option>Noida</option>
// //                     </select>
// //                     <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
// //                       <FaSearch />
// //                       Search
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Stats */}
// //               <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
// //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                   <FaStar className="text-yellow-400 mr-2" />
// //                   <span>4.8/5 (2,500+ Reviews)</span>
// //                 </div>
// //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                   <FaUsers className="text-yellow-400 mr-2" />
// //                   <span>10,000+ Happy Customers</span>
// //                 </div>
// //                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                   <FaShieldAlt className="text-yellow-400 mr-2" />
// //                   <span>100% Verified Vehicles</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-16 bg-white relative">
// //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
// //         <div className="section-padding">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// //               Why Choose <span className="text-blue-600">RideEase</span>?
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               We bridge the gap between vehicle owners and renters through a company-managed ecosystem
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {features.map((feature, index) => (
// //               <div 
// //                 key={index} 
// //                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
// //               >
// //                 <div className="absolute -right-10 -top-10 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
// //                   {feature.icon}
// //                 </div>
// //                 <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
// //                 <p className="text-gray-600">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Popular Vehicles */}
// //       <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// //         <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
// //         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20"></div>
        
// //         <div className="section-padding relative z-10">
// //           <div className="flex flex-col md:flex-row justify-between items-center mb-10">
// //             <div>
// //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">
// //                 Popular <span className="text-blue-600">Vehicles</span>
// //               </h2>
// //               <p className="text-gray-600">Most booked vehicles in your area</p>
// //             </div>
// //             <div className="flex space-x-4 mt-4 md:mt-0">
// //               <button 
// //                 onClick={() => router.push('/bikes')}
// //                 className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all hover:scale-105"
// //               >
// //                 <FaMotorcycle className="inline mr-2" />
// //                 View All Bikes
// //               </button>
// //               <button 
// //                 onClick={() => router.push('/cars')}
// //                 className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
// //               >
// //                 <FaCar className="inline mr-2" />
// //                 View All Cars
// //               </button>
// //             </div>
// //           </div>

// //           {loading ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {[...Array(4)].map((_, i) => (
// //                 <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
// //                   <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
// //                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
// //                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {popularVehicles.map((vehicle, index) => (
// //                 <div 
// //                   key={vehicle.id} 
// //                   className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden border border-gray-100"
// //                 >
// //                   <div className="relative overflow-hidden">
// //                     <img 
// //                       src={vehicle.image} 
// //                       alt={`${vehicle.brand} ${vehicle.model}`}
// //                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
// //                     />
// //                     <div className="absolute top-3 left-3">
// //                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${vehicle.type === 'car' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
// //                         {vehicle.type === 'car' ? '🚗' : '🏍️'} {vehicle.type.toUpperCase()}
// //                       </span>
// //                     </div>
// //                     <div className="absolute top-3 right-3">
// //                       <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
// //                         <FaStar className="text-yellow-400 text-sm mr-1" />
// //                         <span className="font-semibold text-sm">{vehicle.rating}</span>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="p-5">
// //                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
// //                       {vehicle.brand} {vehicle.model}
// //                     </h3>
// //                     <div className="flex items-center mt-2 text-gray-500 text-sm">
// //                       <FaMapMarkerAlt className="mr-1" />
// //                       <span>Delhi & Gurugram</span>
// //                     </div>
                    
// //                     <div className="mt-4 flex justify-between items-center">
// //                       <div>
// //                         <div className="text-2xl font-bold text-blue-600">
// //                           ₹{vehicle.price}
// //                           <span className="text-sm text-gray-500 font-normal ml-1">/day</span>
// //                         </div>
// //                         <div className="text-xs text-gray-400">+ ₹200 insurance</div>
// //                       </div>
// //                       <button 
// //                         onClick={() => handleBookNow(vehicle.id)}
// //                         className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-md hover:shadow-lg"
// //                       >
// //                         Book Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* How It Works */}
// //       <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
// //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
// //         <div className="section-padding">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// //               How <span className="text-yellow-600">It Works</span>
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Rent a vehicle in just 4 simple steps
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
// //             {/* Connecting Line */}
// //             <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
            
// //             {howItWorks.map((step, index) => (
// //               <div 
// //                 key={index} 
// //                 className="relative text-center group"
// //               >
// //                 <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300 shadow-lg">
// //                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 text-2xl">
// //                     {step.icon}
// //                   </div>
// //                   <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
// //                     {step.step}
// //                   </div>
// //                 </div>
// //                 <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-blue-600 transition-colors">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-gray-600">{step.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
// //         <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
// //         <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-200 rounded-full opacity-20"></div>
        
// //         <div className="section-padding relative z-10">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
// //               What Our <span className="text-blue-600">Customers</span> Say
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Join 10,000+ satisfied customers who trust RideEase
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {testimonials.map((testimonial, index) => (
// //               <div 
// //                 key={index} 
// //                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
// //               >
// //                 <div className="flex items-center mb-4">
// //                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
// //                     {testimonial.avatar}
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold">{testimonial.name}</h4>
// //                     <p className="text-gray-500 text-sm">{testimonial.role}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex mb-4">
// //                   {[...Array(5)].map((_, i) => (
// //                     <FaStar 
// //                       key={i} 
// //                       className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-gray-600 italic">"{testimonial.comment}"</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
// //           {/* Animated circles */}
// //           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full animate-pulse"></div>
// //           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
// //           <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
// //         </div>
        
// //         <div className="section-padding relative z-10 text-center">
// //           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
// //             Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Ride</span>?
// //           </h2>
// //           <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
// //             Join thousands of satisfied customers. Rent your perfect vehicle today!
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-6">
// //             <button 
// //               onClick={() => router.push('/bikes')}
// //               className="bg-white text-blue-600 px-10 py-5 text-xl rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
// //             >
// //               <FaMotorcycle className="group-hover:animate-bounce" />
// //               Rent a Bike
// //             </button>
// //             <button 
// //               onClick={() => router.push('/cars')}
// //               className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-10 py-5 text-xl rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-800 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
// //             >
// //               <FaCar className="group-hover:animate-bounce" />
// //               Rent a Car
// //             </button>
// //           </div>
          
// //           {/* Additional Info */}
// //           <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
// //             <div className="text-white text-center">
// //               <div className="text-3xl font-bold">24/7</div>
// //               <div className="text-white/80 text-sm">Support</div>
// //             </div>
// //             <div className="text-white text-center">
// //               <div className="text-3xl font-bold">100%</div>
// //               <div className="text-white/80 text-sm">Verified</div>
// //             </div>
// //             <div className="text-white text-center">
// //               <div className="text-3xl font-bold">50+</div>
// //               <div className="text-white/80 text-sm">Locations</div>
// //             </div>
// //             <div className="text-white text-center">
// //               <div className="text-3xl font-bold">10K+</div>
// //               <div className="text-white/80 text-sm">Customers</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <style jsx>{`
// //         @keyframes zoomIn {
// //           0% { transform: scale(1); }
// //           100% { transform: scale(1.1); }
// //         }
// //         @keyframes slideUp {
// //           from { opacity: 0; transform: translateY(30px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         @keyframes float {
// //           0% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //           100% { transform: translateY(0px); }
// //         }
// //         .animate-slide-up {
// //           animation: slideUp 0.8s ease-out forwards;
// //           opacity: 0;
// //         }
// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </>
// //   )
// // }


// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { 
//   FaSearch, 
//   FaStar, 
//   FaUsers, 
//   FaShieldAlt, 
//   FaCar, 
//   FaMotorcycle,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaChevronLeft,
//   FaChevronRight
// } from 'react-icons/fa'
// import { isAuthenticated, getCurrentUser } from '@/Src/utils/auth'

// export default function HomePage() {
//   const router = useRouter()
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [loading, setLoading] = useState(false)
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true)
//   const [user, setUser] = useState(null)
  
//   const heroImages = [
//     'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920',
//     'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920',
//     'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920',
//   ]

//   const features = [
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: 'Company Verified',
//       description: 'All vehicles undergo 50-point inspection by our team',
//       bgColor: 'bg-blue-100',
//       color: 'text-blue-600'
//     },
//     {
//       icon: <FaCar className="text-2xl" />,
//       title: 'Wide Selection',
//       description: 'Choose from bikes, cars, and SUVs with driver options',
//       bgColor: 'bg-green-100',
//       color: 'text-green-600'
//     },
//     {
//       icon: <FaUsers className="text-2xl" />,
//       title: '24/7 Support',
//       description: 'Dedicated support team available round the clock',
//       bgColor: 'bg-purple-100',
//       color: 'text-purple-600'
//     },
//     {
//       icon: <FaStar className="text-2xl" />,
//       title: 'Best Prices',
//       description: 'Competitive pricing with transparent costs',
//       bgColor: 'bg-orange-100',
//       color: 'text-orange-600'
//     }
//   ]

//   const popularVehicles = [
//     {
//       id: 1,
//       brand: 'Royal Enfield',
//       model: 'Classic 350',
//       type: 'bike',
//       price: 699,
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500'
//     },
//     {
//       id: 2,
//       brand: 'Hyundai',
//       model: 'Creta',
//       type: 'car',
//       price: 2499,
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500'
//     },
//     {
//       id: 3,
//       brand: 'KTM',
//       model: 'Duke 390',
//       type: 'bike',
//       price: 899,
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500'
//     },
//     {
//       id: 4,
//       brand: 'Maruti Suzuki',
//       model: 'Swift',
//       type: 'car',
//       price: 1999,
//       rating: 4.6,
//       image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500'
//     }
//   ]

//   const howItWorks = [
//     {
//       step: '01',
//       title: 'Search & Select',
//       description: 'Choose from verified bikes and cars in your location',
//       icon: <FaSearch />
//     },
//     {
//       step: '02',
//       title: 'Book & Pay',
//       description: 'Select dates and make secure payment online',
//       icon: <FaCalendarAlt />
//     },
//     {
//       step: '03',
//       title: 'Vehicle Delivery',
//       description: 'Company representative delivers verified vehicle',
//       icon: <FaCar />
//     },
//     {
//       step: '04',
//       title: 'Enjoy & Return',
//       description: 'Use the vehicle and return at designated location',
//       icon: <FaMotorcycle />
//     },
//   ]

//   const testimonials = [
//     {
//       name: 'Rahul Sharma',
//       role: 'Software Engineer',
//       comment: 'Best bike rental service in Delhi! The Classic 350 was in perfect condition.',
//       rating: 5,
//       avatar: 'RS'
//     },
//     {
//       name: 'Priya Singh',
//       role: 'College Student',
//       comment: 'Perfect for my daily commute. Affordable prices and excellent support.',
//       rating: 5,
//       avatar: 'PS'
//     },
//     {
//       name: 'Amit Verma',
//       role: 'Business Traveler',
//       comment: 'Car with driver service saved me so much time during my business trips.',
//       rating: 4,
//       avatar: 'AV'
//     }
//   ]

//   // Check authentication on mount
//   useEffect(() => {
//     const checkAuth = () => {
//       // Home page is PUBLIC - no redirect!
//       const auth = isAuthenticated()
//       if (auth) {
//         const currentUser = getCurrentUser()
//         setUser(currentUser)
//         console.log('✅ User is logged in:', currentUser?.email)
//       } else {
//         setUser(null)
//         console.log('👤 User is not logged in - public home page')
//       }
//       setIsCheckingAuth(false)
//     }
    
//     checkAuth()
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
//   }

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//   }

//   const handleBookNow = (vehicleId) => {
//     // Check if user is logged in before booking
//     if (!isAuthenticated()) {
//       router.push('/auth')
//       return
//     }
//     router.push(`/booking?vehicle=${vehicleId}`)
//   }

//   const handleViewProfile = () => {
//     if (user) {
//       switch(user.userType) {
//         case 'driver':
//           router.push('/driver/dashboard')
//           break
//         case 'owner':
//           router.push('/owner/dashboard')
//           break
//         default:
//           router.push('/profile')
//       }
//     }
//   }

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   // Don't show anything while checking auth
//   if (isCheckingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* Hero Section with Slideshow */}
//       <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden h-[85vh] min-h-[600px]">
//         {/* Slideshow Container */}
//         <div className="absolute inset-0 overflow-hidden">
//           {heroImages.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
//                   animation: index === currentSlide ? 'zoomIn 15s ease-in-out infinite alternate' : 'none'
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Slide Navigation */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
//         >
//           <FaChevronRight />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide 
//                   ? 'bg-white w-8' 
//                   : 'bg-white/50 hover:bg-white/80'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="section-padding w-full">
//             <div className="max-w-4xl mx-auto text-center">
//               {user ? (
//                 <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
//                   <span className="text-white">Welcome back, </span>
//                   <span className="text-yellow-300 font-semibold">{user.name}</span>
//                   <button 
//                     onClick={handleViewProfile}
//                     className="ml-4 text-white bg-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
//                   >
//                     View Profile
//                   </button>
//                 </div>
//               ) : (
//                 <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
//                   <span className="text-white">New to RideEase? </span>
//                   <button 
//                     onClick={() => router.push('/auth')}
//                     className="text-yellow-300 font-semibold hover:underline ml-1"
//                   >
//                     Sign up now
//                   </button>
//                 </div>
//               )}
              
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-slide-up">
//                 Rent <span className="text-yellow-300">Bikes & Cars</span><br />
//                 in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Delhi & Gurugram</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
//                 Company-verified vehicles with affordable pricing, damage protection, and 24/7 support.
//                 Your trusted mobility partner.
//               </p>
              
//               {/* Search Bar */}
//               <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl mx-auto border border-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
//                 <div className="flex flex-col md:flex-row gap-4 p-4">
//                   <div className="flex-1">
//                     <div className="relative">
//                       <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input 
//                         type="text" 
//                         placeholder="Search bikes, cars, or locations..." 
//                         className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       <option>Delhi</option>
//                       <option>Gurugram</option>
//                       <option>Noida</option>
//                     </select>
//                     <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
//                       <FaSearch />
//                       Search
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Stats */}
//               <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
//                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                   <FaStar className="text-yellow-400 mr-2" />
//                   <span>4.8/5 (2,500+ Reviews)</span>
//                 </div>
//                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                   <FaUsers className="text-yellow-400 mr-2" />
//                   <span>10,000+ Happy Customers</span>
//                 </div>
//                 <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                   <FaShieldAlt className="text-yellow-400 mr-2" />
//                   <span>100% Verified Vehicles</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rest of your sections remain exactly the same */}
//       {/* ... */}

//       <style jsx>{`
//         @keyframes zoomIn {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.1); }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-slide-up {
//           animation: slideUp 0.8s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  FaSearch, 
  FaStar, 
  FaUsers, 
  FaShieldAlt, 
  FaCar, 
  FaMotorcycle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import { isAuthenticated, getCurrentUser } from '@/Src/utils/auth'

export default function HomePage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [user, setUser] = useState(null)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920',
  ]

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Company Verified',
      description: 'All vehicles undergo 50-point inspection by our team',
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      icon: <FaCar className="text-2xl" />,
      title: 'Wide Selection',
      description: 'Choose from bikes, cars, and SUVs with driver options',
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock',
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: 'Best Prices',
      description: 'Competitive pricing with transparent costs',
      bgColor: 'bg-orange-100',
      color: 'text-orange-600'
    }
  ]

  const popularVehicles = [
    {
      id: 1,
      brand: 'Royal Enfield',
      model: 'Classic 350',
      type: 'bike',
      price: 699,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500'
    },
    {
      id: 2,
      brand: 'Hyundai',
      model: 'Creta',
      type: 'car',
      price: 2499,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500'
    },
    {
      id: 3,
      brand: 'KTM',
      model: 'Duke 390',
      type: 'bike',
      price: 899,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500'
    },
    {
      id: 4,
      brand: 'Maruti Suzuki',
      model: 'Swift',
      type: 'car',
      price: 1999,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Search & Select',
      description: 'Choose from verified bikes and cars in your location',
      icon: <FaSearch />
    },
    {
      step: '02',
      title: 'Book & Pay',
      description: 'Select dates and make secure payment online',
      icon: <FaCalendarAlt />
    },
    {
      step: '03',
      title: 'Vehicle Delivery',
      description: 'Company representative delivers verified vehicle',
      icon: <FaCar />
    },
    {
      step: '04',
      title: 'Enjoy & Return',
      description: 'Use the vehicle and return at designated location',
      icon: <FaMotorcycle />
    },
  ]

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      comment: 'Best bike rental service in Delhi! The Classic 350 was in perfect condition.',
      rating: 5,
      avatar: 'RS'
    },
    {
      name: 'Priya Singh',
      role: 'College Student',
      comment: 'Perfect for my daily commute. Affordable prices and excellent support.',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Amit Verma',
      role: 'Business Traveler',
      comment: 'Car with driver service saved me so much time during my business trips.',
      rating: 4,
      avatar: 'AV'
    }
  ]

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      // Home page is PUBLIC - no redirect!
      const auth = isAuthenticated()
      if (auth) {
        const currentUser = getCurrentUser()
        setUser(currentUser)
        console.log('✅ User is logged in:', currentUser?.email)
      } else {
        setUser(null)
        console.log('👤 User is not logged in - public home page')
      }
      setIsCheckingAuth(false)
    }
    
    checkAuth()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleBookNow = (vehicleId) => {
    // Check if user is logged in before booking
    if (!isAuthenticated()) {
      router.push('/auth')
      return
    }
    router.push(`/booking?vehicle=${vehicleId}`)
  }

  const handleViewProfile = () => {
    if (user) {
      switch(user.userType) {
        case 'driver':
          router.push('/driver/dashboard')
          break
        case 'owner':
          router.push('/owner/dashboard')
          break
        default:
          router.push('/profile')
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  // Don't show anything while checking auth
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section with Slideshow */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden h-[85vh] min-h-[600px]">
        {/* Slideshow Container */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
                  animation: index === currentSlide ? 'zoomIn 15s ease-in-out infinite alternate' : 'none'
                }}
              />
            </div>
          ))}
          
          {/* Animated Overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
        >
          <FaChevronRight />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="section-padding w-full">
            <div className="max-w-4xl mx-auto text-center">
              {user ? (
                <div className="">
                  {/* <span className="text-white">Welcome back, </span>
                  <span className="text-yellow-300 font-semibold">{user.name}</span>
                  <button 
                    onClick={handleViewProfile}
                    className="ml-4 text-white bg-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Profile
                  </button> */}
                </div>
              ) : (
                <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="text-white">New to RideEase? </span>
                  <button 
                    onClick={() => router.push('/auth')}
                    className="text-yellow-300 font-semibold hover:underline ml-1"
                  >
                    Sign up now
                  </button>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-slide-up">
                Rent <span className="text-yellow-300">Bikes & Cars</span><br />
                in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Delhi & Gurugram</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                Company-verified vehicles with affordable pricing, damage protection, and 24/7 support.
                Your trusted mobility partner.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl mx-auto border border-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="flex-1">
                    <div className="relative">
                      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search bikes, cars, or locations..." 
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Delhi</option>
                      <option>Gurugram</option>
                      <option>Noida</option>
                    </select>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                      <FaSearch />
                      Search
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span>4.8/5 (2,500+ Reviews)</span>
                </div>
                <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                  <FaUsers className="text-yellow-400 mr-2" />
                  <span>10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                  <FaShieldAlt className="text-yellow-400 mr-2" />
                  <span>100% Verified Vehicles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose <span className="text-blue-600">RideEase</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bridge the gap between vehicle owners and renters through a company-managed ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
              >
                <div className="absolute -right-10 -top-10 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Vehicles */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20"></div>
        
        <div className="section-padding relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">
                Popular <span className="text-blue-600">Vehicles</span>
              </h2>
              <p className="text-gray-600">Most booked vehicles in your area</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => router.push('/bikes')}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all hover:scale-105"
              >
                <FaMotorcycle className="inline mr-2" />
                View All Bikes
              </button>
              <button 
                onClick={() => router.push('/cars')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaCar className="inline mr-2" />
                View All Cars
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${vehicle.type === 'car' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                        {vehicle.type === 'car' ? '🚗' : '🏍️'} {vehicle.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <FaStar className="text-yellow-400 text-sm mr-1" />
                        <span className="font-semibold text-sm">{vehicle.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="flex items-center mt-2 text-gray-500 text-sm">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>Delhi & Gurugram</span>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          ₹{vehicle.price}
                          <span className="text-sm text-gray-500 font-normal ml-1">/day</span>
                        </div>
                        <div className="text-xs text-gray-400">+ ₹200 insurance</div>
                      </div>
                      <button 
                        onClick={() => handleBookNow(vehicle.id)}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How <span className="text-yellow-600">It Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rent a vehicle in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
            
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-200 rounded-full opacity-20"></div>
        
        <div className="section-padding relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              What Our <span className="text-blue-600">Customers</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 10,000+ satisfied customers who trust RideEase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="section-padding relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Ride</span>?
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Rent your perfect vehicle today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => router.push('/bikes')}
              className="bg-white text-blue-600 px-10 py-5 text-xl rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
            >
              <FaMotorcycle className="group-hover:animate-bounce" />
              Rent a Bike
            </button>
            <button 
              onClick={() => router.push('/cars')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-10 py-5 text-xl rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-800 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
            >
              <FaCar className="group-hover:animate-bounce" />
              Rent a Car
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-white/80 text-sm">Verified</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-white/80 text-sm">Locations</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-white/80 text-sm">Customers</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}