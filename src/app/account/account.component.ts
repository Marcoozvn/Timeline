import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private nome: string;
  private login: string;
  private formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.nome = localStorage.getItem('nome');
    this.login = localStorage.getItem('login');
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [this.nome, Validators.required],
      login: [this.login, [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    this.nome = this.formulario.controls.nome.value;
    this.login = this.formulario.controls.login.value;
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('login', this.login);
    console.log(localStorage);
  }

}
