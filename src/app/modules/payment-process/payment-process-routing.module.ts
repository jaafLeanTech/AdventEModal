import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentProcessComponent } from './payment-process.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentProcessRoutingModule { }
