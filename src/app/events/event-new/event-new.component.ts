import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-event-new",
  templateUrl: "./event-new.component.html",
  styles: [],
})
export class EventNewComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(["/events"]);
  }
}
