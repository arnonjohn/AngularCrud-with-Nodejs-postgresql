import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DisplayEmployeeListComponent } from './components/display-employee-list/display-employee-list.component';

const routes: Routes = [
  { path: '', component: CreateEmployeeComponent },
  { path: 'emplist', component: DisplayEmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeePageRoutingModule { }
