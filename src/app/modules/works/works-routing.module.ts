import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorksIndexComponent } from "./works-index/works-index.component";

const routes: Routes = [
  {
    path: "",
    component: WorksIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
