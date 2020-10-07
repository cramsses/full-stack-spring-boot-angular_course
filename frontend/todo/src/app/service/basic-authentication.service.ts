import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    console.log('before '+this.isUserLoggedIn());
    
    if(username==="ramsses" && password==="dummy"){
      sessionStorage.setItem('authenticateUser',username);
      console.log('after '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {
    //console.log('Executing Hello World Bean Service');
    
    

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticateUser',username);
          console.log('Request succeed');
          return data;
        }
      )
    )
  }

 
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}

export class AuthenticationBean{
  constructor(public message : string){}
}
