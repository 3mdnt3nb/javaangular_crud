
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { EmployeelistComponent } from '../components/employeelist/employeelist.component';
import { PageNotFoundComponentComponent } from '../components/page-not-found-component/page-not-found-component.component';
import { UpdatingEmployessComponent } from '../components/updating-employess/updating-employess.component';
import { ViewdetailsComponent } from '../components/viewdetails/viewdetails.component';




const routes:Routes=[
  {path:"",redirectTo:"/allemployees",pathMatch:'full'},
  {path:'allemployees',component:EmployeelistComponent},
  {path:"create",component:CreateEmployeeComponent},
   {path: 'update/:id', component: UpdatingEmployessComponent},

   {path: 'viewdetails/:id', component: ViewdetailsComponent},
  
  {path:"**",component:PageNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[EmployeelistComponent,PageNotFoundComponentComponent,CreateEmployeeComponent,UpdatingEmployessComponent,ViewdetailsComponent];