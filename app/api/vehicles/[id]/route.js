import { NextResponse } from 'next/server';
import { connectDB } from '@/Src/lib/db';
import Vehicle from '@/Src/models/Vehicle';

export async function GET(request, { params }) {
  console.log(`🚀 [API] /api/vehicles/${params.id} GET called`);
  
  try {
    await connectDB();
    
    const vehicle = await Vehicle.findById(params.id)
      .populate('owner', 'name phone email rating');

    if (!vehicle) {
      return NextResponse.json({
        success: false,
        error: 'Vehicle not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      vehicle
    });

  } catch (error) {
    console.error('❌ Fetch vehicle error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  console.log(`🚀 [API] /api/vehicles/${params.id} PUT called`);
  
  try {
    await connectDB();
    
    const body = await request.json();
    
    const vehicle = await Vehicle.findByIdAndUpdate(
      params.id,
      { 
        ...body, 
        updatedAt: new Date() 
      },
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!vehicle) {
      return NextResponse.json({
        success: false,
        error: 'Vehicle not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Vehicle updated successfully',
      vehicle
    });

  } catch (error) {
    console.error('❌ Update vehicle error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  console.log(`🚀 [API] /api/vehicles/${params.id} DELETE called`);
  
  try {
    await connectDB();
    
    const vehicle = await Vehicle.findByIdAndDelete(params.id);

    if (!vehicle) {
      return NextResponse.json({
        success: false,
        error: 'Vehicle not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Vehicle deleted successfully'
    });

  } catch (error) {
    console.error('❌ Delete vehicle error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}