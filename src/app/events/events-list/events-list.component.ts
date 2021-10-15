import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "src/app/libs/toastr/toastr.service";

@Component({
  selector: "events-list",
  template: `
    <h1>Upcoming Angualr events list</h1>
    <hr />
    <div class="row">
      <app-event
        *ngFor="let event of events"
        [event]="event"
        class="col-md-5"
      ></app-event>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data["events"];
  }
}
