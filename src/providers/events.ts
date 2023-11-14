
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";

@Injectable()
export class EventsProvider {
    constructor(public http: HttpClient,) {
    }
    apiEvent = '/atividades'
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
       requestOptions = { headers: this.headers };
    ngOnInit() {

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
    getEventsMyEvents(){
      return new Promise((resolve, reject) => {
          console.log(environment.api + this.apiEvent)
          this.http.get(environment.api + this.apiEvent+"/index", this.requestOptions)
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
      this.http.delete(environment.api +   this.apiEvent+ "/destroy/"+ id, this.requestOptions)
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
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');
    this.requestOptions = { headers: this.headers };
    console.log('shit',this.headers)
    return new Promise((resolve, reject) => {
      this.http.post(environment.api + this.apiEvent+'/store', body, this.requestOptions )
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
      this.http.put(environment.api + this.apiEvent+'/update/'+id, body,this.requestOptions)
        .subscribe((result) => {
          console.log(result)
            resolve(result);
          },
          (error) => {
            reject(error);
          });

    });
  }
  postParticipar(id){
    return new Promise((resolve, reject) => {
   //   console.log(environment.api, body )
      this.http.post(environment.api + this.apiEvent+'/'+id+'/participar', { },this.requestOptions)
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
