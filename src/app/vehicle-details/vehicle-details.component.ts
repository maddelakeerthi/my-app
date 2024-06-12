import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  //public vehicle:any={"Vehicle": "BMW Spyder","manufacturer": "Maserati","model": "Sentra","type": "Hatchback","fuel": "Gasoline","color": "lime","image": "https://loremflickr.com/640/480/food","cost": "954.00","id": "6"}
  public vehicle:any={};

  constructor(private _activatedRoute:ActivatedRoute,private _vehicleservice:VehicleService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{

        _vehicleservice.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
