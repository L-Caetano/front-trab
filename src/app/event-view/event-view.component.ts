import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsProvider } from 'src/providers/events'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { authLogin } from 'src/providers/authLogin'

//import {NgbActiveModal,NgbModalOptions,NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,public eventsProvider: EventsProvider, private router: Router, public authLogin: authLogin) { }
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
  editar(){
    let id =  this.activedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/editarEvento/'+id])
  }
  excluir(){
    Swal.fire({
      title: 'Queres realmente deletar esté evento?',

      showCancelButton: true,
      confirmButtonText: 'Deletar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eventsProvider.deleteEvent(this.activedRoute.snapshot.paramMap.get('id')).then(result =>{
                  Swal.fire('Deletado!', '', 'success')
        })
      }
    })
  }
}
