import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bankservice.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  public Banks:any={};

  constructor(private _activatedRoute:ActivatedRoute,private bankService: BankService ) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
      this.bankService.getBanks(data.id).subscribe(
       (data:any)=>{
       this.Banks=data;
        }
      )
      
      }
    )

   }

  ngOnInit(): void {
  }

}
