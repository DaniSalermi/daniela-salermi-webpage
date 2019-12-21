import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "works",
    loadChildren: () =>
      import("./modules/works/works.module").then(mod => mod.WorksModule)
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then(mod => mod.AboutModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact/contact.module").then(mod => mod.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
