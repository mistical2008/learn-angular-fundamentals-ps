import { Routes } from "@angular/router";
import { ErrorNotFoundComponent } from "./errors/error-not-found/error-not-found.component";
import { ErrorNotFountGuard } from "./errors/error-not-found/error-not-found.guard";
import {
  EventDetailsComponent,
  EventNewComponent,
  EventsListComponent,
  EventsResolver,
} from "./events";

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
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
