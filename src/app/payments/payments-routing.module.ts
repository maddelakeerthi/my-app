import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { AboutCompanyComponent } from '../about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'upi',component:UpiComponent},
  {path:'card',component:CardComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
