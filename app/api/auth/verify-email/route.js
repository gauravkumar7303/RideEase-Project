// app/api/auth/resend-otp/route.js
import { NextResponse } from 'next/server';
import { AuthService } from '@/Src/services/auth.service';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const result = await AuthService.resendOTP(email);
    
    return NextResponse.json(result, { status: 200 });
    
  } catch (error) {
    console.error('Resend OTP error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to resend OTP' },
      { status: 400 }
    );
  }
}