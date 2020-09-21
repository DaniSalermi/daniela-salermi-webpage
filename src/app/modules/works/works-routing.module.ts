import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorksIndexComponent } from "./works-index/works-index.component";
import { WorksDetailComponent } from "./works-detail/works-detail.component";
import { BattleshipComponent } from "./battleship/battleship.component";
import { BurgerqueenComponent } from "./burgerqueen/burgerqueen.component";

const routes: Routes = [
  {
    path: "",
    component: WorksIndexComponent,
  },
  {
    path: "battlezombie",
    component: BattleshipComponent,
  },
  {
    path: "superhambu",
    component: BurgerqueenComponent,
  },
  {
    path: ":projectName",
    component: WorksDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
