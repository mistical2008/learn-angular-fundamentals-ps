import { EventEmitter, Component, Input, OnInit, Output } from "@angular/core";
import { IEvent } from "../events-list";

@Component({
  selector: "app-event",
  template: `
    <div [routerLink]="['/events', event.id]">
      <div class="well hoverwell thumbnail">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div [ngSwitch]="event?.time">
          Time: {{ event?.time }}
          <span [ngClass]="getEarliyStartClasses()" *ngSwitchCase="'8:00 am'"
            >(Early start)</span
          >
          <span *ngSwitchCase="'9:00 am'">(Normal start)</span>
          <span *ngSwitchDefault="'10:00 am'">(Late start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div [hidden]="!event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left"
            >{{ event?.location?.city }}, {{ event?.location?.country }}</span
          >
        </div>
        <div *ngIf="event?.onlineUrl">Online url: {{ event?.onlineUrl }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #009900;
      }
      .bold {
        font-weight: 800;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well {
        color: #bbb;
      }
    `,
  ],
})
export class EventComponent implements OnInit {
  @Input() event: IEvent;

  constructor() {}

  ngOnInit(): void {}
  getEarliyStartClasses() {
    if (this.event?.time === "8:00 am") {
      return ["green", "bold"];
    }
    return [];
  }
}
