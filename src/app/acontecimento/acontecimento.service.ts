import { Injectable } from '@angular/core';
import {AcontecimentoModel} from "./model/acontecimento.model";

@Injectable({
  providedIn: 'root'
})
export class AcontecimentoService {

  private acontecimentos: AcontecimentoModel[] = [];

  constructor() { }

  getAcontecimentos(){
    return this.acontecimentos;
  }

  removeAcontecimento(acontecimento: AcontecimentoModel){
    this.acontecimentos.splice(this.acontecimentos.indexOf(acontecimento), 1);
  }

  adicionaAcontecimento(acontecimento){
    let newAcontecimento = new AcontecimentoModel(acontecimento.nome, acontecimento.descricao, acontecimento.data, acontecimento.cor);
    this.acontecimentos.push(newAcontecimento);
    console.log(this.acontecimentos);
  }
}
