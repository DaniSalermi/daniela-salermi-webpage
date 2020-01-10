import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WorksRoutingModule } from "./works-routing.module";
import { WorksIndexComponent } from "./works-index/works-index.component";
import { ReusableModule } from "../reusable/reusable.module";
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { BattleshipComponent } from './battleship/battleship.component';
import { BurgerqueenComponent } from './burgerqueen/burgerqueen.component';

@NgModule({
  declarations: [WorksIndexComponent, WorksDetailComponent, BattleshipComponent, BurgerqueenComponent],
  imports: [CommonModule, WorksRoutingModule, ReusableModule]
})
export class WorksModule {}
