package br.com.senac.urbanmap.service;


import br.com.senac.urbanmap.entity.local.Local;
import br.com.senac.urbanmap.entity.usuario.Funcao;
import br.com.senac.urbanmap.entity.usuario.Usuario;
import br.com.senac.urbanmap.dto.UsuarioDetalhesDto;
import br.com.senac.urbanmap.dto.UsuarioNovoDto;
import br.com.senac.urbanmap.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repo;

    public UsuarioDetalhesDto registrarUsuario(UsuarioNovoDto dto) {
        Usuario u = Usuario.builder().nome(dto.nome()).nomeUsuario(dto.nomeUsuario()).
                dataNascimento(dto.dataNascimento()).email(dto.email()).senha(dto.senha()).
                funcao(Funcao.USUARIO).locaisFavoritos(new HashSet<Local>()).telefone(dto.telefone()).build();
        u = repo.save(u);
        return new UsuarioDetalhesDto(u.getId(), u.getNome(), u.getNomeUsuario(), u.getEmail(), u.getTelefone(), u.getFuncao());
    }


}
