import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../common2.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  public child3: any = null;

  constructor(private _common2Service: Common2Service) {
    _common2Service.getChild2().subscribe(
      (data: any) => {
        this.child3 = data;
      }
    );
  }

  ngOnInit(): void {}
}

