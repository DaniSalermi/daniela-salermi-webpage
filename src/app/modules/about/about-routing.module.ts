import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutIndexComponent } from "./about-index/about-index.component";

const routes: Routes = [
  {
    path: "",
    component: AboutIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
