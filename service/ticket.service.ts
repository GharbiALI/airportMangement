import { TicketModel } from "../schemas/ticket.schemas";

export interface Ticket {
  passengerId: string;
  flightId: string;
  seatNumber: string;
  price: number;
  status: "confirmed" | "cancelled";
}

export async function findAllTickets() {
  return await TicketModel.find().lean();
}

export async function createTicket(data: Ticket) {
  const ticket = new TicketModel(data);
  return await ticket.save();
}

export async function updateTicket(id: string, updateData: Partial<Ticket>) {
  return await TicketModel.findByIdAndUpdate(id, updateData, { new: true }).lean();
}

export async function deleteTicket(id: string) {
  return await TicketModel.findByIdAndDelete(id).lean();
}

export async function countPassengersByFlight(flightId: string) {
  return await TicketModel.countDocuments({ flightId, status: "confirmed" });
}