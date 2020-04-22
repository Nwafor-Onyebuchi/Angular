import { Component } from '@angular/core';

@Component ({
  selector: 'conference-list',
  template: `
  <div class="container">
  <h1>Upcoming Conferences</h1>
  <hr />
  <conference-thumnail #thumbnail [event]="conference"></conference-thumnail>
  <h3>{{thumbnail.someProperty}}</h3>
  <button class="btn btn-primary" (click)="thumbnail.logData()">Click me!</button>
</div>
  `
})
export class ConferenceListComponent  {
  conference = {
    id: 1,
    name: 'International Patners and Pastors Conference',
    date: '23/08/2020',
    price: '465.99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    time: '10am',
    location:{
      Address: 'LCA',
      city: 'Ikeja. Lagos',
      country: 'Nigeria'
    }
  }
}
