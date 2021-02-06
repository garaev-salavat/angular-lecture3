import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempviewComponent } from './tempview.component';
import { FormsModule } from '@angular/forms';
import { Tempview1Component } from './tempview1.component';
import { Tempview2Component } from './tempview2/tempview2.component';
import { Tempview3Component } from './tempview3/tempview3.component';



@NgModule({
  declarations: [TempviewComponent, Tempview1Component, Tempview2Component, Tempview3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TempviewComponent, Tempview1Component]
})
export class TempviewModule { }
