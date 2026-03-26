import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";


export const validateAirplaneId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;

  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      reason: "Invalid ID format. The ID provided is not a valid MongoDB ObjectId."
    });
  }
  next();
};
export const validateAirplaneInput = (req: Request, res: Response, next: NextFunction) => {
  const { model, currentLocation, capacity, airlineId } = req.body;
  
  if (!model || !currentLocation || !capacity || !airlineId) {
    return res.status(400).json({ reason: "Missing required airplane fields" });
  }
  
  if (capacity <= 0) {
    return res.status(400).json({ reason: "Capacity must be a positive number" });
  }
  
  next();
};