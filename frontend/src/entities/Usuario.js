export default class Usuario {
  constructor({
    id,
    nome,
    nomeUsuario,
    fotoUrl,
    email,
    senha,
    telefone,
    dataNascimento,
    likes = [],
    salvos = [],
    status = true,
    funcao,
  }) {
    this.id = id;
    this.nome = nome;
    this.nomeUsuario = nomeUsuario;
    this.fotoUrl = fotoUrl;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.likes = likes;     
    this.salvos = salvos;   
    this.status = status;
    this.funcao = funcao;   
  }
}