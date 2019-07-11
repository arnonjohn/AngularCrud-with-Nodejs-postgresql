import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule, FormsModule, ReactiveFormsModule,
    MatTableModule, MatMenuModule, MatIconModule, MatDialogModule,
    MatButtonModule
  ],
  exports: [FormsModule, ReactiveFormsModule,
    MatTableModule, MatMenuModule, MatIconModule, MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
