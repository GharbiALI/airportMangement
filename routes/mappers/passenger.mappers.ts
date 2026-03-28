import { Passenger } from "../../service/passenger.service";
import { PassengerResponse } from "./types";

export const mapToPassengerResponse = (passenger: Passenger): PassengerResponse => {
  return {
    firstName: passenger.firstName ?? null,
    lastName: passenger.lastName ?? null,
    email: passenger.email ?? null,
    passportNumber: passenger.passportNumber ?? null,
  };
};

export const mapToPassengerList = (passengers: Passenger[]): PassengerResponse[] => {
  return passengers.map((p) => mapToPassengerResponse(p));
};