import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../class/employee';
import { EmployeeService } from '../../service/employee.service';

import {MatDialogModule} from '@angular/material/dialog';

@Component({
    selector: 'app-viewdetails',
    templateUrl: './viewdetails.component.html',
    styleUrl: './viewdetails.component.css',
    
})
export class ViewdetailsComponent implements OnInit {
  
  vid:number;
  viewdetails:Employee;
  constructor(private activateRoute:ActivatedRoute,private employeeservice:EmployeeService){}




  ngOnInit(){
    this.vid=this.activateRoute.snapshot.params['id'];
    this.viewdetails= new Employee();

    this.employeeservice.getEmployeeById(this.vid).subscribe(  (data)=>{

      this.viewdetails=data;
    })
  }

}
