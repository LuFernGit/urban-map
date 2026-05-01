export default class Comentario {
  constructor({
    id,
    autor,
    local,
    conteudo,
    dataCriacao,
  }) {
    this.id = id;
    this.autor = autor;       
    this.local = local;       
    this.conteudo = conteudo;
    this.dataCriacao = dataCriacao;
  }
}