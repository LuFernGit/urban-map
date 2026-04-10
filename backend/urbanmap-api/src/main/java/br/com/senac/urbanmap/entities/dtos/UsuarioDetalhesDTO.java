package br.com.senac.urbanmap.entities.dtos;

import br.com.senac.urbanmap.entities.usuario.Funcao;
import br.com.senac.urbanmap.entities.usuario.Usuario;

public record UsuarioDetalhesDTO(
        Long id,
        String nome,
        String nomeUsuario,
        String email,
        String telefone,
        Funcao funcao
) {
    public static UsuarioDetalhesDTO converterParaDTO(Usuario usuario) {
        return new UsuarioDetalhesDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getNomeUsuario(),
                usuario.getEmail(),
                usuario.getTelefone(),
                usuario.getFuncao());
    }
}