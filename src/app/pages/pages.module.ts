// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
