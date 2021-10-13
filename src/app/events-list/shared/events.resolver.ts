import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventsService } from "./events.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventsResolver implements Resolve<boolean> {
  constructor(private eventsService: EventsService) {}

  resolve(): Observable<any> {
    return this.eventsService.getEvents().pipe(map((events) => events));
  }
}
