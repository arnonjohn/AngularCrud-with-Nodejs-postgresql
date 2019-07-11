import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/main/services/crud.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-display-employee-list',
  templateUrl: './display-employee-list.component.html',
  styleUrls: ['./display-employee-list.component.scss']
})
export class DisplayEmployeeListComponent implements OnInit {
  empList: any = [];
  eList: any = [];
  message: string;
  displayedColumns: string[] = ['ename', 'edesignation', 'esalary', 'eemail', 'ephone', 'actions'];
  constructor(
    private serv: CrudService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEmpList();
  }

  getEmpList() {
    this.serv.getEmpDetails().subscribe(data => {
      this.empList = data;
    })
  }

  openDialog(editEmp, eid: number) {
    debugger
    this.serv.getEmpDetailsById(eid).subscribe(data => {
      this.eList = data[0];
      console.log(this.eList)
    });
    this.dialog.open(editEmp, { width: '250px' });
  }

  updateEmp() {
    this.serv.updateEmpList(this.eList).subscribe(data => {
      if (data[0].message = 'updated sucess') {
        this.getEmpList();
      }

    })
  }

  deleteEmplistbyId(eid: any) {
    this.serv.deleteEmplistbyid(eid).subscribe(data => {
      this.getEmpList();
    })

  }



}