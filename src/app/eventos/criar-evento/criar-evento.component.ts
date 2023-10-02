import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventsProvider } from 'src/providers/events';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {

  constructor(public eventsProvider: EventsProvider, private router: Router, ) { }
  formulario
  loader = false
  erro = null
  sucesso = null
  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      descricao: new FormControl(''),
      data: new FormControl(''),
      local: new FormControl(''),
      tipo: new FormControl(''),
      livre: new FormControl(''),

    })
  }
  submited(){
    this.erro = null
    this.sucesso = null
    this.loader=true
    console.log(this.formulario.value)
     this.eventsProvider.postEvent( this.formulario.value).then((result: any) => {
     // this.event =  result
      console.log(result)
    //  this.authLogin.setSession(result.token, result.expires_at)
      //this.filteredEvents =  result
      this.sucesso=result
     // this.loader = false
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Evento Criado com Sucesso',
        showConfirmButton: false,
        timer: 1500
      }).then(ant => {
       this.router.navigate(["/"]);
      })
    }).catch(error => {
      console.log("teste2",error)
      this.erro = error
      this.loader = false

     // this.snackBar.openLong('Não foi possível modificar: O período de trabalho é inválido!', 'erro');

    })
  }
}
