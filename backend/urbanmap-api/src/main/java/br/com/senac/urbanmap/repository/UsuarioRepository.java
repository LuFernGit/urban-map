package br.com.senac.urbanmap.repository;

import br.com.senac.urbanmap.entity.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}