import { Flight } from "../../service/flight.service";
import { mapToFlightResponse, mapToFlightList } from "./flight.mappers";
import { FlightResponse } from "./types";

test("should map flight data correctly", () => {
  // given
  const mockFlight: Flight = {
    airplaneId: "plane_abc",
    departure: "TUN",
    destination: "PAR",
    departureTime: new Date("2026-03-26T10:00:00Z"),
    arrivalTime: new Date("2026-03-26T12:30:00Z"),
    status: "scheduled"
  };

  // when
  const result: FlightResponse = mapToFlightResponse(mockFlight);

  // then
  expect(result.departure).toBe(mockFlight.departure);
  expect(result.destination).toBe(mockFlight.destination);
  expect(result.arrivalTime).toBe(mockFlight.arrivalTime);
});

test("should map flight data correctly when object is empty", () => {
  // given
  const mockFlight: Flight = {} as Flight;

  // when
  const result: FlightResponse = mapToFlightResponse(mockFlight);

  // then
  expect(result.departure).toBe(null);
  expect(result.status).toBe(null);
});