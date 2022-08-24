import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMoveComponent } from './request-move.component';

const routes: Routes = [
  {
    path: "",
    component: RequestMoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
