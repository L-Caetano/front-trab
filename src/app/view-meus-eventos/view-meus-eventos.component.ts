import { Component, OnInit } from '@angular/core';
import { EventsProvider } from 'src/providers/events'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-meus-eventos',
  templateUrl: './view-meus-eventos.component.html',
  styleUrls: ['./view-meus-eventos.component.css']
})
export class ViewMeusEventosComponent implements OnInit {
  
  constructor(public eventsProvider: EventsProvider,private router: Router) { }
  public events
  public search
  public filteredEvents = []
  public loader = true
  ngOnInit() {
    this.eventsProvider.getEventsMyEvents().then((result: any) => {
      this.events =  result
      this.filteredEvents =  result.data
      this.loader=false;
    })
    //this.filteredEvents = this.events
  }
  routToEvent(id){
    console.log(id)
    this.router.navigate(['/eventView/'+id]
    )
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
