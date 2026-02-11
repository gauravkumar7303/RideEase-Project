// import './globals.css'
// import Navbar from '@/Src/components/Navbar'
// import Footer from '@/Src/components/Footer'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export const metadata = {
//   title: 'RideEase - Bike & Car Rental in Delhi & Gurugram',
//   description: 'Company-verified bike and car rental platform with affordable prices, damage protection, and 24/7 support.',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="font-sans bg-gray-50">
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//         <ToastContainer 
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//       </body>
//     </html>
//   )
// }
'use client'

import './globals.css'
import Navbar from '@/Src/components/Navbar'
import Footer from '@/Src/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { isAuthenticated } from '@/Src/utils/auth'
import LoadingSpinner from '@/Src/components/LoadingSpinner'

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  
  // Public routes that don't require authentication
  const publicRoutes = ['/auth', '/about', '/contact', '/how-it-works', '/']
  
  useEffect(() => {
    // Skip auth check for public routes
    if (publicRoutes.includes(pathname)) {
      setIsLoading(false)
      return
    }
    
    // Check authentication
    const auth = isAuthenticated()
    
    if (!auth) {
      // If not authenticated and trying to access private route, redirect to auth
      router.push('/auth')
      return
    }
    
    // If authenticated, show the page
    setIsLoading(false)
  }, [pathname, router])

  // Show loading spinner while checking auth
  if (isLoading && !publicRoutes.includes(pathname)) {
    return (
      <html lang="en">
        <body className="font-sans bg-gray-50 min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">
        {/* Don't show Navbar/Footer on auth page */}
        {pathname !== '/auth' && <Navbar />}
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {pathname !== '/auth' && <Footer />}
        
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}