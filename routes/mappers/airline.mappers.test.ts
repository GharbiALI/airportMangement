import { Airline } from "../../service/airline.services";
import { mapToAirlineResponse, mapToAirlineList } from "./airline.mappers";
import { AirlineResponse } from "./types";

test("should map airline data correctly", () => {
  // given
  const mockAirline: Airline = {
    name: "Tunisair",
    country: "Tunisia",
  };

  // when
  const result: AirlineResponse = mapToAirlineResponse(mockAirline);

  // then
  expect(result.name).toBe(mockAirline.name);
  expect(result.country).toBe(mockAirline.country);
});

test("should map all airline data correctly", () => {
  // given
  const mockAirlines: any[] = [
    { name: "Tunisair", country: "Tunisia" },
    { name: "Air France", country: "France" },
  ];

  // when
  const result: AirlineResponse[] = mapToAirlineList(mockAirlines);

  // then
  expect(result[0].name).toBe(mockAirlines[0].name);
  expect(result[1].name).toBe(mockAirlines[1].name);
});

test("should return empty array when list is empty", () => {
  // given
  const mockAirlines: Airline[] = [];

  // when
  const result: AirlineResponse[] = mapToAirlineList(mockAirlines);

  // then
  expect(result).toStrictEqual([]);
});

test("should map airline data correctly when object is empty", () => {
  // given
  const mockAirline: Airline = {} as Airline;

  // when
  const result: AirlineResponse = mapToAirlineResponse(mockAirline);

  // then
  expect(result.name).toBe(null);
  expect(result.country).toBe(null);
});