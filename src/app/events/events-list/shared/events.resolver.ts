import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventsService } from "./events.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IEvent } from "./event.model";

@Injectable({
  providedIn: "root",
})
export class EventsResolver implements Resolve<IEvent[]> {
  constructor(private eventsService: EventsService) {}

  resolve(): Observable<IEvent[]> {
    return this.eventsService.getEvents().pipe(map((events) => events));
  }
}
