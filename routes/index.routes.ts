import { Router } from "express";
import airplaneRoutes from "./airplane.routes";
import airlineRoutes from "./airline.routes";
import flightRoutes from "./flight.routes";

const router = Router();

router.use("/airplane",airplaneRoutes)
router.use("/airline", airlineRoutes);
router.use("/flight", flightRoutes);


export default router;