import { Component, OnInit } from '@angular/core';
import { EventsProvider } from 'src/providers/events'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public eventsProvider: EventsProvider) { }
  public events 
  ngOnInit() {
    this.eventsProvider.getEvents().then(result => {
      this.events =  result
    })
  }

}
