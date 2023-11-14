
import {HttpClient} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";
import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { ParamMap } from "@angular/router";
import { Router } from "@angular/router";
@Injectable()
export class authLogin {
    constructor(activatedRoute: ActivatedRoute,
      router: Router) {
    }
    private activatedRoute: ActivatedRoute;

	private router: Router;

    setSession(token, expires_at, role){
      console.log(token, expires_at)
      localStorage.setItem('token',token );
      localStorage.setItem('expires_at',expires_at );
      localStorage.setItem('role',role );
    }
    isLogged(){
      return  localStorage.getItem('token')!=null
    }
    logout(){
      localStorage.removeItem('token' );
      localStorage.removeItem('expires_at' );
      localStorage.removeItem('role' );
    }
    getRole(){
      return localStorage.getItem('role')
    }

}
