import { Router } from "express";
import airplaneRoutes from "./airplane.routes";
import airlineRoutes from "./airline.routes";

const router = Router();

router.use("/airplane",airplaneRoutes)
router.use("/airline", airlineRoutes);


export default router;