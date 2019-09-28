import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ListComponent } from "./list/list.component";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "",
    component: ParentComponent,
    children: [
      { path: "list", component: ListComponent },
      { path: "details/:id", component: CustomerDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
