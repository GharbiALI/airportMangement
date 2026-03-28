import { Router } from "express";
import airplaneRoutes from "./airplane.routes";
import airlineRoutes from "./airline.routes";
import flightRoutes from "./flight.routes";
import ticketRoutes from "./ticket.routes";
import passengerRoutes from "./passenger.routes";

const router = Router();

router.use("/airplane",airplaneRoutes)
router.use("/airline", airlineRoutes);
router.use("/flight", flightRoutes);
router.use("/passenger", passengerRoutes);
router.use("/ticket", ticketRoutes);

export default router;