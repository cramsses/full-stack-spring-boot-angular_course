import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
    
      return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticateUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          console.log('Request succeed');
          return data;
        }
      )
    )

  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser){
      return sessionStorage.getItem('token');
    }
  }
 
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean{
  constructor(public message : string){}
}
