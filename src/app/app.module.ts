import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { EventComponent } from "./event/event.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { EventsService } from "./events-list/shared/events.service";
import { ToastrService } from "./libs/toastr/toastr.service";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./routes";
import { EventNewComponent } from "./event-new/event-new.component";
import { ErrorNotFoundComponent } from "./errors/error-not-found/error-not-found.component";
import { ErrorNotFountGuard } from "./errors/error-not-found/error-not-found.guard";
import { EventsResolver } from "./events-list/shared/events.resolver";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventComponent,
    NavBarComponent,
    EventDetailsComponent,
    EventNewComponent,
    ErrorNotFoundComponent,
  ],
  providers: [
    EventsService,
    ToastrService,
    ErrorNotFountGuard,
    EventsResolver,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkIsDirtyState,
    },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkIsDirtyState(component: EventNewComponent) {
  if (component.isDirty) {
    return confirm("Do you really want to leave the page without saving.");
  }
  return true;
}
