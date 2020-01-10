import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeIndexComponent } from "./home-index/home-index.component";
import { HowIDoItComponent } from "./how-i-do-it/how-i-do-it.component";
import { RecentWorksComponent } from "./recent-works/recent-works.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [HomeIndexComponent, HowIDoItComponent, RecentWorksComponent],
  imports: [CommonModule, HomeRoutingModule, ReusableModule]
})
export class HomeModule {}
