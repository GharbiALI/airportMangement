import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const validateTicketId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(400).json({ reason: "Invalid Ticket ID format." });
  }
  next();
};

export const validateTicketInput = (req: Request, res: Response, next: NextFunction) => {
  const { ticketNumber, passengerId, flightId, seatNumber, price } = req.body;
  if (!ticketNumber || !passengerId || !flightId || !seatNumber || !price) {
    return res.status(400).json({ reason: "Missing required ticket fields." });
  }
  next();
};