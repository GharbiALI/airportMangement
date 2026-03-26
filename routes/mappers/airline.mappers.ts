import { Airline } from "../../service/airline.services";
import { AirlineResponse } from "./types";

export const mapToAirlineResponse = (airline: Airline): AirlineResponse => {
  return {
    name: airline.name ?? null,
    country: airline.country ?? null,
  };
};

export const mapToAirlineList = (airlines: Airline[]): AirlineResponse[] => {
  return airlines.map((airline) => mapToAirlineResponse(airline));
};