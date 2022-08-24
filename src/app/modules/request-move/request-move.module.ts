import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestMoveComponent } from './request-move.component';
import { DateSearchComponent } from './components/date-search/date-search.component';
import { CompanyTerminalComponent } from './components/company-terminal/company-terminal.component';
import { TableComponent } from './components/table/table.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestMoveComponent,
    DateSearchComponent,
    CompanyTerminalComponent,
    TableComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class RequestMoveModule { }
