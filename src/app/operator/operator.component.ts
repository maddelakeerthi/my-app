import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculatorsComponent } from '../calculators/calculators.component';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  @Input() num1:any=null;
  @Input()  num2:any=null;
  result:any=null;
  clearIt:any=null;
  @Output() clear:EventEmitter<any>=new EventEmitter();



  constructor(private _calculatorsService: CalculatorsService) {}

  ngOnInit(): void {}
  sum(){
    this.result=this.num1+this.num2;
    this._calculatorsService.setValue(this.result);
    this.remove();
   
  }
  sub(){
    this.result=this.num1-this.num2;
    this._calculatorsService.setValue(this.result);
    this.remove();

  }
  mul(){
    this.result=this.num1*this.num2;
    this._calculatorsService.setValue(this.result);
    this.remove();
    
  }
  div(){
    this.result=this.num1/this.num2;
    this._calculatorsService.setValue(this.result);
    this.remove();
    
  }
  remove(){
    this.clear.emit(this.clearIt)
    this.remove();
  }
}