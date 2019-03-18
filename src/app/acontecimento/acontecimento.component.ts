import {Component, Input, OnInit} from '@angular/core';

import { AcontecimentoModel } from './acontecimento.model';
import {AcontecimentoService} from "./acontecimento.service";

@Component({
  selector: 'app-acontecimento',
  templateUrl: './acontecimento.component.html',
  styleUrls: ['./acontecimento.component.css']
})
export class AcontecimentoComponent implements OnInit {

  @Input()
  acontecimentos: AcontecimentoModel[];

  constructor(private acontecimentoService: AcontecimentoService) { }

  ngOnInit() {
    this.acontecimentos = this.acontecimentoService.getAcontecimentos();
  }

  delete(acontecimento: AcontecimentoModel){
    this.acontecimentoService.removeAcontecimento(acontecimento);
  }

}
