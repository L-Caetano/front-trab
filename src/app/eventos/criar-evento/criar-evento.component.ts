import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      imagem: new FormControl(null)
    })
  }
  submited(){
    this.erro = null
    this.sucesso = null
    this.loader=true
    console.log(this.formulario.value)
    let obj = {
      nome: this.formulario.value.nome,
      descricao: this.formulario.value.descricao,
      data:this.formulario.value.data,
      local:this.formulario.value.local,
      tipo: this.formulario.value.tipo,
      livre: this.formulario.value.livre,
      imagem: this.formulario.value.imagem
    }
  //  this.formulario.value.imagem =  this.fileData
    console.log(obj)
     this.eventsProvider.postEvent(obj).then((result: any) => {
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
  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      this.formulario.patchValue({
        imagem: file // Define o valor do controle de imagem com o arquivo selecionado
      });
      reader.onload = this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    let binaryString = e.target.result;
    this.formulario.patchValue({
      imagem: btoa(binaryString) // Converte para base64
    });
    console.log(this.formulario.value.imagem);
  }
}
