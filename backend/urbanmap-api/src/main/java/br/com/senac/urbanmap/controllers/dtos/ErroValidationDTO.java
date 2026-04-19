package br.com.senac.urbanmap.controllers.dtos;

import org.springframework.validation.FieldError;

// especifico para o validation (requests com campo inválido, faltando etc.)
public record ErroValidationDTO(String campo, String mensagem) {
    public ErroValidationDTO(FieldError erro) {
        this(erro.getField(), erro.getDefaultMessage());
    }
}