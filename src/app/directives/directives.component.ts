import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public ages:number[]=[10,20,30,40,50];

  public states:string[]=['Telangana','Andhra','Kerla','Tamilnadu'];

  public products:any=[
    {name:'pen', price:20 , rating:3},
    {name:'phone', price:20000 , rating:4},
    {name:'shirt', price:3000 , rating:5},
    {name:'laptop', price:50000, rating:2},
    
  ]
  public companies:any=[
    {name:'a',company:"Tcs",exp:'3'},
    {name:'b',company:"wipro",exp:'4'},
    {name:'c',company:"capgemini",exp:'5'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
