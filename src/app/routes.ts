import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventNewComponent } from "./event-new/event-new.component";
import { EventsListComponent } from "./events-list/events-list.component";

export const AppRoutes: Routes = [
  { path: 'events/new', component: EventNewComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
]
