/*app/profile/page.js*/
// 'use client'

// import { useState } from 'react'
// import { 
//   FaUser, 
//   FaIdCard, 
//   FaCalendarAlt, 
//   FaCar, 
//   FaMotorcycle, 
//   FaStar,
//   FaEdit,
//   FaCheck,
//   FaTimes,
//   FaShieldAlt,
//   FaMapMarkerAlt,
//   FaPhone
// } from 'react-icons/fa'
// import { toast } from 'react-toastify'

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [userData, setUserData] = useState({
//     name: 'Gaurav Kumar',
//     email: 'gaurav.kumar@example.com',
//     phone: '+91 98765 43210',
//     address: 'Delhi, India',
//     dob: '1998-05-15',
//     licenseNumber: 'DL04 20230012345',
//     licenseExpiry: '2030-12-31'
//   })

//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       vehicle: 'Royal Enfield Classic 350',
//       type: 'bike',
//       bookingId: 'RE20241101',
//       date: '2024-11-01',
//       status: 'completed',
//       amount: 2400,
//       rating: 5
//     },
//     {
//       id: 2,
//       vehicle: 'Hyundai Creta SX',
//       type: 'car',
//       bookingId: 'RE20241015',
//       date: '2024-10-15',
//       status: 'upcoming',
//       amount: 6600,
//       rating: null
//     },
//     {
//       id: 3,
//       vehicle: 'KTM Duke 390',
//       type: 'bike',
//       bookingId: 'RE20240920',
//       date: '2024-09-20',
//       status: 'completed',
//       amount: 3600,
//       rating: 4
//     }
//   ])

//   const handleEditToggle = () => {
//     if (isEditing) {
//       toast.success('Profile updated successfully!')
//     }
//     setIsEditing(!isEditing)
//   }

//   const handleInputChange = (field, value) => {
//     setUserData({
//       ...userData,
//       [field]: value
//     })
//   }

//   const handleRating = (bookingId, rating) => {
//     setBookings(bookings.map(booking => 
//       booking.id === bookingId ? { ...booking, rating } : booking
//     ))
//     toast.success('Rating submitted!')
//   }

//   const kycStatus = {
//     drivingLicense: { status: 'verified', icon: <FaCheck className="text-green-500" /> },
//     aadhaarCard: { status: 'verified', icon: <FaCheck className="text-green-500" /> },
//     panCard: { status: 'pending', icon: <FaTimes className="text-yellow-500" /> }
//   }

//   return (
//     <div className="pt-24 pb-16">
//       <div className="section-padding max-w-6xl mx-auto">
//         {/* Profile Header */}
//         <div className="bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-800] rounded-2xl p-8 text-white mb-8">
//           <div className="flex flex-col md:flex-row md:items-center justify-between">
//             <div className="flex items-center gap-6 mb-6 md:mb-0">
//               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
//                 <div className="w-20 h-20 bg-[--color-primary-100] rounded-full flex items-center justify-center text-[--color-primary-600] text-3xl font-bold">
//                   GK
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
//                 <p className="opacity-90">Premium Member • Joined Nov 2023</p>
//               </div>
//             </div>
//             <button
//               onClick={handleEditToggle}
//               className="bg-white text-[--color-primary-600] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
//             >
//               {isEditing ? <FaCheck /> : <FaEdit />}
//               {isEditing ? 'Save Changes' : 'Edit Profile'}
//             </button>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Column - Personal Info */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Personal Information */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
//                 <FaUser className="text-[--color-primary-600]" />
//                 Personal Information
//               </h2>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={userData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
//                     />
//                   ) : (
//                     <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.name}</div>
//                   )}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="email"
//                       value={userData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
//                     />
//                   ) : (
//                     <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.email}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaPhone className="inline mr-2 text-gray-500" />
//                     Phone Number
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="tel"
//                       value={userData.phone}
//                       onChange={(e) => handleInputChange('phone', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
//                     />
//                   ) : (
//                     <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.phone}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaMapMarkerAlt className="inline mr-2 text-gray-500" />
//                     Address
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={userData.address}
//                       onChange={(e) => handleInputChange('address', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
//                     />
//                   ) : (
//                     <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.address}</div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* KYC Status */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
//                 <FaShieldAlt className="text-[--color-primary-600]" />
//                 KYC Status
//               </h2>
              
//               <div className="space-y-4">
//                 {Object.entries(kycStatus).map(([key, value]) => (
//                   <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <FaIdCard className="text-gray-500" />
//                       <div>
//                         <div className="font-medium">
//                           {key.split(/(?=[A-Z])/).join(' ')}
//                         </div>
//                         <div className={`text-sm ${
//                           value.status === 'verified' ? 'text-green-600' : 
//                           value.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
//                         }`}>
//                           {value.status.charAt(0).toUpperCase() + value.status.slice(1)}
//                         </div>
//                       </div>
//                     </div>
//                     {value.icon}
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full mt-6 bg-[--color-primary-600] text-white py-3 rounded-lg font-medium hover:bg-[--color-primary-700] transition-colors">
//                 Complete KYC Verification
//               </button>
//             </div>

//             {/* Booking History */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-6">Booking History</h2>
              
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-3">
//                         {booking.type === 'car' ? 
//                           <FaCar className="text-[--color-primary-600]" /> : 
//                           <FaMotorcycle className="text-[--color-primary-600]" />
//                         }
//                         <div>
//                           <div className="font-semibold">{booking.vehicle}</div>
//                           <div className="text-sm text-gray-500">
//                             Booking ID: {booking.bookingId} • {booking.date}
//                           </div>
//                         </div>
//                       </div>
//                       <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                         booking.status === 'completed' ? 'bg-green-100 text-green-800' :
//                         booking.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
//                         'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {booking.status}
//                       </span>
//                     </div>
                    
//                     <div className="flex justify-between items-center">
//                       <div className="text-lg font-bold text-[--color-primary-600]">
//                         ₹{booking.amount}
//                       </div>
                      
//                       {booking.status === 'completed' ? (
//                         <div className="flex items-center gap-2">
//                           <span className="text-gray-600">Rate your experience:</span>
//                           <div className="flex">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <button
//                                 key={star}
//                                 onClick={() => booking.rating === null && handleRating(booking.id, star)}
//                                 className={`text-xl ${star <= (booking.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
//                               >
//                                 <FaStar />
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       ) : (
//                         <button className="text-[--color-primary-600] hover:text-[--color-primary-800] font-medium">
//                           View Details
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Stats & Quick Actions */}
//           <div className="space-y-8">
//             {/* Stats Card */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h3 className="text-lg font-semibold mb-6">Your Stats</h3>
              
//               <div className="space-y-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-gray-900">12</div>
//                   <div className="text-gray-600">Total Bookings</div>
//                 </div>
                
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-gray-900">4.8</div>
//                   <div className="flex items-center justify-center gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <FaStar key={star} className="text-yellow-400" />
//                     ))}
//                   </div>
//                   <div className="text-gray-600">Average Rating</div>
//                 </div>
                
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-gray-900">₹45,200</div>
//                   <div className="text-gray-600">Total Spent</div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
              
//               <div className="space-y-4">
//                 <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <div className="flex items-center gap-3">
//                     <FaCalendarAlt className="text-[--color-primary-600]" />
//                     <span>Upcoming Bookings</span>
//                   </div>
//                   <span className="bg-[--color-primary-100] text-[--color-primary-800] px-3 py-1 rounded-full text-sm">
//                     2
//                   </span>
//                 </button>
                
//                 <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <div className="flex items-center gap-3">
//                     <FaCar className="text-[--color-primary-600]" />
//                     <span>Favorites</span>
//                   </div>
//                   <span className="bg-[--color-primary-100] text-[--color-primary-800] px-3 py-1 rounded-full text-sm">
//                     5
//                   </span>
//                 </button>
                
//                 <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <div className="flex items-center gap-3">
//                     <FaIdCard className="text-[--color-primary-600]" />
//                     <span>My Documents</span>
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* Referral Code */}
//             <div className="bg-gradient-to-r from-[--color-primary-500] to-[--color-primary-700] rounded-xl p-6 text-white">
//               <h3 className="text-lg font-semibold mb-4">Refer & Earn</h3>
//               <p className="mb-4 opacity-90">
//                 Share your referral code and earn ₹500 when your friend completes their first booking.
//               </p>
//               <div className="bg-white/20 p-4 rounded-lg mb-4">
//                 <div className="text-center font-mono text-xl font-bold">RIDEEASE250</div>
//               </div>
//               <button className="w-full bg-white text-[--color-primary-600] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//                 Copy Referral Code
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  FaUser, 
  FaIdCard, 
  FaCalendarAlt, 
  FaCar, 
  FaMotorcycle, 
  FaStar,
  FaEdit,
  FaCheck,
  FaTimes,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaHistory,
  FaTrash,
  FaEye,
  FaDownload,
  FaPlus,
  FaRupeeSign
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { getCurrentUser, isAuthenticated } from '@/Src/utils/auth'
import { vehicleAPI } from '@/Src/utils/api'

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [vehicles, setVehicles] = useState([])
  const [vehiclesLoading, setVehiclesLoading] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: 'Delhi, India',
    dob: '1998-05-15',
    licenseNumber: 'DL04 20230012345',
    licenseExpiry: '2030-12-31'
  })

  const [bookings, setBookings] = useState([])
  const [activeTab, setActiveTab] = useState('bookings')

  // Check authentication first
  useEffect(() => {
    if (!isAuthenticated()) {
      console.log('❌ Not authenticated, redirecting to login')
      router.push('/auth')
      return
    }

    // Load user data
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
      setUserData(prev => ({
        ...prev,
        name: currentUser.name || '',
        email: currentUser.email || '',
        phone: currentUser.phone || ''
      }))
      
      // Fetch user's vehicles
      fetchUserVehicles(currentUser._id)
    }

    // Load bookings from localStorage (temporary)
    const savedBookings = JSON.parse(localStorage.getItem('rideease_bookings') || '[]')
    setBookings(savedBookings)
    setLoading(false)
  }, [router])

  // Fetch user's vehicles from database
  const fetchUserVehicles = async (ownerId) => {
    if (!ownerId) return
    
    setVehiclesLoading(true)
    try {
      console.log('📦 Fetching vehicles for owner:', ownerId)
      const response = await vehicleAPI.getOwnerVehicles(ownerId)
      
      if (response.success) {
        setVehicles(response.vehicles || [])
        console.log(`✅ Loaded ${response.vehicles.length} vehicles`)
      }
    } catch (error) {
      console.error('❌ Error fetching vehicles:', error)
      toast.error('Failed to load your vehicles')
    } finally {
      setVehiclesLoading(false)
    }
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Save to localStorage
      localStorage.setItem('rideease_profile', JSON.stringify(userData))
      toast.success('Profile updated successfully!')
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value
    })
  }

  const handleRating = (bookingId, rating) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, rating } : booking
    ))
    toast.success('Rating submitted!')
  }

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.filter(booking => booking.id !== bookingId))
      toast.success('Booking cancelled successfully!')
    }
  }

  const handleDownloadInvoice = (booking) => {
    toast.success(`Invoice for ${booking.vehicle?.name || 'Vehicle'} downloaded!`)
  }

  const handleEditVehicle = (vehicleId) => {
    router.push(`/edit-vehicle/${vehicleId}`)
  }

  const handleDeleteVehicle = async (vehicleId) => {
    if (!window.confirm('Are you sure you want to delete this vehicle?')) return
    
    try {
      const response = await vehicleAPI.delete(vehicleId)
      if (response.success) {
        toast.success('Vehicle deleted successfully')
        // Refresh vehicles list
        if (user) fetchUserVehicles(user._id)
      }
    } catch (error) {
      toast.error('Failed to delete vehicle')
    }
  }

  const handleViewVehicle = (vehicleId) => {
    router.push(`/vehicles/${vehicleId}`)
  }

  const kycStatus = {
    drivingLicense: { status: 'verified', icon: <FaCheck className="text-green-500" /> },
    aadhaarCard: { status: 'verified', icon: <FaCheck className="text-green-500" /> },
    panCard: { status: 'pending', icon: <FaTimes className="text-yellow-500" /> }
  }

  const calculateStats = () => {
    const totalBookings = bookings.length
    const totalSpent = bookings.reduce((sum, b) => sum + (b.total || 0), 0)
    const averageRating = bookings.filter(b => b.rating).length > 0 
      ? (bookings.filter(b => b.rating).reduce((sum, b) => sum + (b.rating || 0), 0) / bookings.filter(b => b.rating).length).toFixed(1)
      : 0
    
    // Vehicle stats
    const totalVehicles = vehicles.length
    const verifiedVehicles = vehicles.filter(v => v.isVerified).length
    const totalEarnings = vehicles.reduce((sum, v) => sum + (v.totalEarnings || 0), 0)
    
    return { totalBookings, totalSpent, averageRating, totalVehicles, verifiedVehicles, totalEarnings }
  }

  const stats = calculateStats()

  const upcomingBookings = bookings.filter(b => b.status === 'confirmed' || b.status === 'upcoming')
  const completedBookings = bookings.filter(b => b.status === 'completed')
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled')

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // If not authenticated, don't render anything (redirect happens in useEffect)
  if (!user) {
    return null
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                  {userData.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{userData.name || user?.name}</h1>
                <p className="opacity-90">{userData.email || user?.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {user?.userType === 'owner' ? 'Vehicle Owner' : 
                     user?.userType === 'driver' ? 'Driver' : 'Customer'}
                  </span>
                  {user?.userType === 'owner' && (
                    <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">
                      {stats.verifiedVehicles}/{stats.totalVehicles} Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEditToggle}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                {isEditing ? <FaCheck /> : <FaEdit />}
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['bookings', 'documents', 'vehicles'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab === 'vehicles' && user?.userType === 'owner' 
                ? `My Vehicles (${vehicles.length})` 
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <>
                {/* Booking Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeTab === 'bookings' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    All ({bookings.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      false ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Upcoming ({upcomingBookings.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      false ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Completed ({completedBookings.length})
                  </button>
                </div>

                {/* Booking History */}
                <div className="space-y-4">
                  {bookings.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl">
                      <div className="text-4xl mb-4">📋</div>
                      <h3 className="text-xl font-semibold mb-2">No Bookings Yet</h3>
                      <p className="text-gray-600 mb-6">Start your first booking today!</p>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
                      >
                        Browse Vehicles
                      </button>
                    </div>
                  ) : (
                    bookings.map((booking) => (
                      <div key={booking.id || Math.random()} className="bg-white rounded-xl shadow-sm p-6">
                        {/* Booking card content */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            {booking.vehicle?.type === 'car' ? 
                              <FaCar className="text-2xl text-blue-600" /> : 
                              <FaMotorcycle className="text-2xl text-blue-600" />
                            }
                            <div>
                              <div className="font-semibold">{booking.vehicle?.name || 'Vehicle'}</div>
                              <div className="text-sm text-gray-500">
                                Booking ID: {booking.id || 'N/A'} • {new Date(booking.bookingDate || Date.now()).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'confirmed' || booking.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {booking.status || 'confirmed'}
                          </span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Pickup</div>
                            <div className="font-medium">{booking.pickupLocation || 'Not specified'}</div>
                            <div className="text-sm text-gray-500">
                              {booking.pickupDate ? new Date(booking.pickupDate).toLocaleString() : 'Date not set'}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Return</div>
                            <div className="font-medium">{booking.returnLocation || 'Same as pickup'}</div>
                            <div className="text-sm text-gray-500">
                              {booking.returnDate ? new Date(booking.returnDate).toLocaleString() : 'Date not set'}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t">
                          <div className="text-xl font-bold text-blue-600">
                            ₹{booking.total || 0}
                          </div>
                          
                          <div className="flex gap-2">
                            {booking.status === 'confirmed' && (
                              <button
                                onClick={() => handleCancelBooking(booking.id)}
                                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 flex items-center gap-2"
                              >
                                <FaTrash />
                                Cancel
                              </button>
                            )}
                            
                            <button
                              onClick={() => handleDownloadInvoice(booking)}
                              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 flex items-center gap-2"
                            >
                              <FaDownload />
                              Invoice
                            </button>
                            
                            <button
                              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                            >
                              <FaEye />
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">My Documents</h2>
                
                {/* KYC Status */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                    <FaShieldAlt className="text-blue-600" />
                    KYC Status
                  </h3>
                  
                  <div className="space-y-4">
                    {Object.entries(kycStatus).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FaIdCard className="text-gray-500" />
                          <div>
                            <div className="font-medium capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className={`text-sm ${value.status === 'verified' ? 'text-green-600' : 'text-yellow-600'}`}>
                              {value.status.charAt(0).toUpperCase() + value.status.slice(1)}
                            </div>
                          </div>
                        </div>
                        {value.icon}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Complete KYC Verification
                  </button>
                </div>

                {/* Driving License */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Driving License</h3>
                  <div className="border rounded-lg p-4 mb-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">License Number</div>
                        <div className="font-medium">{userData.licenseNumber}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Expiry Date</div>
                        <div className="font-medium">{userData.licenseExpiry}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                        View Document
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Upload New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Vehicles Tab - REAL DATA FROM DATABASE */}
            {activeTab === 'vehicles' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">My Vehicles</h2>
                  <button
                    onClick={() => router.push('/add-vehicle')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <FaPlus />
                    Add Vehicle
                  </button>
                </div>
                
                {vehiclesLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : vehicles.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🚗</div>
                    <h3 className="text-xl font-semibold mb-2">No Vehicles Listed</h3>
                    <p className="text-gray-600 mb-6">Start earning by listing your vehicle for rent</p>
                    <button
                      onClick={() => router.push('/add-vehicle')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
                    >
                      List Your First Vehicle
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {vehicles.map((vehicle) => (
                      <div key={vehicle._id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Vehicle Image */}
                          <div className="w-full md:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                            {vehicle.images && vehicle.images.length > 0 ? (
                              <img 
                                src={vehicle.images.find(img => img.isPrimary)?.data || vehicle.images[0]?.data} 
                                alt={`${vehicle.brand} ${vehicle.model}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                                {vehicle.vehicleType === 'car' ? 
                                  <FaCar className="text-4xl text-gray-400" /> : 
                                  <FaMotorcycle className="text-4xl text-gray-400" />
                                }
                              </div>
                            )}
                          </div>
                          
                          {/* Vehicle Details */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                  {vehicle.brand} {vehicle.model} ({vehicle.year})
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {vehicle.registrationNumber}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  vehicle.isVerified 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {vehicle.isVerified ? 'Verified' : 'Pending Verification'}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  vehicle.isAvailable 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                              <div className="text-sm">
                                <span className="text-gray-500 block">Price/Day</span>
                                <span className="font-semibold text-blue-600">₹{vehicle.pricePerDay}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-500 block">Location</span>
                                <span className="font-medium">{vehicle.location}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-500 block">Fuel</span>
                                <span className="font-medium capitalize">{vehicle.fuelType}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-500 block">Transmission</span>
                                <span className="font-medium capitalize">{vehicle.transmission}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {vehicle.features?.slice(0, 3).map((feature, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                  {feature}
                                </span>
                              ))}
                              {vehicle.features?.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                  +{vehicle.features.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <div className="flex justify-between items-center mt-4 pt-3 border-t">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium text-green-600">₹{vehicle.totalEarnings || 0}</span> total earnings • 
                                <span className="ml-1">{vehicle.totalBookings || 0} bookings</span>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleViewVehicle(vehicle._id)}
                                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1"
                                >
                                  <FaEye /> View
                                </button>
                                <button
                                  onClick={() => handleEditVehicle(vehicle._id)}
                                  className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1"
                                >
                                  <FaEdit /> Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteVehicle(vehicle._id)}
                                  className="px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 flex items-center gap-1"
                                >
                                  <FaTrash /> Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar - Personal Info */}
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <FaUser className="text-blue-600" />
                Personal Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.name || 'Not set'}</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.email || 'Not set'}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="inline mr-2 text-gray-500" />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.phone || 'Not set'}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-gray-500" />
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.address}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendarAlt className="inline mr-2 text-gray-500" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={userData.dob}
                      onChange={(e) => handleInputChange('dob', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.dob}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Stats Card - Updated with vehicle stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6">Your Stats</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.totalBookings}</div>
                  <div className="text-gray-600 text-xs">Bookings</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.averageRating}</div>
                  <div className="text-gray-600 text-xs">Rating</div>
                </div>
              </div>
              
              {user?.userType === 'owner' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{stats.totalVehicles}</div>
                    <div className="text-gray-600 text-xs">Vehicles</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">₹{stats.totalEarnings}</div>
                    <div className="text-gray-600 text-xs">Earnings</div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaHistory className="text-blue-600" />
                    <span>My Bookings</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {bookings.length}
                  </span>
                </button>
                
                <button 
                  onClick={() => router.push('/add-vehicle')}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaCar className="text-blue-600" />
                    <span>List Your Vehicle</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Earn Money
                  </span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('documents')}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaIdCard className="text-blue-600" />
                    <span>My Documents</span>
                  </div>
                </button>

                <button 
                  onClick={() => {
                    localStorage.removeItem('rideease_user')
                    localStorage.removeItem('rideease_token')
                    router.push('/auth')
                  }}
                  className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaTimes className="text-red-600" />
                    <span className="text-red-600">Logout</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}