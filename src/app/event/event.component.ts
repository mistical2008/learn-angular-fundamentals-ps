import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div>
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .thumbnail { min-height: 210px;}
      .pad-left {margin-left: 10px;}
      .well {color: #bbb;}
    `]
})
export class EventComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit(): void {
  }

}
