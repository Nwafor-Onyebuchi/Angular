import { Component } from '@angular/core';

@Component ({
  selector: 'conference-list',
  template: `
  <div class="container">
  <h1>Upcoming Conferences</h1>
  <hr />
  <conference-thumnail [event]="conference"></conference-thumnail>
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
