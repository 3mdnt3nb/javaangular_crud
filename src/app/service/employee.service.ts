import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url="http://localhost:8080/api/v1";
  constructor(private httc:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    return this.httc.get<Employee[]>(`${this._url}`+'/getall');

  }
  createEmployee(employee:Employee):Observable<any>{
       return this.httc.post(`${this._url}`+'/create',employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httc.get<Employee>(`${this._url}`+'/getbyId/'+id);
  }

  updateEmployee(id:number, emp:Employee):Observable<Employee>{
    return this.httc.put<Employee>(`${this._url}`+'/update/'+id,emp);
  }


  deleteById(id:number):Observable<Employee>{
    return this.httc.delete<Employee>(`${this._url}`+'/delete/'+id);
  }
}
