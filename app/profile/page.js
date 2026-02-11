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
  FaDownload
} from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Gaurav Kumar',
    email: 'gaurav.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'Delhi, India',
    dob: '1998-05-15',
    licenseNumber: 'DL04 20230012345',
    licenseExpiry: '2030-12-31'
  })

  const [bookings, setBookings] = useState([])
  const [activeTab, setActiveTab] = useState('bookings')

  useEffect(() => {
    // Load bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('rideease_bookings') || '[]')
    setBookings(savedBookings)
  }, [])

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
    // In real app, generate and download PDF invoice
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
    
    return { totalBookings, totalSpent, averageRating }
  }

  const stats = calculateStats()

  const upcomingBookings = bookings.filter(b => b.status === 'confirmed' || b.status === 'upcoming')
  const completedBookings = bookings.filter(b => b.status === 'completed')
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled')

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[--color-primary-600] to-[--color-primary-800] rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-[--color-primary-100] rounded-full flex items-center justify-center text-[--color-primary-600] text-3xl font-bold">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                <p className="opacity-90">Premium Member • Joined Nov 2023</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.href = '/add-vehicle'}
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <FaCar />
                List Your Vehicle
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-white text-[--color-primary-600] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
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
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === tab ? 'bg-[--color-primary-600] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'bookings' && (
              <>
                {/* Booking Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'bookings' ? 'bg-[--color-primary-600] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    All ({bookings.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${false ? 'bg-[--color-primary-600] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Upcoming ({upcomingBookings.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-lg font-medium ${false ? 'bg-[--color-primary-600] text-white' : 'bg-gray-100 text-gray-700'}`}
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
                        className="bg-[--color-primary-600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[--color-primary-700]"
                      >
                        Browse Vehicles
                      </button>
                    </div>
                  ) : (
                    bookings.map((booking) => (
                      <div key={booking.id || Math.random()} className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            {booking.vehicle?.type === 'car' ? 
                              <FaCar className="text-2xl text-[--color-primary-600]" /> : 
                              <FaMotorcycle className="text-2xl text-[--color-primary-600]" />
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

                        {booking.rentalType && (
                          <div className="mb-4">
                            <div className="text-sm text-gray-600 mb-1">Rental Type</div>
                            <div className="font-medium capitalize">{booking.rentalType}</div>
                            {booking.rentalType === 'withDriver' && booking.assignedDriver && (
                              <div className="mt-2 text-sm">
                                <div className="font-medium">Driver: {booking.assignedDriver.name}</div>
                                <div className="text-gray-500">Phone: {booking.assignedDriver.phone}</div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t">
                          <div className="text-xl font-bold text-[--color-primary-600]">
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

            {activeTab === 'documents' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">My Documents</h2>
                
                {/* KYC Status */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                    <FaShieldAlt className="text-[--color-primary-600]" />
                    KYC Status
                  </h3>
                  
                  <div className="space-y-4">
                    {Object.entries(kycStatus).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FaIdCard className="text-gray-500" />
                          <div>
                            <div className="font-medium">
                              {key.split(/(?=[A-Z])/).join(' ')}
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

                  <button className="w-full mt-6 bg-[--color-primary-600] text-white py-3 rounded-lg font-medium hover:bg-[--color-primary-700] transition-colors">
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
                      <button className="px-4 py-2 border border-[--color-primary-600] text-[--color-primary-600] rounded-lg hover:bg-[--color-primary-50]">
                        View Document
                      </button>
                      <button className="px-4 py-2 bg-[--color-primary-600] text-white rounded-lg hover:bg-[--color-primary-700]">
                        Upload New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vehicles' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">My Vehicles</h2>
                
                {bookings.filter(b => b.vehicleType === 'owner').length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">🚗</div>
                    <h3 className="text-xl font-semibold mb-2">No Vehicles Listed</h3>
                    <p className="text-gray-600 mb-6">Start earning by listing your vehicle for rent</p>
                    <button
                      onClick={() => window.location.href = '/add-vehicle'}
                      className="bg-[--color-primary-600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[--color-primary-700]"
                    >
                      List Your Vehicle
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Example Vehicle Card */}
                    <div className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FaCar className="text-2xl text-gray-600" />
                          </div>
                          <div>
                            <div className="font-semibold">Hyundai Creta SX</div>
                            <div className="text-sm text-gray-500">Listed on Nov 1, 2024</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[--color-primary-600]">₹2,200/day</div>
                          <div className="text-sm text-green-600">Active • 12 bookings</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Automatic</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Petrol</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">5 Seater</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AC</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Total earnings: <span className="font-semibold text-green-600">₹26,400</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Edit
                          </button>
                          <button className="px-4 py-2 bg-[--color-primary-600] text-white rounded-lg hover:bg-[--color-primary-700]">
                            View Bookings
                          </button>
                        </div>
                      </div>
                    </div>
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
                <FaUser className="text-[--color-primary-600]" />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.name}</div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.email}</div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.phone}</div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">{userData.address}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6">Your Stats</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stats.totalBookings}</div>
                  <div className="text-gray-600">Total Bookings</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stats.averageRating}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className={`${star <= stats.averageRating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₹{stats.totalSpent}</div>
                  <div className="text-gray-600">Total Spent</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-[--color-primary-600]" />
                    <span>Upcoming Bookings</span>
                  </div>
                  <span className="bg-[--color-primary-100] text-[--color-primary-800] px-3 py-1 rounded-full text-sm">
                    {upcomingBookings.length}
                  </span>
                </button>
                
                <button 
                  onClick={() => window.location.href = '/add-vehicle'}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FaCar className="text-[--color-primary-600]" />
                    <span>List Your Vehicle</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Earn Money
                  </span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('documents')}
                  className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FaIdCard className="text-[--color-primary-600]" />
                    <span>My Documents</span>
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