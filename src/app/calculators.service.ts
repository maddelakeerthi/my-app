import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsService {
 
  public sumSub:BehaviorSubject<any>=new BehaviorSubject(null);

  constructor() { }
  setValue(data:any){
    this.sumSub.next(data);
  }
  getValue(){
    return this.sumSub;
  }
}
