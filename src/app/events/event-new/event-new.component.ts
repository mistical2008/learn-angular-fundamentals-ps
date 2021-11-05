import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventsService } from "../events-list";
import { IEvent } from "../events-list/shared/event.model";

@Component({
  selector: "app-event-new",
  templateUrl: "./event-new.component.html",
  styles: [
    `
      .error em {
        color: #e05c65;
        float: right;
        padding-left: 10px;
      }
      .error input {
        background-color: #e05c65;
      }
      .error :placeholer {
        color: #ffffff;
      }
      .error ::webkit-input-placeholder {
        color: #ffffff;
      }
      .error ::moz-placeholder {
        color: #ffffff;
      }
      .error :moz-placeholder {
        color: #ffffff;
      }
      .error :ms-input-placeholder {
        color: #ffffff;
      }
    `,
  ],
})
export class EventNewComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(private router: Router, private eventsService: EventsService) {}

  ngOnInit(): void {}

  saveEvent(formValues: IEvent): void {
    this.eventsService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
  }

  cancel(): void {
    this.router.navigate(["/events"]);
  }
}
