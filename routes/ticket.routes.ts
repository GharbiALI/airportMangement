import { Router } from "express";
import {
  createTicket,
  deleteTicket,
  updateTicket,
  countPassengersByFlight,
  findAllTickets
} from "../service/ticket.service";
import { validateTicketId, validateTicketInput } from "../validators/ticket.validators";
import { mapToTicketResponse, mapToTicketList } from "./mappers/ticket.mappers";

const router = Router();

router.get("/", (req, res) => {
  findAllTickets()
    .then((tickets) => res.status(200).json(mapToTicketList(tickets)))
    .catch((err) => res.status(500).send("Error fetching tickets"));
});

router.get("/count/:flightId", (req, res) => {
  const flightId = req.params.flightId as string;
  countPassengersByFlight(flightId)
    .then((count) => res.status(200).json({ totalPassengers: count }))
    .catch((err) => res.status(500).send("Error counting passengers"));
});

router.post("/", validateTicketInput, (req, res) => {
  createTicket(req.body)
    .then((saved) => res.status(201).json(mapToTicketResponse(saved)))
    .catch((err) => res.status(500).send("Error saving ticket"));
});

router.patch("/:id", validateTicketId, (req, res) => {
  const id = req.params.id as string;
  updateTicket(id, req.body)
    .then((updated) => {
      if (!updated) return res.status(404).send("Ticket not found");
      res.status(200).json(mapToTicketResponse(updated));
    })
    .catch((err) => res.status(500).send("Error updating ticket"));
});

router.delete("/:id", validateTicketId, (req, res) => {
  const id = req.params.id as string;
  deleteTicket(id)
    .then((deleted) => {
      if (!deleted) return res.status(404).send("Ticket not found");
      res.status(200).send("Ticket deleted successfully");
    })
    .catch((err) => res.status(500).send("Error deleting ticket"));
});

export default router;