import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const validateAirlineId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      reason: "Invalid ID format. The ID provided is not a valid MongoDB ObjectId."
    });
  }
  next();
};

export const validateAirlineInput = (req: Request, res: Response, next: NextFunction) => {
  const { name, country } = req.body;
  if (!name || !country) {
    return res.status(400).json({ reason: "Missing required airline fields: name or country" });
  }
  next();
};