import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch:"full",
        redirectTo: "containers",
      },
      {
        path: "containers",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/containers/containers.module").then(
            (m) => m.ContainersModule
          ),
      },
      {
        path: "book",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/request-move/request-move.module").then(
            (m) => m.RequestMoveModule
          ),
      },
      {
        path: 'payment',
        pathMatch: 'full',
        loadChildren: () =>
          import("../../modules/payment-process/payment-process.module").then(
            (m) => m.PaymentProcessModule
        )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
