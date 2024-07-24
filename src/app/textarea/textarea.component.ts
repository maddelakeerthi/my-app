import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  text:string="";
  max:number=400;
 charactercount:number=0;
 click(){
  this.charactercount=this.text.length;
}
 
  constructor() { 
  
  
  
  }
  ngOnInit(): void {
  }
 

}
