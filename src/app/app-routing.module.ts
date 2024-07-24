import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './loging/loging.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HammerModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventsComponent } from './events/events.component';
import { StudentsComponent } from './students/students.component';
import { CarComponent } from './car/car.component';
import { PipesComponent } from './pipes/pipes.component';
import { SmartShoppingComponent } from './smart-shopping/smart-shopping.component';
import { DiceComponent } from './dice/dice.component';

import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailsComponent } from './mails/mails.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WeDoComponent } from './we-do/we-do.component';
import { Calculator2Component } from './calculator2/calculator2.component';


const routes: Routes = [
  {path:'login',component:LogingComponent},
    {path:'dashboard',component:DashbordComponent, children:[
        {path:'welcome',component:WelcomeComponent},
        {path:'home',component:HomeComponent},
        {path:'data-binding',component:DatabindingComponent},
        {path:'calculator',component:CalculatorComponent},
        {path:'rectangle',component:RectangleComponent},
        {path:'circle',component:CircleComponent},
        {path:'bmi',component:BmiComponent},
        {path:'directives',component:DirectivesComponent},
        {path:'events',component:EventsComponent},
        {path:'students',component:StudentsComponent},
        {path:'car',component:CarComponent},
        {path:'pipes',component:PipesComponent},
        {path:'smart-shopping',component:SmartShoppingComponent},
        {path:'dice',component:DiceComponent},
       {path:'vehicle',component:VehicleComponent},
        {path:'bank',component:BankComponent},
        {path:'flipkart',component:FlipkartComponent},
        {path:'mails',component:MailsComponent},
        {path:'create-vehicle',component:CreateVehicleComponent},
        {path:'createaccount',component:CreateAccountsComponent},
        {path:'create-user',component:CreateUserComponent},
        {path:'create-employee',component:CreateEmployeeComponent},
        {path:'vehicle-details/:id',component:VehicleDetailsComponent},
        {path:'bank-details/:id',component:BankDetailsComponent},
        {path:'editvehicle/:id',component:CreateVehicleComponent},
        {path:'parent',component:ParentComponent},
        {path:"product",component:ProductsComponent},
        {path:'nav',component:NavComponent},
        {path:'cart',component:CartComponent},
        {path:"product1",component:ProductsComponent},
        {path:'nav1',component:NavComponent},
        {path:'cart1',component:CartComponent},
        {path:'text',component:TextareaComponent},
        {path:'about-company',component:AboutCompanyComponent},
        {
          path: 'payments',
          loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
        },
        {path:'list',component:ToDoComponent},
        {path:'we-do',component:WeDoComponent},
        {path:'calculator2',component:Calculator2Component}
        
    

    ]},
    {path:'',component:LogingComponent},
    {path:'**',component: PagenotfoundComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
