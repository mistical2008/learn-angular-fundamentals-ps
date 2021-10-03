import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <app-nav-bar></app-nav-bar>
    <events-list></events-list>
  `,
})
export class EventsAppComponent {
  title = 'app';
}
