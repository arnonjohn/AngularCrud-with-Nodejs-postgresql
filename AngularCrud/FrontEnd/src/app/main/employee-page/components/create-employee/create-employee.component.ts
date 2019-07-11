import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/main/services/crud.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup
  edata: any = [];
  constructor(private fb: FormBuilder, private serv: CrudService) { }

  initComponent() {
    this.employeeForm = this.fb.group({
      "ename": [""],
      "edesignation": [""],
      "esalary": [""],
      "eemail": [""],
      "ephone": [""]
    })
  }
  eSubmit() {

    this.serv.createEmployee(
      this.employeeForm.value.ename,
      this.employeeForm.value.edesignation,
      this.employeeForm.value.esalary,
      this.employeeForm.value.eemail,
      this.employeeForm.value.ephone
    ).subscribe(data => {

    })
  }

  ngOnInit() {
    this.initComponent();
  }

}
