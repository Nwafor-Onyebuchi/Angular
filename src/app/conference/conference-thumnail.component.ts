import { Component, Input } from "@angular/core";

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
    <button class="btn btn-primary" >Click me!</button>
  </div>
  `
})
export class ConferenceThumbnailComponent {
  @Input() event:any
}
