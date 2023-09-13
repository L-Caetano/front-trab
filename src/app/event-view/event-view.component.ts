import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsProvider } from 'src/providers/events'

//import {NgbActiveModal,NgbModalOptions,NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,public eventsProvider: EventsProvider) { }
  public loader = true
  public event
  ngOnInit() {
  let id =  this.activedRoute.snapshot.paramMap.get('id');
  console.log(id)
  this.eventsProvider.getEvent(id).then((result: any) => {
    this.event =  result
    console.log(this.event)
    //this.filteredEvents =  result
    this.loader=false;
  })
  }

}
