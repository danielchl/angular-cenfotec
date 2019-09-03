import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    component: ParentComponent,
    children: [{ path: "", component: ListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}