export class AcontecimentoModel {
  private nome: string;
  private descricao: string;
  private data: Date;
  private cor: string;

  constructor (nome, descricao, data, cor) {
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.cor = cor;
  }
}
