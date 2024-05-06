import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../class/employee';
import { EmployeeService } from '../../service/employee.service';
// import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
//   standalone: true,
//   imports: [MatProgressBarModule],
})
export class EmployeelistComponent implements OnInit{

   allemp:Employee[];
   deleting: Employee;

   constructor(public employeeService:EmployeeService, private router:Router){};

  ngOnInit():void {
  //   this.allemp=[{
  //     "id":1,
  //     "firstname":"Prajwal",
  //     "lastname":"kalaiah",
  //     "email":"prajwal@gmail.com"
  //   },
  //    {
  //     "id":2,
  //     "firstname":"bbb",
  //     "lastname":"bb@gmail.com",
  //     "email":"bb@gmail.com"
  //    }, 
  //     {
  //       "id":3,
  //       "firstname":"aaa",
  //       "lastname":"aa@gmail.com",
  //       "email":"aa@gmail.com"
  //     }
  // ]
     this.getEmployees();

     }


     private getEmployees(){
      this.employeeService.getAllEmployee().subscribe((allempdata:Employee[])=>{
      this.allemp=allempdata;
   });

}

     // from button of update
     updateEmployee(id:number){
          this.router.navigate(['update',id]);
     }

     deleteEmployee(id:number){
      // this.router.navigate(['delete',id]);
      this.employeeService.deleteById(id).subscribe(  (data)=>{
         this.getEmployees();
      },  
      // error=>console.log("error says that   "+error)
      )
     }

     viewEmployee(id:number){
         this.router.navigate(['viewdetails',id]);
     }


  


 
  
  

}
