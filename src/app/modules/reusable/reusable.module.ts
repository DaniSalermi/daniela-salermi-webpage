import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { RrssBarComponent } from "./rrss-bar/rrss-bar.component";
import { WorkCardComponent } from "./work-card/work-card.component";
import { WorkCardLargeComponent } from "./work-card-large/work-card-large.component";
import { WorkGalleryComponent } from "./work-gallery/work-gallery.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RrssBarComponent,
    WorkCardComponent,
    WorkCardLargeComponent,
    WorkGalleryComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    RrssBarComponent,
    WorkCardComponent,
    WorkCardLargeComponent,
    WorkGalleryComponent,
    MenuComponent
  ]
})
export class ReusableModule {}
