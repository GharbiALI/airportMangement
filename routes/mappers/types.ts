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
  passengerId: string;
  flightId: string;
  seatNumber: string;
  price: number;
  status: string;
}
