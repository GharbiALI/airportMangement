import { AirplaneModel } from "../schemas/airplane.schemas";

export interface Airplane {
    model: string;
    airlineId: string;
    status: "active" | "defected" | "maintenance";
    currentLocation: string; 
    capacity: number;
  }
export async function findAirplaneById(id: string) {
  return await AirplaneModel.findById(id).lean();
}

export async function findByAirline(airlineId: string) {
  return await AirplaneModel.find({ airlineId }).lean();
}

export async function findDefected() {
  return await AirplaneModel.find({ status: "defected" }).lean();
}

export async function createAirplane(data: Airplane): Promise<Airplane> {
  const airplane = new AirplaneModel(data);
  return await airplane.save();
}

export async function deleteAirplane(id: string) {
  return await AirplaneModel.findByIdAndDelete(id).lean();
}