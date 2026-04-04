package br.com.senac.urbanmap.dto;

import br.com.senac.urbanmap.entity.usuario.Funcao;

public record UsuarioDetalhesDto(
        Long id, String nome,
        String nomeUsuario,
        String email,
        String telefone,
        Funcao funcao) {
}