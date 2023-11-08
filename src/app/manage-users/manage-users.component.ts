import { Component, OnInit } from '@angular/core';
import { UserProvider } from 'src/providers/user';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(public userProvider:UserProvider) { }
  public arrayTeste
  public loader = true

  ngOnInit() {
    this.getUser()

  }
  getUser(){
        this.userProvider.getUsers().then((result:any) =>{
       this.arrayTeste=result.data  
         this.loader=false;
    })
  }
  excluir(id){
    Swal.fire({
      title: 'Queres realmente deletar este user?',

      showCancelButton: true,
      confirmButtonText: 'Deletar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
    this.userProvider.deleteUser(id).then(result => {
      this.getUser()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Deletado',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  })
  }
  promover(id){
    Swal.fire({
      title: 'Queres realmente promover este user?',

      showCancelButton: true,
      confirmButtonText: 'Promover',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
    this.userProvider.promoteUser(id).then(result => {
      this.getUser()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Promovido',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  })
  }
  demote(id){
    Swal.fire({
      title: 'Queres realmente demover este user?',

      showCancelButton: true,
      confirmButtonText: 'Demover',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
    this.userProvider.promoteUser(id).then(result => {
      this.getUser()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Demovido',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  })
  }
}
