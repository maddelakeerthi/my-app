import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {

  private child1: any[] = [];
  private child1Sub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private child2: any;
  private child2Sub: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  // Methods for child1
  setChild1(child1: any) {
    this.child1.push(child1);
    this.child1Sub.next(this.child1);
  }

  getChild1() {
    return this.child1Sub.asObservable();
  }

  // Methods for child2
  setChild2(child2: any) {
    this.child2 = child2;
    this.child2Sub.next(this.child2);
  }

  getChild2() {
    return this.child2Sub.asObservable();
  }
}


