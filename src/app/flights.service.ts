import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
     {origin: "Miami", destination: 'Chicago', flightNumber: 345,
     depart: '2020-02-25T23:18:21.932Z' as unknown as Date,
     arrive: '2020-02-25T23:21:21.932Z' as unknown as Date, nonstop: true}, 
     {origin: "New York", destination: 'Los Angeles', flightNumber: 432,
     depart: '2020-05-25T23:18:00.932Z' as unknown as Date,  
     arrive: '2020-05-25T23:23:21.932Z' as unknown as Date, nonstop: false}, 
     ];

  constructor() { }

  getFlights() {
    return this.flights;
     
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {
    
  }

}

