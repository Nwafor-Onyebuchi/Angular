import { Component, Input, Output, EventEmitter} from "@angular/core";
//import {  } from 'protractor';

@Component({
  selector:'conference-thumnail',
  template: `
     <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
      <span>
        Location: {{ event.location.Address }}
        <span>&nbsp;</span>
        <span
          >{{ event.location.city }},
          {{ event.location.country }}</span
        >
      </span>
    </div>
  </div>
  `
})
export class ConferenceThumbnailComponent {
  @Input() event:any
  someProperty:any = 'Some value'
  logData(){
    console.log('Ref var works')
  }
}
