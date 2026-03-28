export interface AirplaneResponse {
  model: string;
  status: string;
  currentLocation: string;
}

export interface AirlineResponse {
  name: string;
  country: string;
}

export interface FlightResponse {
  departure: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  status: string;
}

export interface TicketResponse {

  seatNumber: string;
  price: number;
  status: string;
}
export interface PassengerResponse {
  firstName: string;
  lastName: string;
  email: string;
  passportNumber: string;
}
