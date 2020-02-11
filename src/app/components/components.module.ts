// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class ComponentsModule { }
