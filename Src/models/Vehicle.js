import mongoose from './mongoose';

const vehicleSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vehicleType: { type: String, enum: ['car', 'bike'], required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  
  registrationNumber: { type: String, required: true, unique: true },
  rcBookImage: String,
  insuranceImage: String,
  insuranceValidUntil: Date,
  
  fuelType: { type: String, enum: ['petrol', 'diesel', 'electric', 'cng'] },
  transmission: { type: String, enum: ['manual', 'automatic'] },
  seats: { type: Number, default: 2 },
  
  features: [String],
  
  // Images as Base64 strings
  images: [{
    data: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
    uploadedAt: { type: Date, default: Date.now }
  }],
  
  location: { type: String, required: true },
  latitude: Number,
  longitude: Number,
  address: String,
  
  pricePerDay: { type: Number, required: true },
  pricePerWeek: Number,
  pricePerMonth: Number,
  securityDeposit: { type: Number, default: 5000 },
  
  isAvailable: { type: Boolean, default: true },
  availableFrom: Date,
  availableTo: Date,
  
  rating: { type: Number, default: 0 },
  totalBookings: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 },
  
  isVerified: { type: Boolean, default: false },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  verificationDate: Date,
  
  description: String,
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

vehicleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema);