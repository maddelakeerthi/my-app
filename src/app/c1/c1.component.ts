import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  public form1:FormGroup=new FormGroup({
    task:new FormControl(),
    date:new FormControl()
  })

  constructor(private _sibling:SiblingService) { }

  ngOnInit(): void {
  }
  create(){
    this._sibling.setValue(this.form1);
  }

}
