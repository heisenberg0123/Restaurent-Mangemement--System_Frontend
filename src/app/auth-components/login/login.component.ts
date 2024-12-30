import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth-services/auth-service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router,private service:AuthService) {
}

loginForm=new FormGroup({
email:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required])
})


  register(){
this.service.login(this.loginForm.value).subscribe((res)=>{
  console.log(this.loginForm.value);
})
  }
}
