import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
  selector: "app-works-detail",
  templateUrl: "./works-detail.component.html",
  styleUrls: ["./works-detail.component.scss"],
})
export class WorksDetailComponent implements OnInit {
  projectData: any = {};
  projectName: string;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get("projectName");
      this.getProject();
      console.log(this.projectName);
    });
  }

  getProject() {
    this.projectsService.getProject(this.projectName).subscribe((project) => {
      this.projectData = project;
      console.log(this.projectData);
    });
  }
}
