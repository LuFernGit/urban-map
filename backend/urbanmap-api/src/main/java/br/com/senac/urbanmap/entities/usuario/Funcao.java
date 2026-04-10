package br.com.senac.urbanmap.entities.usuario;

public enum Funcao {
    USUARIO("usuario"), ADMINISTRADOR("administrador");
    String tipo;
    Funcao(String tipo) {
        this.tipo = tipo;
    }
    public String getTipo() {
        return tipo;
    }
}
