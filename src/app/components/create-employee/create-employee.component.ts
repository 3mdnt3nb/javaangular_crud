import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../class/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrl: './create-employee.component.css',

   
})
export class CreateEmployeeComponent implements OnInit {

  createemployee: Employee = new Employee();


  ngOnInit()  {
    
  }

  constructor(private employeeService:EmployeeService, private router:Router){}


onSubmit() { 
   console.log("data of employee  - "+this.createemployee);
   this.savingEmployee();
 }

 savingEmployee(){
    this.employeeService.createEmployee(this.createemployee).subscribe(data=>{
        console.log("data   " +data);
        this.gotoViewAll();
    },
    error => console.log(error)
    
    );
 }
  
 gotoViewAll(){
  this.router.navigate(['/allemployees']);

 }

}
