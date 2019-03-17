import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  autenticate(formulario) {
    this.isLoggedIn = formulario.login === 'marcos@email.com' && formulario.password === '12345678';
    return this.isLoggedIn;
  }

  constructor() { }
}
