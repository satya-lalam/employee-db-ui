import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] =[];

  constructor(private employeeService: EmployeeService) { 
    
  }
  ngOnInit() { 
    this.employeeService.getEmployees()
    .subscribe(response =>{
      Object.assign(this.employees,response); 
    })
  }

  employeeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl()
  })

  onSubmit(formValue){
    this.employeeService.persistEmployee(formValue)
    .subscribe(response =>{
      this.employees.splice(0,0,<Employee>response);
      this.employeeForm.reset();
    })
  }

  deleteEmployee(employee){
    this.employeeService.deleteEmployee(employee)
    .subscribe(response => {
      let index = this.employees.indexOf(employee);
      this.employees.splice(index,1)
    })
  }



}

export interface Employee {
  firstName: string;
  lastName: number;
  email: number;
  mobile: string;
}
