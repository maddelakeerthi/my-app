import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public names:string[]=[];
  public name:string='';

  constructor() { }

  ngOnInit(): void {
  }
 register(){
  this.names.push(this.name);
  this.name="";
 }
 delete(i:number){
  this.names.splice(i,1);
 }
 deletelast(){
  this.names.pop();
 }
 deleteall(){
  this.names.pop();
 }
 ascending(){
  this.names.sort();
 }
 descending(){
  this.names.sort().reverse();
 }
 salutation(){
  this.names=this.names.map(name=>"mr."+name);
 }
}
