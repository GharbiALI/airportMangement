import { Flight } from "../../service/flight.service";
import { FlightResponse } from "./types";

export const mapToFlightResponse = (flight: Flight): FlightResponse => {
  return {
    departure: flight.departure ?? null,
    destination: flight.destination ?? null,
    departureTime: flight.departureTime ?? null,
    arrivalTime: flight.arrivalTime ?? null,
    status: flight.status ?? null,
  };
};

export const mapToFlightList = (flights: Flight[]): FlightResponse[] => {
  return flights.map((flight) => mapToFlightResponse(flight));
};
