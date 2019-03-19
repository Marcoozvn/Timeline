import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AcontecimentoService} from "../acontecimento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acontecimento-form',
  templateUrl: './acontecimento-form.component.html',
  styleUrls: ['./acontecimento-form.component.css']
})
export class AcontecimentoFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private acontecimentoService: AcontecimentoService, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      data: [null, Validators.required],
      cor: [null]
    })
  }

  onSubmit(){
    this.acontecimentoService.adicionaAcontecimento(this.formulario.value);
    this.router.navigate(['dashboard/home']);
  }

}
