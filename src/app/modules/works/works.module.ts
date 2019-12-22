import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WorksRoutingModule } from "./works-routing.module";
import { WorksIndexComponent } from "./works-index/works-index.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [WorksIndexComponent],
  imports: [CommonModule, WorksRoutingModule, ReusableModule]
})
export class WorksModule {}
