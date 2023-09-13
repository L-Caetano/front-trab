
import {HttpClient} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";

@Injectable()
export class EventsProvider {
    constructor(public http: HttpClient,) {
    }
    apiEvent = '/atividades'
    getEvents(){
        return new Promise((resolve, reject) => {
            console.log(environment.api + this.apiEvent)
            this.http.get(environment.api + this.apiEvent)
              .subscribe((result) => {
                console.log(result)
                  resolve(result);
                },
                (error) => {
                  reject(error);
                });
      
          });
    }

    getEvent(id){
      return new Promise((resolve, reject) => {
          console.log(environment.api + this.apiEvent)
          this.http.get(environment.api +   this.apiEvent+ "/show/"+ id)
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