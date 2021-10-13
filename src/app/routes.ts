import { Routes } from "@angular/router";
import { ErrorNotFoundComponent } from "./errors/error-not-found/error-not-found.component";
import { ErrorNotFountGuard } from "./errors/error-not-found/error-not-found.guard";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventNewComponent } from "./event-new/event-new.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { EventsResolver } from "./events-list/shared/events.resolver";

export const AppRoutes: Routes = [
  {
    path: "events/new",
    component: EventNewComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsResolver },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [ErrorNotFountGuard],
  },
  { path: "404", component: ErrorNotFoundComponent },
  { path: "", redirectTo: "events", pathMatch: "full" },
];
