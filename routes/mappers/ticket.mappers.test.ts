import { Ticket } from "../../service/ticket.service";
import { mapToTicketResponse, mapToTicketList } from "./ticket.mappers";
import { TicketResponse } from "./types";

test("should map ticket data correctly", () => {
  // given
  const mockTicket: Ticket = {
    passengerId: "pass_123",
    flightId: "flight_456",
    seatNumber: "12A",
    price: 350,
    status: "confirmed"
  };

  // when
  const result: TicketResponse = mapToTicketResponse(mockTicket);

  // then
  expect(result.seatNumber).toBe(mockTicket.seatNumber);
});

test("should map ticket data correctly when object is empty", () => {
  // given
  const mockTicket: Ticket = {} as Ticket;

  // when
  const result: TicketResponse = mapToTicketResponse(mockTicket);

  // then
  expect(result.price).toBe(null);
});