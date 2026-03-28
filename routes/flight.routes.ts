import { Router } from "express";
import {
  findAll,
  findPath,
  createFlight,
  deleteFlight,
  updateFlightDate,
  findTodaysFlights,
  findById, 
} from "../service/flight.service";
import {
  validateFlightId,
  validateFlightInput,
} from "../validators/flight.validators";
import { mapToFlightResponse, mapToFlightList } from "./mappers/flight.mappers";

const router = Router();

router.get("/", (req, res) => {
  findAll()
    .then((flights) => res.status(200).json(mapToFlightList(flights)))
    .catch((err) => res.status(500).send("Error fetching flights"));
});

router.get("/:id", validateFlightId, (req, res) => {
  const id = req.params.id as string;
  findById(id)
    .then((flight) => {
      if (!flight) return res.status(404).send("Flight not found");
      res.status(200).json(mapToFlightResponse(flight));
    })
    .catch((err) => res.status(500).send("Server Error"));
});

router.get("/search", (req, res) => {
  const from = req.query.from as string;
  const to = req.query.to as string;

  findPath(from, to)
    .then((flights) => res.status(200).json(mapToFlightList(flights)))
    .catch((err) => res.status(500).send("Error searching flights"));
});

router.get("/today", (req, res) => {
  findTodaysFlights()
    .then((flights) => res.status(200).json(mapToFlightList(flights)))
    .catch((err) => res.status(500).send("Error fetching today's flights"));
});

router.post("/", validateFlightInput, (req, res) => {
  createFlight(req.body)
    .then((saved) => res.status(201).json(mapToFlightResponse(saved)))
    .catch((err) => res.status(500).send("Error saving flight"));
});

router.patch("/:id/schedule", validateFlightId, (req, res) => {
  const { departureTime, arrivalTime } = req.body;
  const id = req.params.id as string; 

  updateFlightDate(id, new Date(departureTime), new Date(arrivalTime))
    .then((updated) => {
      if (!updated) return res.status(404).send("Flight not found");
      res.status(200).json(mapToFlightResponse(updated));
    })
    .catch((err: Error) => res.status(500).send("Error updating flight schedule"));
});

router.delete("/:id", validateFlightId, (req, res) => {
  const id = req.params.id as string;
  deleteFlight(id)
    .then((deleted) => {
      if (!deleted) return res.status(404).send("Flight not found");
      res.status(200).send("Flight deleted successfully");
    })
    .catch((err) => res.status(500).send("Error deleting flight"));
});

export default router;