import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';

@NgModule({
  declarations: [RouterOutletComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
