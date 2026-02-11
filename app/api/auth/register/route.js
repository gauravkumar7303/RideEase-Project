import { NextResponse } from 'next/server';
import { AuthService } from '@/Src/services/auth.service';

export async function POST(request) {
  console.log('🚀 [API] /api/auth/register called');
  
  try {
    // Parse request body
    const body = await request.json();
    console.log('📦 Request body received');
    
    const { name, email, phone, password, confirmPassword, userType } = body;

    // Validation
    console.log('✅ Validating request data...');
    
    if (!email || !password || !name || !phone) {
      console.log('❌ Validation failed: Missing required fields');
      return NextResponse.json(
        { 
          success: false,
          error: 'All fields are required: name, email, phone, password' 
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Please enter a valid email address' 
        },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Please enter a valid 10-digit Indian phone number' 
        },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      console.log('❌ Passwords do not match');
      return NextResponse.json(
        { 
          success: false,
          error: 'Passwords do not match' 
        },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      console.log('❌ Password too short');
      return NextResponse.json(
        { 
          success: false,
          error: 'Password must be at least 6 characters' 
        },
        { status: 400 }
      );
    }

    // Register user
    console.log('👤 Attempting registration for:', email);
    const result = await AuthService.registerUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      password,
      userType: userType || 'customer'
    });

    console.log('✅ Registration successful for:', email);
    
    return NextResponse.json(result, { 
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
  } catch (error) {
    console.error('💥 Registration API error:', error);
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        { 
          success: false,
          error: `This ${field} is already registered` 
        },
        { status: 409 }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { 
          success: false,
          error: error.message 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Registration failed. Please try again.' 
      },
      { status: 400 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}