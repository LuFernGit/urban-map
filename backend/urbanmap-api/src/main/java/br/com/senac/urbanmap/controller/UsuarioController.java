package br.com.senac.urbanmap.controller;

import br.com.senac.urbanmap.dto.UsuarioDetalhesDto;
import br.com.senac.urbanmap.dto.UsuarioNovoDto;
import br.com.senac.urbanmap.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioService service;

    @PostMapping("/cadastro")
    public ResponseEntity<UsuarioDetalhesDto> cadastro(@Valid @RequestBody UsuarioNovoDto dto) {
        UsuarioDetalhesDto resposta = service.registrarUsuario(dto);
        return ResponseEntity.created(URI.create("/usuario/" + resposta.id())).body(resposta);
    }

}