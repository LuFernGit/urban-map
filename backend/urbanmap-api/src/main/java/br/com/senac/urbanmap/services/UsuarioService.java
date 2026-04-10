package br.com.senac.urbanmap.services;

import br.com.senac.urbanmap.entities.usuario.Usuario;
import br.com.senac.urbanmap.entities.dtos.UsuarioDadosCadastroDTO;
import br.com.senac.urbanmap.exception.ErroUsuarioServiceException;
import br.com.senac.urbanmap.repositories.UsuarioRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario cadastrar(UsuarioDadosCadastroDTO dto) throws ErroUsuarioServiceException {
        if (emailCadastrado(dto))
            throw new ErroUsuarioServiceException("E-mail já está cadastrado.");

        if (nomeUsuarioCadastrado(dto)) {
            throw new ErroUsuarioServiceException("Nome de usuário indisponível");
        }

        if (!idadeValida(dto))
            throw new ErroUsuarioServiceException("Cadastro autorizado somente para pessoas com no minimo 16 anos.");

        Usuario usuario = UsuarioDadosCadastroDTO.converterParaUsuario(dto, passwordEncoder);
        usuario = repo.save(usuario);
        return usuario;
    }

    private boolean idadeValida(UsuarioDadosCadastroDTO dto) {
        LocalDate dataLimite = LocalDate.now().minusYears(16);
        return !dto.dataNascimento().isAfter(dataLimite);
    }

    private boolean emailCadastrado(UsuarioDadosCadastroDTO dto) {
        return repo.existsByEmail(dto.email());
    }

    private boolean nomeUsuarioCadastrado(UsuarioDadosCadastroDTO dto) {
        return repo.existsBynomeUsuario(dto.nomeUsuario());
    }

}