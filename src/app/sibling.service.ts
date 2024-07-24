import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {
  public todolist:any=[];//array
  public todolistsub: BehaviorSubject<any>=new BehaviorSubject([]);


  constructor() { }

  setValue(data:any){
    this.todolist.push(data);
    this.todolistsub.next(this.todolist);
  }
  getValue(){
    return this.todolistsub
  }
}
