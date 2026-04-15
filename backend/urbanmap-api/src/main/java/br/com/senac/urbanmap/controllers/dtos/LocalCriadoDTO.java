package br.com.senac.urbanmap.controllers.dtos;

import br.com.senac.urbanmap.entities.local.Local;
import br.com.senac.urbanmap.entities.tag.Tag;

import java.math.BigDecimal;
import java.util.Set;

public record LocalCriadoDTO(
        Long id,
        String nome,
        String descricao,
        String imagemUrl,
        String endereco,
        BigDecimal latitude,
        BigDecimal longitude,
        Long qtdLikes,
        Set<Tag> tags
) {
    public static LocalCriadoDTO converterParaDto(Local local) {
        return new LocalCriadoDTO(
                local.getId(),
                local.getNome(),
                local.getDescricao(),
                local.getImagemUrl(),
                local.getEndereco(),
                local.getLatitude(),
                local.getLongitude(),
                local.getQtdLikes(),
                local.getTags()
        );
    }
}
