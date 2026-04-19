package br.com.senac.urbanmap.controllers.dtos;

import br.com.senac.urbanmap.exception.ErroServiceException;
public record ErroServiceDTO(String classe, String mensagem) {

    public ErroServiceDTO(ErroServiceException e) {
        this(e.getClass().getSimpleName(), e.getMessage());
    }
}