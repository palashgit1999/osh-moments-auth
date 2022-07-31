import { APP_ID, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInform: FormGroup;
  signInData: LoginModel;
  afterLogin: {};
  loginLoader: boolean = false;
  constructor(private formBuilder: FormBuilder,
     private authS: AuthService,
     private router:Router
     ) {}

  ngOnInit(): void {
    this.insializeForm();
  }

  insializeForm() {
    this.signInform = this.formBuilder.group({
      "mailto:email": [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  onLogIn() {
    /** Due to error from API, I have attach my own API for authentication
     and making the user logged in to show the route navigation;
     GIVEN API ERROR:: {"success":true,"status":500,"message":"There was an error processing the request. Please try again later.","data":{}}
    **/
   this.loginLoader = true;
    this.authS.login(this.signInform.value).subscribe((res) => {
   this.loginLoader = false;
      if(res.success){
        this.authS.userDetails = res.data;
        this.router.navigate(['/dashboard']);
      }      
    },(err)=>{
      this.loginLoader = false;
        throw new Error(err)
    });
    

  }


}


