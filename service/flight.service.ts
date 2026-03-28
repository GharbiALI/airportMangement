import { FlightModel } from "../schemas/flight.schemas";

export interface Flight {
  airplaneId: string;
  departure: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  status: "scheduled" | "delayed" | "departed" | "arrived" | "cancelled";
}

export async function findById(id: string) {
  return await FlightModel.findById(id).lean();
}

export async function findAll() {
  return await FlightModel.find().lean();
}

export async function findPath(departure: string, destination: string) {
  return await FlightModel.find({ departure, destination }).lean();
}

export async function createFlight(data: Flight): Promise<Flight> {
  const flight = new FlightModel(data);
  return await flight.save();
}

export async function deleteFlight(id: string) {
  return await FlightModel.findByIdAndDelete(id).lean();
}

export async function findTodaysFlights() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return await FlightModel.find({
    departureTime: { $gte: start, $lte: end }
  }).lean();
}

export async function updateFlightDate(id: string, newDeparture: Date, newArrival: Date) {
  return await FlightModel.findByIdAndUpdate(
    id,
    { departureTime: newDeparture, arrivalTime: newArrival },
    { new: true }
  ).lean();
}