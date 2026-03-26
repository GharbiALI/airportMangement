import { Airplane } from "../../service/airplane.service";
import { mapToAirplaneResponse,mapToAirplaneList } from "./aiplane.mappers";
import { AirplaneResponse } from "./types";

test("should map airplane data correctly", () => {
  // given
  const mockAirplane: Airplane = {
    model: "Boeing 747",
    airlineId: "airline_123",
    status: "active",
    currentLocation: "TUN",
    capacity: 300,
  } ;

  // when
  const result: AirplaneResponse = mapToAirplaneResponse(mockAirplane);

  // then
  expect(result.model).toBe(mockAirplane.model);
  expect(result.status).toBe(mockAirplane.status);
  expect(result.currentLocation).toBe(mockAirplane.currentLocation);
});

test("should map all airplane data correctly", () => {
  // given
  const mockAirplanes: any[] = [
    {
      model: "Airbus A320",
      status: "active",
      currentLocation: "TUN",
    },
    {
      model: "Cessna 172",
      status: "maintenance",
      currentLocation: "DJE",
    },
  ];

  // when
  const result: AirplaneResponse[] = mapToAirplaneList(mockAirplanes);

  // then
  expect(result[0].model).toBe(mockAirplanes[0].model);
  expect(result[0].currentLocation).toBe(mockAirplanes[0].currentLocation);
  expect(result[1].model).toBe(mockAirplanes[1].model);
  expect(result[1].currentLocation).toBe(mockAirplanes[1].currentLocation);
});

test("should return empty array when list is empty", () => {
  // given
  const mockAirplanes: Airplane[] = [];

  // when
  const result: AirplaneResponse[] = mapToAirplaneList(mockAirplanes);

  // then
  expect(result).toStrictEqual([]);
});

test("should map airplane data correctly when object is empty", () => {
  // given
  const mockAirplane: Airplane = {} as Airplane;

  // when
  const result: AirplaneResponse = mapToAirplaneResponse(mockAirplane);

  // then
  expect(result.model).toBe(null);
  expect(result.status).toBe(null);
  expect(result.currentLocation).toBe(null);
});