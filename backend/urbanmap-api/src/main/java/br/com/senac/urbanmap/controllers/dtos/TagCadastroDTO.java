package br.com.senac.urbanmap.controllers.dtos;


import br.com.senac.urbanmap.entities.tag.Tag;
import jakarta.validation.constraints.NotBlank;

public record TagCadastroDTO(
        @NotBlank(message = "O nome é obrigatório") String nome
) {
    public static Tag converterParaTag(TagCadastroDTO dto) {
        return Tag.builder().nome(dto.nome()).build();
    }
}
