import mongoose, { Schema } from 'mongoose';

export const FlightSchema = new Schema({
  airplaneId: { type: String, ref: "Airplane", required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ["scheduled", "delayed", "departed", "arrived", "cancelled"], 
    default: "scheduled" 
  },
});

export const FlightModel = mongoose.model("Flight", FlightSchema);