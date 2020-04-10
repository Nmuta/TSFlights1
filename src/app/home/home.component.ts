import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[];
  selectedOrigin: string;
  selectedDestination: string;
  filteredOriginList: any[];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getAllFlights().subscribe(data =>{
      let fullList = data.map((flight) => flight.origin);
      this.filteredOriginList = [ ...new Set(fullList)];
    })
  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data =>{
      this.flights = data;
    })
  }

}