import mongoose, { Schema } from 'mongoose';

export const TicketSchema = new Schema({
  passengerId: { type: Schema.Types.ObjectId, ref: "Passenger", required: true },
  flightId: { type: Schema.Types.ObjectId, ref: "Flight", required: true },
  seatNumber: { type: String, required: true },
  price: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["confirmed", "cancelled"], 
    default: "confirmed" 
  },
});

export const TicketModel = mongoose.model("Ticket", TicketSchema);