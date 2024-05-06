import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CreateEmployeeComponent } from "./components/create-employee/create-employee.component";
import { EmployeelistComponent } from "./components/employeelist/employeelist.component";
import { PageNotFoundComponentComponent } from "./components/page-not-found-component/page-not-found-component.component";
import { AppRoutingModule, routingComponents } from "./Routing/app-routing.module";
import { UpdatingEmployessComponent } from './components/updating-employess/updating-employess.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Dialog, DialogModule, DialogRef} from '@angular/cdk/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    routingComponents,
    PageNotFoundComponentComponent,
    CreateEmployeeComponent,
    UpdatingEmployessComponent,
    ViewdetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    DialogModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
