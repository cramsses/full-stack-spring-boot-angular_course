import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ramsses'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

//Router
//Angular.giveMERouter
//Dependency Injection


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username)
    if(this.username==="ramsses" && this.password==="dummy"){
      //Redirecto to redirect
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
