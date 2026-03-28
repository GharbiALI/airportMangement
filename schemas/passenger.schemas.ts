import mongoose, { Schema } from 'mongoose';

export const PassengerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passportNumber: { type: String, required: true },
});

export const PassengerModel = mongoose.model("Passenger", PassengerSchema);