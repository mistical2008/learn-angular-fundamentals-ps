import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events-list/shared/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent implements OnInit {
  event: any

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.event = this.eventsService.getEventById(1);
  }



}
