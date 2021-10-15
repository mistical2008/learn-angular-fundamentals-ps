import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import {
  EventsListComponent,
  EventComponent,
  EventsService,
  EventDetailsComponent,
  EventNewComponent,
  EventsResolver,
} from "./events";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ToastrService } from "./libs/toastr/toastr.service";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./routes";
import { ErrorNotFoundComponent } from "./errors/error-not-found/error-not-found.component";
import { ErrorNotFountGuard } from "./errors/error-not-found/error-not-found.guard";

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
