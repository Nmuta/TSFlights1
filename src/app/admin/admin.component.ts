import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

 
  origin: string;
  destination: string;
  flightNumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean = false;
  flightList: any[];
  dynamicFlights: Flight[];

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
      this.dynamicFlights = data;
    })
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);
  }

  update(flight:Flight){
    console.log(`received request to make this the new origin:  ${flight.origin} 
    on this item in the database: ${flight.id} `);
  }

}
