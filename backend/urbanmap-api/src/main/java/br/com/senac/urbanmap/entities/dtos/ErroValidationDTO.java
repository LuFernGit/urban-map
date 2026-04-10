package br.com.senac.urbanmap.entities.dtos;

import org.springframework.validation.FieldError;

// especifico para o validation
public record ErroValidationDTO(String campo, String mensagem) {
    public ErroValidationDTO(FieldError erro) {
        this(erro.getField(), erro.getDefaultMessage());
    }
}