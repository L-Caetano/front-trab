
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {environment} from "../environments/environment.prod";

@Injectable()
export class UserProvider {
    constructor(public http: HttpClient,) {
    }
  //  apiEvent = '/atividades'
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
   requestOptions = { headers: this.headers };
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
    getAuth(){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    let   requestOptions = { headers: headers };
      return new Promise((resolve, reject) => {
          ///console.log(environment.api, body )
          this.http.get(environment.api + '/me', requestOptions)
            .subscribe((result:any) => {
              localStorage.setItem('role',result.role.nome );
                resolve(result);
              },
              (error) => {
                reject(error);
              });

        });
  }
    getUsers(){
      return new Promise((resolve, reject) => {
          ///console.log(environment.api, body )
          this.http.get(environment.api + '/admin', this.requestOptions)
            .subscribe((result) => {
              console.log(result)
                resolve(result);
              },
              (error) => {
                reject(error);
              });

        });
  }
  deleteUser(id){
    return new Promise((resolve, reject) => {
        //console.log(environment.api, body )
        this.http.delete(environment.api +  '/admin/destroy/'+id, this.requestOptions)
          .subscribe((result) => {
            console.log(result)
              resolve(result);
            },
            (error) => {
              reject(error);
            });

      });
}
promoteUser(id){

  return new Promise((resolve, reject) => {
    //console.log(environment.api, body )
    this.http.put(environment.api +  '/admin/promote/'+id, null, this.requestOptions)
      .subscribe((result) => {
        console.log(result)
          resolve(result);
        },
        (error) => {
          reject(error);
        });

  });
}
demoteUser(id){
  return new Promise((resolve, reject) => {
    //console.log(environment.api, body )
    this.http.put(environment.api +  '/admin/demote/'+id, null, this.requestOptions)
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
