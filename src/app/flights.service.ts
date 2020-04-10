import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
     {origin: "Miami", destination: 'Chicago', flightNumber: 345,
     depart: new Date('2020-02-25T23:18:21.932Z'),
     arrive: new Date('2020-02-25T23:21:21.932Z'), nonstop: true}, 
     {origin: "New York", destination: 'Los Angeles', flightNumber: 432,
     depart: new Date('2020-05-25T23:18:00.932Z'),  
     arrive: new Date('2020-05-25T23:23:21.932Z'), nonstop: false}, 
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

