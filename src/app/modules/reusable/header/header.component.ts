import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  menuActive = false;

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.menu.getMenu().subscribe(menuActive => (this.menuActive = menuActive));
  }

  toggleMenu() {
    this.menu.toggleMenu();
  }
}
