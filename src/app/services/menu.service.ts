import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  menu = {
    active: false
  };
  menuSender: Observable<any>;
  private menuSubject = new Subject<any>();

  constructor() {
    this.menuSender = this.menuSubject.asObservable();
    this.menuSubject.next(false);
  }

  toggleMenu() {
    this.menu.active = !this.menu.active;
    this.menuSubject.next(this.menu.active);
  }

  getMenu() {
    return this.menuSender;
  }
}
