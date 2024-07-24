import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  public cartCount:number=0;

  constructor(private _common1Service:Common1Service) {
    _common1Service.getValue().subscribe(
      (data:any)=>{
       this.cartCount=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
