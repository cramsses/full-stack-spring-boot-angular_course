import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //console.log('Executing Hello World Bean Service');
    //console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  // http://localhost:8080/hello-world-bean/path-variable/ramsses
  executeHelloWorldBeanServiceWithPath(name) {
    //console.log('Executing Hello World Bean Service');
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
    {headers});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'ramsses';
    let password = 'dummy';

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }


}
