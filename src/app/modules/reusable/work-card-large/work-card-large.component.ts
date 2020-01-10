import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-work-card-large",
  templateUrl: "./work-card-large.component.html",
  styleUrls: ["./work-card-large.component.scss"]
})
export class WorkCardLargeComponent implements OnInit {
  @Input() title: string;
  @Input() projectName: string;
  @Input() projectType: string;
  @Input() imageURL: string;
  constructor() {}

  ngOnInit() {}
}
