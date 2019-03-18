import { Injectable } from '@angular/core';
import {AcontecimentoModel} from "./acontecimento.model";

@Injectable({
  providedIn: 'root'
})
export class AcontecimentoService {

  private acontecimentos: AcontecimentoModel[] = [];

  constructor() {
    let acontecimento1: AcontecimentoModel = new AcontecimentoModel("Teste 1", "Evidentemente, a consulta aos diversos militantes garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso. Por outro lado, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das diretrizes de desenvolvimento para o futuro. Acima de tudo, é fundamental ressaltar que o desenvolvimento contínuo de distintas formas de atuação promove a alavancagem dos relacionamentos verticais entre as hierarquias. A nível organizacional, a estrutura atual da organização auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. ",
      "07/03/1997", "amarelo");
    let acontecimento2: AcontecimentoModel = new AcontecimentoModel("Teste 2", "Evidentemente, a consulta aos diversos militantes garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso. Por outro lado, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das diretrizes de desenvolvimento para o futuro. Acima de tudo, é fundamental ressaltar que o desenvolvimento contínuo de distintas formas de atuação promove a alavancagem dos relacionamentos verticais entre as hierarquias. A nível organizacional, a estrutura atual da organização auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. ",
      "07/03/1997", "amarelo");
    let acontecimento3: AcontecimentoModel = new AcontecimentoModel("Teste 3", "Evidentemente, a consulta aos diversos militantes garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso. Por outro lado, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das diretrizes de desenvolvimento para o futuro. Acima de tudo, é fundamental ressaltar que o desenvolvimento contínuo de distintas formas de atuação promove a alavancagem dos relacionamentos verticais entre as hierarquias. A nível organizacional, a estrutura atual da organização auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. ",
      "07/03/1997", "amarelo");
    let acontecimento4: AcontecimentoModel = new AcontecimentoModel("Teste 4", "Evidentemente, a consulta aos diversos militantes garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso. Por outro lado, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das diretrizes de desenvolvimento para o futuro. Acima de tudo, é fundamental ressaltar que o desenvolvimento contínuo de distintas formas de atuação promove a alavancagem dos relacionamentos verticais entre as hierarquias. A nível organizacional, a estrutura atual da organização auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. ",
      "07/03/1997", "amarelo");
    this.acontecimentos.push(acontecimento1);
    this.acontecimentos.push(acontecimento2);
    this.acontecimentos.push(acontecimento3);
    this.acontecimentos.push(acontecimento4);
  }

  getAcontecimentos(){
    return this.acontecimentos;
  }

  removeAcontecimento(acontecimento: AcontecimentoModel){
    this.acontecimentos.splice(this.acontecimentos.indexOf(acontecimento), 1);
  }
}
