import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserProvider } from 'src/providers/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  loader
  constructor(private userProvider: UserProvider) { }
 public formulario
  ngOnInit() {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })

  }

  submited(){
    
    console.log(this.formulario.value)
    this.userProvider.postCreateUser( this.formulario.value).then((result: any) => {
     // this.event =  result
      console.log(result)
      //this.filteredEvents =  result
   
    })
  }
}
