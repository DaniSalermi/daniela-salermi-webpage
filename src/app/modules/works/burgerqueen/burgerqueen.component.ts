import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
  selector: "app-burgerqueen",
  templateUrl: "./burgerqueen.component.html",
  styleUrls: ["./burgerqueen.component.scss"],
})
export class BurgerqueenComponent implements OnInit {
  projectData: any = {};

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.projectsService.getProject("1").subscribe((project) => {
      this.projectData = project;
      console.log(this.projectData);
    });
  }
}
