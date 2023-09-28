
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";

@Injectable()
export class EventsProvider {
    constructor(public http: HttpClient,) {
    }
    apiEvent = '/atividades'
    headers
    ngOnInit() {
       this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.get('token')}`
      });
    }
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
  deleteEvent(id){
    return new Promise((resolve, reject) => {
      console.log(environment.api + this.apiEvent)
      this.http.delete(environment.api +   this.apiEvent+ "/destroy/"+ id,this.headers)
        .subscribe((result) => {
          console.log(result)
            resolve(result);
          },
          (error) => {
            reject(error);
          });

    });
  }
  postEvent(body){
    return new Promise((resolve, reject) => {
      console.log(environment.api, body )
      this.http.post(environment.api + this.apiEvent+'/store', body,this.headers)
        .subscribe((result) => {
          console.log(result)
            resolve(result);
          },
          (error) => {
            reject(error);
          });

    });
  }
  putEvent(body,id){
    return new Promise((resolve, reject) => {
      console.log(environment.api, body )
      this.http.post(environment.api + this.apiEvent+'/update/'+id, body,this.headers)
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
