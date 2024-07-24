import { Component, OnInit } from '@angular/core';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {



  public  num1:any=null;
  public num2:any=null;

  constructor(private _calculatorsService:CalculatorsService) { }

  ngOnInit(): void {
  }
  catch(value:any){
 this.num1=value;
 this.num2=value;
  }
}


