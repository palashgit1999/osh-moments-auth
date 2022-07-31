import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  getStoarage(){
    return localStorage.getItem("success");
  }
}
