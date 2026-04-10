package br.com.senac.urbanmap.entities.dtos;

import br.com.senac.urbanmap.entities.tag.Tag;

import java.util.List;

public record TagTodasDTO(
        List<Tag> tags
) {
    public static TagTodasDTO converterParaDTO(List<Tag> tags) {
        return new TagTodasDTO(tags);
    }

}
