import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePageRoutingModule } from './employee-page-routing.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { SharedModule } from '../shared/shared.module';
import { DisplayEmployeeListComponent } from './components/display-employee-list/display-employee-list.component';
import { EditEmployeeListComponent } from './components/edit-employee-list/edit-employee-list.component'

@NgModule({
  declarations: [CreateEmployeeComponent, DisplayEmployeeListComponent, EditEmployeeListComponent],
  entryComponents:[EditEmployeeListComponent],
  imports: [
    CommonModule,
    EmployeePageRoutingModule,
    SharedModule
  ]
})
export class EmployeePageModule { }
