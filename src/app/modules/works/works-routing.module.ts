import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorksIndexComponent } from "./works-index/works-index.component";
import { WorksDetailComponent } from "./works-detail/works-detail.component";

const routes: Routes = [
  {
    path: "",
    component: WorksIndexComponent
  },
  {
    path: ":nameProject",
    component: WorksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
