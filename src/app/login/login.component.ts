import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth : AuthService) { 

  }

  ngOnInit() {
  }
  login(logInForm:NgForm) : void { 
    
    const target = logInForm.value;
    
    const username = target.username;
    const password = target.password;
    console.log(username,password);
    this.auth.getLoginDetails(username,password);
    /*if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }*/
  }
  }
