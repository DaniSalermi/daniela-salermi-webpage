import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
  selector: "app-works-index",
  templateUrl: "./works-index.component.html",
  styleUrls: ["./works-index.component.scss"],
})
export class WorksIndexComponent implements OnInit {
  projects: any = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe((items) => {
      this.projects = items;
      console.log(this.projects);
    });
  }
}
