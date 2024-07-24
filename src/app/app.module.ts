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
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { Product1Component } from './product1/product1.component';
import { Nav1Component } from './nav1/nav1.component';
import { Cart1Component } from './cart1/cart1.component';
import { RatingComponent } from './rating/rating.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ToDoComponent } from './to-do/to-do.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { WeDoComponent } from './we-do/we-do.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ResultComponent } from './result/result.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { OperatorComponent } from './operator/operator.component';
import { VehiclecomponentComponent } from './vehiclecomponent/vehiclecomponent.component';



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
    ProductsComponent,
    CartComponent,
    NavComponent,
    Product1Component,
    Nav1Component,
    Cart1Component,
    RatingComponent,
    TextareaComponent,
    ToDoComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    WeDoComponent,
    C1Component,
    C2Component,
    C3Component,
    Calculator2Component,
    ResultComponent,
    CalculatorsComponent,
    OperatorComponent,
    VehiclecomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
