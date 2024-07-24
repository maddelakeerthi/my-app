import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../common2.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public child2: any[] = [];

  constructor(private _common2Service: Common2Service) {
    _common2Service.getChild1().subscribe(
      (data: any[]) => {
        this.child2 = data;
      }
    );
  }

  ngOnInit(): void {}

  view(index: number) {
    this._common2Service.setChild2(this.child2[index]);
  }

  delete(index: number) {
    this.child2.splice(index, 1);
    // Update the service with the new list
    this._common2Service.setChild1(this.child2);
  }
}

