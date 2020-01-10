import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-work-card",
  templateUrl: "./work-card.component.html",
  styleUrls: ["./work-card.component.scss"]
})
export class WorkCardComponent implements OnInit {
  @Input() title: string;
  @Input() projectName: string;
  @Input() projectType: string;
  @Input() imageURL: string;
  constructor() {}

  ngOnInit() {}
}
