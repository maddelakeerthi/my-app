import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { count } from 'rxjs';
import { Common2Service } from '../common2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 public childForm:FormGroup=new FormGroup({
  task:new FormControl(),
  date:new FormControl()
 })

  constructor(private _common2:Common2Service) {
  }
  ngOnInit(): void {
  }
create(){
  console.log(this.childForm.value);
  this._common2.setChild1(this.childForm.value);
}
submit(){
  console.log(this.childForm);
}
}
