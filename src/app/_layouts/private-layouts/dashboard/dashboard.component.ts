import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userDetails: LoginResponseModel;

  constructor(private authS: AuthService, private router: Router) {
    this.userDetails = this.authS.userDetails;
    console.log(this.userDetails)
  }

  ngOnInit(): void {}
  onLogOut() {
    this.authS.logOut();
  }
}
