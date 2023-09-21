import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserProvider } from 'src/providers/user';
import {Snackbar} from 'src/providers/snackbar';
import { authLogin } from 'src/providers/authLogin';
import Swal from 'sweetalert2'
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  loader = false
  erro = null
  sucesso = null
  constructor(public snackBar: Snackbar,
    private userProvider: UserProvider, public authLogin: authLogin,private router: Router) { }
 public formulario
  ngOnInit() {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })

  }

  submited(){
    this.erro = null
    this.sucesso = null
    this.loader=true
    console.log(this.formulario.value)
    this.userProvider.postCreateUser( this.formulario.value).then((result: any) => {
     // this.event =  result
      console.log("teste",result)
      this.sucesso=result
        this.loader = false
      //this.filteredEvents =  result
      //this.snackBar.openLong('Período de trabalho atualizado!', 'success');
      this.authLogin.setSession(result.token, result.expires_at)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Você foi cadastrado e logado com sucesso',
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
