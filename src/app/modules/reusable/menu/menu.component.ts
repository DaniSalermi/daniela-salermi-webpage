import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menuActive = false;

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.menu.getMenu().subscribe(menuActive => (this.menuActive = menuActive));
  }

  closeMenu() {
    this.menu.toggleMenu();
  }
}
