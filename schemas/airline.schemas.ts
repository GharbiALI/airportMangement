import mongoose, { Schema } from 'mongoose';

export const AirlineSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
});

export const AirlineModel = mongoose.model("Airline", AirlineSchema);