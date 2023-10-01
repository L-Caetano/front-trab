import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventsProvider } from 'src/providers/events'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,public eventsProvider: EventsProvider, private router: Router) { }
  formulario
  loader = false
  erro = null
  sucesso = null

  ngOnInit() {
    let id =  this.activedRoute.snapshot.paramMap.get('id');
    console.log(id)
    let event
    this.loader=true;
    this.eventsProvider.getEvent(id).then((result: any) => {
      event =  result
     // console.log(this.event)
      //this.filteredEvents =  result
      this.loader=false;
        this.formulario = new FormGroup({
      nome: new FormControl(event.nome),
      descricao: new FormControl(event.descricao),
      data: new FormControl(event.data),
      local: new FormControl(event.local),
      tipo: new FormControl(event.tipo),
      livre: new FormControl(event.livre),

    })
    })

  }
  submited(){
    this.erro = null
    this.sucesso = null
    this.loader=true
    console.log(this.formulario.value)
    this.eventsProvider.putEvent( this.formulario.value,this.activedRoute.snapshot.paramMap.get('id')).then((result: any) => {
      // this.event =  result
       console.log(result)
     //  this.authLogin.setSession(result.token, result.expires_at)
       //this.filteredEvents =  result
       this.sucesso=result
      // this.loader = false
       Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Evento Editado com Sucesso',
         showConfirmButton: false,
         timer: 1500
       }).then(ant => {
          this.router.navigate(["/eventView/"+this.activedRoute.snapshot.paramMap.get('id')]);
       })
     }).catch(error => {
       console.log("teste2",error)
       this.erro = error
       this.loader = false

      // this.snackBar.openLong('Não foi possível modificar: O período de trabalho é inválido!', 'erro');

     })
  }
}
