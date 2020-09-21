import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
  selector: "app-recent-works",
  templateUrl: "./recent-works.component.html",
  styleUrls: ["./recent-works.component.scss"],
})
export class RecentWorksComponent implements OnInit {
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
