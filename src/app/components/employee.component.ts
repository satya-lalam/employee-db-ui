import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() { }

  employeeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl()
  })

  onSubmit(formValue){
    console.log(formValue);
    this.http.post("http://localhost:8080/persistemployee",formValue).subscribe(responsejson =>{
      console.log(responsejson);
    })
  }

  displayedColumns = ['firstname', 'lastname', 'email', 'mobile'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  
];