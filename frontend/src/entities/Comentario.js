export default class Comentario {
  constructor(props = {}) {
    const {
      id,
      autor,
      local,
      conteudo,
      dataCriacao,
    } = props;

    this.id = id;
    this.autor = autor;
    this.local = local;
    this.conteudo = conteudo;
    this.dataCriacao = dataCriacao;
  }
}