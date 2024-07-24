import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  
  constructor(private _calculator:CalculatorsService ) { }

  ngOnInit(): void {
  }
}