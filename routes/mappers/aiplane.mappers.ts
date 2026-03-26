import { Airplane } from "../../service/airplane.service";
import { AirplaneResponse } from "./types";

export const mapToAirplaneResponse = (airplane: Airplane): AirplaneResponse => {
  return {
    model: airplane.model ?? null ,
    status: airplane.status ?? null,
    currentLocation: airplane.currentLocation ?? null,
  };
};

export const mapToAirplaneList = (
  airplanes: Airplane[]
): AirplaneResponse[] => {
  return airplanes.map((airplane) => mapToAirplaneResponse(airplane));
};
