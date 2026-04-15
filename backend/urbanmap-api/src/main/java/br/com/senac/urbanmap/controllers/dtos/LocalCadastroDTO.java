package br.com.senac.urbanmap.controllers.dtos;

import br.com.senac.urbanmap.entities.local.Local;
import br.com.senac.urbanmap.entities.tag.Tag;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Set;

public record LocalCadastroDTO(
        @NotBlank(message = "nome é obrigatório") String nome,
        @NotBlank(message = "a descrição é obrigatoria") String descricao,
        @NotBlank(message = "endereço é obrigatório") String endereco,
        @NotNull(message = "as cordenadas são obrigatórias") BigDecimal latitude,
        @NotNull(message = "as cordenadas são obrigatórias") BigDecimal longitude,
        @NotNull(message = "as cordenadas são obrigatórias") Set<Long> tagsId
) {
    public static Local converterParaLocal(LocalCadastroDTO dto, Set<Tag> tags, String imagemUrl) {
        return Local.builder()
                .nome(dto.nome())
                .descricao(dto.descricao())
                .imagemUrl(imagemUrl)
                .endereco(dto.endereco())
                .latitude(dto.latitude())
                .longitude(dto.longitude())
                .qtdLikes(0L)
                .tags(tags).build();
    }
}
