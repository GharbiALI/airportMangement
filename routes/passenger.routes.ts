import { Router } from "express";
import { 
  findAll, 
  findById, 
  createPassenger, 
  deletePassenger,
  updatePassenger
} from "../service/passenger.service";
import { 
  validatePassengerId, 
  validatePassengerInput 
} from "../validators/passenger.validators";
import { 
  mapToPassengerResponse, 
  mapToPassengerList 
} from "./mappers/passenger.mappers";

const router = Router();

router.get("/", (req, res) => {
  findAll()
    .then((passengers) => res.status(200).json(mapToPassengerList(passengers)))
    .catch((err) => res.status(500).send("Error fetching passengers"));
});

router.get("/:id", validatePassengerId, (req, res) => {
  findById(req.params.id as string)
    .then((passenger) => {
      if (!passenger) return res.status(404).send("Passenger not found");
      res.status(200).json(mapToPassengerResponse(passenger));
    })
    .catch((err) => res.status(500).send("Server Error"));
});


router.post("/", validatePassengerInput, (req, res) => {
  createPassenger(req.body)
    .then((saved) => res.status(201).json(mapToPassengerResponse(saved)))
    .catch((err) => res.status(500).send("Error saving passenger"));
});

router.patch("/:id", validatePassengerId, (req, res) => {
  const id = req.params.id as string;
  updatePassenger(id, req.body)
    .then((updated) => {
      if (!updated) return res.status(404).send("Passenger not found");
      res.status(200).json(mapToPassengerResponse(updated));
    })
    .catch((err) => res.status(500).send("Error updating passenger"));
});

router.delete("/:id", validatePassengerId, (req, res) => {
  const id = req.params.id as string;
  deletePassenger(id)
    .then((deleted) => {
      if (!deleted) return res.status(404).send("Passenger not found");
      res.status(200).send("Passenger deleted successfully");
    })
    .catch((err) => res.status(500).send("Error deleting passenger"));
});
export default router;