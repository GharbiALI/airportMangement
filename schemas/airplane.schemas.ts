import mongoose, { Schema } from 'mongoose';

export const AirplaneSchema = new Schema({
  model: { type: String, required: true },
  airlineId: { type: String, ref: "Airline", required: true },
  status: { 
    type: String, 
    enum: ["active", "defected", "maintenance"], 
    default: "active" 
  },
  currentLocation: { type: String, required: true },
  capacity: { type: Number, required: true },
});

export const AirplaneModel = mongoose.model("Airplane", AirplaneSchema);