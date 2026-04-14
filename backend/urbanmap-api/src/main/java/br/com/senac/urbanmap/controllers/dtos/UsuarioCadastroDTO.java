package br.com.senac.urbanmap.controllers.dtos;

import br.com.senac.urbanmap.entities.usuario.Funcao;
import br.com.senac.urbanmap.entities.usuario.Usuario;
import jakarta.validation.constraints.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.HashSet;

// por enquanto é isso
public record UsuarioCadastroDTO(
        @NotBlank(message = "O nome é obrigatório") @Size(max = 100) String nome,
        @NotBlank(message = "O nome de usuário é obrigatório") @Size(max = 100) String nomeUsuario,
        @NotNull(message = "A data de nascimento é obrigatória") LocalDate dataNascimento,
        @NotBlank(message = "O email é obrigatório") @Email(message = "Email inválido") String email,
        @NotBlank(message = "A senha é obrigatória") String senha,
        @NotBlank(message = "O telefone é obrigatório") @Size(max = 15) String telefone
) {
    public static Usuario converterParaUsuario(UsuarioCadastroDTO dto, PasswordEncoder passwordEncoder) {
        return Usuario.builder().
                nome(dto.nome()).
                nomeUsuario(dto.nomeUsuario()).
                dataNascimento(dto.dataNascimento).
                email(dto.email()).
                senha(passwordEncoder.encode(dto.senha())).
                funcao(Funcao.USUARIO).
                locaisFavoritos(new HashSet<>()).
                telefone(dto.telefone()).build();
    }
}