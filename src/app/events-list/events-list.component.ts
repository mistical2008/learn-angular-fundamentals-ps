import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../libs/toastr/toastr.service';
import { EventsService } from './shared/events.service';

@Component({
  selector: 'events-list',
  template: `
    <h1>Upcoming Angualr events list</h1>
    <hr>
    <div class="row">
      <app-event *ngFor="let event of events" [event]="event" class="col-md-5"></app-event>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[]
  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents()
  }
}
