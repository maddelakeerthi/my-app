import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles: any = [];
  public term: string = "";
  public page: number = 1;
  public colum: string = "";
  public order: string = "";

  constructor(private _vehicleService: VehicleService,private _router:Router) {
    this._vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  filter() {
    this._vehicleService.searchVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        console.log("Internal error");
      }
    )
  }

  pagination() {
    this._vehicleService.getVehiclesByPage(this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        console.log("Internal error");
      }
    )
  }

  sort() {
    this._vehicleService.sortVehicles(this.colum, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        console.log("Internal error");
      }
    )
  }

  delete(id: string) {
    this._vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert("delete");
        location.reload();
      },
      (err: any) => {
        alert("Internal error");
      }
    )
  }

  view(id:string){
    this._router.navigateByUrl('/dashboard/vehicle-details/'+id);

  }
  edit(id:string){
    this._router.navigateByUrl('/dashboard/editvehicle/'+id



























      
    );
  }

  


  ngOnInit(): void { }
}
