import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  authenticate(formulario) {
    this.isLoggedIn = formulario.login === 'marcos@email.com' && formulario.password === '12345678';
    if (this.isLoggedIn) {
      const user = {
        nome: 'Marcos',
        login: 'marcos@email.com',
        token: 'logado'
      };
      localStorage.setItem('nome', user.nome);
      localStorage.setItem('login', user.login);
      localStorage.setItem('token', user.token);
      return user;
    }
    return null;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }

  constructor() { }
}
