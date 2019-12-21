import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { RrssBarComponent } from "./rrss-bar/rrss-bar.component";
import { WorkCardComponent } from "./work-card/work-card.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RrssBarComponent,
    WorkCardComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    RrssBarComponent,
    WorkCardComponent
  ]
})
export class ReusableModule {}
