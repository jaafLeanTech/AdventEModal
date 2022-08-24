import { Routes, RouterModule} from '@angular/router';
import { LoginLayoutComponent } from "./layouts/login-layout/login-layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/main-layout/main-layout.module").then(
        (m) => m.MainLayoutModule
      ),
  },
  {
    path: "",
    component: LoginLayoutComponent,
  }
];

export const Routing = RouterModule.forRoot(routes);
