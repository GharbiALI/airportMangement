import { Router } from "express";
import {
  findAll,
  findById,
  createAirline,
  deleteAirline,
} from "../service/airline.services";
import {
  validateAirlineId,
  validateAirlineInput,
} from "../validators/airline.validators";
import {
  mapToAirlineResponse,
  mapToAirlineList,
} from "./mappers/airline.mappers";

const router = Router();

router.get("/", (req, res) => {
  findAll()
    .then((airlines) => res.status(200).json(mapToAirlineList(airlines)))
    .catch((err) => res.status(500).send("Error fetching airlines"));
});

router.get("/:id", validateAirlineId, (req, res) => {
  const id = req.params.id as string;
  findById(id)
    .then((airline) => {
      if (!airline) return res.status(404).send("Airline not found");
      res.status(200).json(mapToAirlineResponse(airline));
    })
    .catch((err) => res.status(500).send("Server Error"));
});

router.post("/", validateAirlineInput, (req, res) => {
  createAirline(req.body)
    .then((savedAirline) =>
      res.status(201).json(mapToAirlineResponse(savedAirline))
    )
    .catch((err) => res.status(500).send("Error saving airline"));
});

router.delete("/:id", validateAirlineId, (req, res) => {
  const id = req.params.id as string;
  deleteAirline(id)
    .then((deleted) => {
      if (!deleted) return res.status(404).send("Airline not found");
      res.status(200).send("Airline deleted successfully");
    })
    .catch((err) => res.status(500).send("Error deleting airline"));
});

export default router;