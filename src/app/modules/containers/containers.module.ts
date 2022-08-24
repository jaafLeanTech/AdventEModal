import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { PagerComponent } from './components/pager/pager.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContainersComponent,
    SearchComponent,
    TableComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class ContainersModule { }
