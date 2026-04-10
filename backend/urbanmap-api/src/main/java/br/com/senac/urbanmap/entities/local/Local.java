package br.com.senac.urbanmap.entities.local;

import br.com.senac.urbanmap.entities.tag.Tag;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "locais")
public class Local {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nome", nullable = false)
    private String nome;
    @Column(name = "descricao", columnDefinition = "TEXT", nullable = false)
    private String descricao;
    @Column(name = "endereco", nullable = false)
    private String endereco;
    @Column(name = "latitude", nullable = false)
    private BigDecimal latitude;
    @Column(name = "longitude", nullable = false)
    private BigDecimal longitude;
    @ManyToMany
    private Set<Tag> tags;

}