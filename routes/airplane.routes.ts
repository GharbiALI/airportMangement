import { Router } from "express";
import {
  findAirplaneById,
  findByAirline,
  findDefected,
  createAirplane,
  deleteAirplane,
} from "../service/airplane.service";
import {
  validateAirplaneId,
  validateAirplaneInput,
} from "../validators/airplane.validators";
import {
  mapToAirplaneResponse,
  mapToAirplaneList,
} from "./mappers/aiplane.mappers";

const router = Router();

// Search an airplane by ID
router.get("/:id", validateAirplaneId, (req, res) => {
  const id = req.params.id as string;
  findAirplaneById(id)
    .then((airplane) => {
      if (!airplane) return res.status(404).send("Airplane not found");
      res.status(200).json(mapToAirplaneResponse(airplane));
    })
    .catch((err) => res.status(500).send("Server Error"));
});

// Search all airplanes belonging to the same airline
router.get("/airline/:airlineId", (req, res) => {
  const airlineId = req.params.airlineId as string;
  findByAirline(airlineId)
    .then((airplanes) => res.status(200).json(mapToAirplaneList(airplanes)))
    .catch((err) =>
      res.status(500).send("Error fetching airplanes for this airline")
    );
});

// Search which airplanes are defected
router.get("/", (req, res) => {
  findDefected()
    .then((airplanes) => {
      if (!airplanes) return res.status(404).send("airplane not found");
      res.status(200).json(mapToAirplaneList(airplanes))})
    .catch((err) => res.status(500).send("Error fetching defected airplanes"));
});

// Create/Add a new airplane
router.post("/", (req, res) => {
  createAirplane(req.body)
    .then((savedAirplane) =>
      res.status(201).json(mapToAirplaneResponse(savedAirplane))
    )
    .catch((err) => res.status(500).send("Error saving airplane"));
});

// Delete an airplane
router.delete("/:id", validateAirplaneId, (req, res) => {
  const id = req.params.id as string;
  deleteAirplane(id)
    .then((deletedAirplane) => {
      if (!deletedAirplane) return res.status(404).send("Airplane not found");
      res.status(200).send("Airplane deleted successfully");
    })
    .catch((err) => res.status(500).send("Error deleting airplane"));
});

export default router;
