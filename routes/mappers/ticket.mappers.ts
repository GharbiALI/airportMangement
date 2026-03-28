import { Ticket } from "../../service/ticket.service";
import { TicketResponse } from "./types";

export const mapToTicketResponse = (ticket: Ticket): TicketResponse => {
  return {
    passengerId: ticket.passengerId ?? null,
    flightId: ticket.flightId ?? null,
    seatNumber: ticket.seatNumber ?? null,
    price: ticket.price ?? null,
    status: ticket.status ?? null,
  };
};

export const mapToTicketList = (tickets: Ticket[]): TicketResponse[] => {
  return tickets.map((ticket) => mapToTicketResponse(ticket));
};