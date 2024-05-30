import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public age:number=20;
  public name:string='ABBCD';
  public isValid:boolean=true;
  public phone:string="+91"

  constructor() { }

  ngOnInit(): void {
  }

  upload(){
    alert("Upload Successfully")
  }
  send(){
    alert("Sending Success")
  }
  change(){
    alert("Data Changed")
  }
}
