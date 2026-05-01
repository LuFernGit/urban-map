export default class Local {
  constructor(props = {}) {
    this.id = props.id;
    this.nome = props.nome;
    this.descricao = props.descricao;
    this.fotosUrl = props.fotosUrl || [];
    this.endereco = props.endereco;
    this.cidade = props.cidade;
    this.estado = props.estado;
    this.cep = props.cep;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.status = props.status || "Ativo";
    this.likes = props.likes || 0;
    this.salvos = props.salvos || 0;
    this.tags = props.tags || [];
    this.curtidoPeloUsuario = props.curtidoPeloUsuario || false;
    this.salvoPeloUsuario = props.salvoPeloUsuario || false;
  }
}