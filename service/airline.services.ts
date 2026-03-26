import { AirlineModel } from "../schemas/airline.schemas";

export interface Airline {
  name: string;
  country: string;
}

export async function findAll() {
  return await AirlineModel.find().lean();
}

export async function findById(id: string) {
  return await AirlineModel.findById(id).lean();
}

export async function createAirline(data: Airline): Promise<Airline> {
  const airline = new AirlineModel(data);
  return await airline.save();
}

export async function deleteAirline(id: string) {
  return await AirlineModel.findByIdAndDelete(id).lean();
}