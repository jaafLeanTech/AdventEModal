import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentProcessRoutingModule } from './payment-process-routing.module';
import { PaymentProcessComponent } from './payment-process.component';
import { TableComponent } from './components/table/table.component';
import { MycardTableComponent } from './components/mycard-table/mycard-table.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentProcessComponent,
    TableComponent,
    MycardTableComponent,
    PaymentInfoComponent
  ],
  imports: [
    CommonModule,
    PaymentProcessRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class PaymentProcessModule { }
