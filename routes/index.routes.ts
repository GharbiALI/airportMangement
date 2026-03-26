import { Router } from "express";
import airplaneRoutes from "./airplane.routes";


const router = Router();

router.use("/airplane",airplaneRoutes)


export default router;