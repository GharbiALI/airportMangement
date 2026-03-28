import { PassengerModel } from "../schemas/passenger.schemas";

export interface Passenger {
  firstName: string;
  lastName: string;
  email: string;
  passportNumber: string;
}

export async function findAll() {
  return await PassengerModel.find().lean();
}

export async function findById(id: string) {
  return await PassengerModel.findById(id).lean();
}

export async function createPassenger(data: Passenger) {
  const passenger = new PassengerModel(data);
  const saved = await passenger.save();
  return saved.toObject();
}

export async function updatePassenger(id: string, data: Partial<Passenger>) {
  return await PassengerModel.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deletePassenger(id: string) {
  return await PassengerModel.findByIdAndDelete(id).lean();
}