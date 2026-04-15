package br.com.senac.urbanmap.entities.local;

import br.com.senac.urbanmap.entities.tag.Tag;
import jakarta.persistence.*;
import lombok.*;

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
    private @Getter Long id;
    @Column(name = "nome", nullable = false)
    private @Getter
    @Setter String nome;
    @Column(name = "descricao", columnDefinition = "TEXT", nullable = false)
    private @Getter
    @Setter String descricao;
    @Column(name = "imagem_url")
    private @Getter
    @Setter String imagemUrl;
    @Column(name = "endereco", nullable = false)
    private @Getter
    @Setter String endereco;
    @Column(name = "latitude", nullable = false)
    private @Getter
    @Setter BigDecimal latitude;
    @Column(name = "longitude", nullable = false)
    private @Getter
    @Setter BigDecimal longitude;
    @Column(name = "qtd_likes")
    private @Getter
    @Setter Long qtdLikes = 0L;
    @ManyToMany
    private @Getter Set<Tag> tags;

}