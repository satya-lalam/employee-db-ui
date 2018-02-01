import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get("http://localhost:8080/employees");  
  }

  persistEmployee(employee){
    return this.http.post("http://localhost:8080/persistemployee",employee);
  }

  deleteEmployee(employee){
    
    return this.http.request("delete", "http://localhost:8080/employees", { body: employee });
  }

}
