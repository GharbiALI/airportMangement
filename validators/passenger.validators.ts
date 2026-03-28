import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const validatePassengerId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(400).json({ reason: "Invalid Passenger ID format." });
  }
  next();
};

export const validatePassengerInput = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, passportNumber } = req.body;
  if (!firstName || !lastName || !email || !passportNumber) {
    return res.status(400).json({ reason: "Missing required passenger fields." });
  }
  next();
};