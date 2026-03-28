import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const validateFlightId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(400).json({ reason: "Invalid Flight ID format." });
  }
  next();
};

export const validateFlightInput = (req: Request, res: Response, next: NextFunction) => {
  const { airplaneId, departure, destination, departureTime, arrivalTime } = req.body;
  
  if (!airplaneId || !departure || !destination || !departureTime || !arrivalTime) {
    return res.status(400).json({ reason: "Missing required flight fields, including arrival time." });
  }
  
  if (new Date(arrivalTime) <= new Date(departureTime)) {
    return res.status(400).json({ reason: "Arrival time must be after departure time." });
  }
  
  next();
};