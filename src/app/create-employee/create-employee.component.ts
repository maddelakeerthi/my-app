import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    phone: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    experience: new FormGroup({
    company: new FormControl(),
     experience: new FormControl(),
     package: new FormControl(),
    }),
  });
  
  constructor() {

  }
  

  ngOnInit(): void {
  }

}
