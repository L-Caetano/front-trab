import { Component, OnInit } from '@angular/core';
import { EventsProvider } from 'src/providers/events'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor(public eventsProvider: EventsProvider) { }
  public events
  public search
  public filteredEvents = []
  public loader = true
  ngOnInit() {
    this.eventsProvider.getEvents().then((result: any) => {
      this.events =  result
      this.filteredEvents =  result
      this.loader=false;
    })
    //this.filteredEvents = this.events
  }

  setFiltro(){
    this.loader=true
    this.filteredEvents =  this.filtro()
    this.loader=false;

  }
  filtro(): any[] {
    //console.log(this.search)
    if (!this.events) {
      return [];
    }
    if (!this.search) {
      return this.events;
    }
   // this.search = this.search.toLocaleLowerCase();

    return this.events.filter(it => {
      return it.nome.includes(this.search) ||it.descricao.includes(this.search) ;
    });
  }
}
