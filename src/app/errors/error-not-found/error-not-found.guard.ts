import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventsService } from "src/app/events";

@Injectable({
  providedIn: "root",
})
export class ErrorNotFountGuard implements CanActivate {
  constructor(private eventsService: EventsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const existedEvent = !!this.eventsService.getEventById(+route.params.id);

    if (!existedEvent) {
      this.router.navigate(["/404"]);
    }
    return true;
  }
}
