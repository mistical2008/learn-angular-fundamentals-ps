import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventsService } from './events-list/shared/events.service';
import { ToastrService } from './libs/toastr/toastr.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventComponent,
    NavBarComponent
  ],
  providers: [EventsService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
