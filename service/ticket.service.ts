import { Types } from "mongoose"; 
import { TicketModel } from "../schemas/ticket.schemas";

export interface Ticket {
  passengerId: string | Types.ObjectId; 
  flightId: string | Types.ObjectId;
  seatNumber: string;
  price: number;
  status: "confirmed" | "cancelled";
}

export async function findAllTickets(): Promise<Ticket[]> {
  return await TicketModel.find().lean();
}

export async function createTicket(data: Ticket): Promise<Ticket> {
  const ticket = new TicketModel(data);
  return await ticket.save();
}

export async function updateTicket(id: string, updateData: Partial<Ticket>) {
  return await TicketModel.findByIdAndUpdate(id, updateData, { new: true }).lean();
}

export async function deleteTicket(id: string) {
  return await TicketModel.findByIdAndDelete(id).lean();
}

export async function countPassengersByFlight(flightId: string): Promise<number> {
  return await TicketModel.countDocuments({ flightId, status: "confirmed" });
}