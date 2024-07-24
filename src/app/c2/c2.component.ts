import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  public todo:any="";

  constructor(private _sibling:SiblingService) {
    _sibling.getValue().subscribe(
      (data:any)=>{
        this.todo=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
