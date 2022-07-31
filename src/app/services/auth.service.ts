import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dashData = new BehaviorSubject<{}>(null);
  API = environment.SERVER_API;
  constructor(private http: HttpClient, private router: Router) { }

  login(logindata: LoginModel): Observable<any> {
    return this.http.post(`${this.API}login`, logindata);
  }

  dashboardDetail(obj: {}) { }

  private set token(token) {
    localStorage.setItem('token', token);
  }
  private get token() {
    return localStorage.getItem('token');
  }

  public set userDetails(user: any) {
    this.token = user.token;
    localStorage.setItem('user', globalThis.btoa(JSON.stringify(user)));
  }

  public get userDetails() {
    try {
      return JSON.parse(globalThis.atob(localStorage.getItem('user')));
    } catch {
      this.router.navigate(['']);
    }
  }

  public logOut(){
    this.clearAll();
    this.router.navigate(['']);
  }

  private clearAll(){
    localStorage.clear();
    sessionStorage.clear();
  }

  isAuthenticated() {
    return !!this.token;
  }
}
