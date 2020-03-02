import { Injectable, OnInit } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }


  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3002/flights/');
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {
    
  }

}

