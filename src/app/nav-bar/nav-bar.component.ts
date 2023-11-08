import { Component, OnInit } from '@angular/core';
import { authLogin } from 'src/providers/authLogin';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authLogin: authLogin) { }
public role
  ngOnInit() {
   this.role = localStorage.getItem('role')
   console.log(this.role)
  }

}
