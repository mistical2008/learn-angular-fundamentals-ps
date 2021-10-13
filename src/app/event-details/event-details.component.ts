import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../events-list/shared/events.service";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .event-image {
        max-height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventsService.getEventById(
      +this.route.snapshot.params["id"]
    );
  }
}
