import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { OperationsComponent } from './operations/operations.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventsComponent } from './events/events.component';
import { StudentsComponent } from './students/students.component';
import { CarComponent } from './car/car.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { SmartShoppingComponent } from './smart-shopping/smart-shopping.component';
import { DiceComponent } from './dice/dice.component';
import{ HttpClientModule} from '@angular/common/http';
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
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    DashbordComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    OperationsComponent,
    DirectivesComponent,
    EventsComponent,
    StudentsComponent,
    CarComponent,
    PipesComponent,
    BalancePipe,
    SmartShoppingComponent,
    DiceComponent,
    BankComponent,
    FlipkartComponent,
    MailsComponent,
    VehicleComponent,
    CreateVehicleComponent,
    CreateAccountsComponent,
    CreateUserComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    VehicleDetailsComponent,
    BankDetailsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
