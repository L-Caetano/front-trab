
import {HttpClient} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";

@Injectable()
export class UserProvider {
    constructor(public http: HttpClient,) {
    }
  //  apiEvent = '/atividades'
    postCreateUser(body){
        return new Promise((resolve, reject) => {
            console.log(environment.api, body )
            this.http.post(environment.api + '/register', body)
              .subscribe((result) => {
                console.log(result)
                  resolve(result);
                },
                (error) => {
                  reject(error);
                });
      
          });
    }
    postLogUser(body){
        return new Promise((resolve, reject) => {
            console.log(environment.api, body )
            this.http.post(environment.api + '/login', body)
              .subscribe((result) => {
                console.log(result)
                  resolve(result);
                },
                (error) => {
                  reject(error);
                });
      
          });
    }
   
}