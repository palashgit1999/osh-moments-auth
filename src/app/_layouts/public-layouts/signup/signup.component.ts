import { APP_ID, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signInData: LoginModel;
  afterLogin: {};
  constructor(private formBuilder: FormBuilder
     ) {}

  ngOnInit(): void {
    this.insializeForm();
  }

  insializeForm() {
    this.signUpForm = this.formBuilder.group({
      full_name: [null, Validators.required],
      "mailto:email": [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      interests: [null, Validators.required],
      preferred_size: [null, Validators.required]
    });
  }
  
proceedForLog(){

  return {
    name:'Palash Ghosh',
    "mailto:email":'palash@gmail.com',
    isAdmin: true
  }
}
onSignUp(){

}

}


