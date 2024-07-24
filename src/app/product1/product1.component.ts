import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor(private  _common1Service:Common1Service) { }

  ngOnInit(): void {
  }
add(){
  this._common1Service.setValue();
}
}
