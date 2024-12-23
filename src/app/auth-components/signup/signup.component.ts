import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import {AuthService} from "../../auth-services/auth-service/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],


})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private service:AuthService,private not:NzNotificationService) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      checkPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),this.checkPasswordMatchValidator()]),
    });
  }
  checkPasswordMatchValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = this.signupForm?.get('password')?.value; // Get password value
      const checkPassword = control.value; // Get checkPassword value

      return password === checkPassword ? null : { passwordMismatch: true };
    };
  }

  register() {
if(this.signupForm.valid){
  this.service.signup(this.signupForm.value).subscribe((res)=>{

    console.log(this.signupForm.value);
    if(res.id!==null){this.not.success("success","your registed is successuful ")


    }

    else {
      this.not.success("ERROR","your registed is wrong ")
    }
  })
}

  }


















}
