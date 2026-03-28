import { Router } from "express";
import {
  findAll,
  findPath,
  createFlight,
  deleteFlight,
  updateFlightDate,
  findTodaysFlights,
  findById, // FIX 1: Added findById to imports
} from "../service/flight.service";
import {
  validateFlightId,
  validateFlightInput,
} from "../validators/flight.validators";
import { mapToFlightResponse, mapToFlightList } from "./mappers/flight.mappers";

const router = Router();

router.get("/", (req, res) => {
  findAll()
    .then((flights: any[]) => res.status(200).json(mapToFlightList(flights)))
    .catch((err: Error) => res.status(500).send("Error fetching flights"));
});

router.get("/:id", validateFlightId, (req, res) => {
  const id = req.params.id as string;
  findById(id)
    .then((flight: any) => {
      if (!flight) return res.status(404).send("Flight not found");
      res.status(200).json(mapToFlightResponse(flight));
    })
    .catch((err: Error) => res.status(500).send("Server Error"));
});

router.get("/search", (req, res) => {
  const from = req.query.from as string;
  const to = req.query.to as string;

  findPath(from, to)
    .then((flights: any[]) => res.status(200).json(mapToFlightList(flights)))
    .catch((err: Error) => res.status(500).send("Error searching flights"));
});

router.get("/today", (req, res) => {
  findTodaysFlights()
    .then((flights: any[]) => res.status(200).json(mapToFlightList(flights)))
    .catch((err: Error) => res.status(500).send("Error fetching today's flights"));
});

router.post("/", validateFlightInput, (req, res) => {
  createFlight(req.body)
    .then((saved: any) => res.status(201).json(mapToFlightResponse(saved)))
    .catch((err: Error) => res.status(500).send("Error saving flight"));
});

router.patch("/:id/schedule", validateFlightId, (req, res) => {
  const { departureTime, arrivalTime } = req.body;
  const id = req.params.id as string; // FIX 2: Ensure ID is cast to string

  updateFlightDate(id, new Date(departureTime), new Date(arrivalTime))
    .then((updated: any) => {
      if (!updated) return res.status(404).send("Flight not found");
      res.status(200).json(mapToFlightResponse(updated));
    })
    .catch((err: Error) => res.status(500).send("Error updating flight schedule"));
});

router.delete("/:id", validateFlightId, (req, res) => {
  const id = req.params.id as string;
  deleteFlight(id)
    .then((deleted: any) => {
      if (!deleted) return res.status(404).send("Flight not found");
      res.status(200).send("Flight deleted successfully");
    })
    .catch((err: Error) => res.status(500).send("Error deleting flight"));
});

export default router;