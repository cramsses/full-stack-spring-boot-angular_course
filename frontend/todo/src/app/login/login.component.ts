import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ramsses'
  password = '1234566'

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
  }

}
