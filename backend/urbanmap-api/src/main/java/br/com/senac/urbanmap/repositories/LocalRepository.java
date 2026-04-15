package br.com.senac.urbanmap.repositories;


import br.com.senac.urbanmap.entities.local.Local;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocalRepository extends JpaRepository<Local, Long> {
}
