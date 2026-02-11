// app/api/test-email/route.js
import { EmailService } from '@/Src/services/email.service';

export async function GET(request) {
  try {
    // Get email from query parameter or use default
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email') || 'your-test-email@gmail.com';
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log('🧪 Testing email to:', email);
    
    const result = await EmailService.sendOTP(email, otp);
    
    return Response.json({
      success: true,
      message: 'Test email sent!',
      email: email,
      otp: otp,
      result: result
    });
    
  } catch (error) {
    console.error('Test email failed:', error);
    return Response.json({
      success: false,
      error: error.message,
      details: error
    }, { status: 500 });
  }
}
