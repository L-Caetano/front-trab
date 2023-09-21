import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserProvider } from 'src/providers/user';
import { authLogin } from 'src/providers/authLogin'
import Swal from 'sweetalert2'
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(  private router: Router,private userProvider: UserProvider, public authLogin: authLogin) { }
 public formulario
 loader = false
 erro = null
 sucesso = null
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
    this.userProvider.postLogUser( this.formulario.value).then((result: any) => {
     // this.event =  result
      console.log(result)
      this.authLogin.setSession(result.token, result.expires_at)
      //this.filteredEvents =  result
      this.sucesso=result
     // this.loader = false
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Você foi logado com sucesso',
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
