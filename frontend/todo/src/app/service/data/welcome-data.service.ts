import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //console.log('Executing Hello World Bean Service');
    //console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.get('http://localhost:8080/hello-world-bean');
  }

}
