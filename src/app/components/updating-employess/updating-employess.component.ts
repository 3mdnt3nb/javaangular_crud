import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../class/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
    selector: 'app-updating-employess',
    templateUrl: './updating-employess.component.html',
    styleUrl: './updating-employess.component.css',
 
})
export class UpdatingEmployessComponent implements OnInit {
  
  id:number;
  update:Employee =new Employee();

  constructor(private employeeService : EmployeeService, private activateroute:ActivatedRoute, private r:Router){}


ngOnInit(){
  // this will get id from the route  
  this.id=this.activateroute.snapshot.params['id'];

  this.employeeService.getEmployeeById(this.id).subscribe( (data)=>{
   this.update=data;
  },
  error=>console.log(error)

  );
}


onSubmit() {
  this.employeeService.updateEmployee(this.id,this.update).subscribe( (data)=>{
        this.gotoViewAll();
  })

}

gotoViewAll(){
  this.r.navigate(['/allemployees']);

 }

}
