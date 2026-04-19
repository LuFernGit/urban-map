package br.com.senac.urbanmap.exception;

import br.com.senac.urbanmap.controllers.dtos.ErroServiceDTO;
import br.com.senac.urbanmap.controllers.dtos.ErroValidationDTO;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class TratadorDeException {

    // as exceções do validation
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ErroValidationDTO>> tratadorErrosValidation(MethodArgumentNotValidException e) {
        List<ErroValidationDTO> listaErros = new ArrayList<>();
        e.getFieldErrors().forEach(erro -> listaErros.add(new ErroValidationDTO(erro)));
        return ResponseEntity.badRequest().body(listaErros);
    }

    // as exceções dos services (de forma generica)
    @ExceptionHandler(ErroServiceException.class)
    public ResponseEntity<ErroServiceDTO> tratarErrosService(ErroServiceException e) {
        return ResponseEntity.badRequest().body(new ErroServiceDTO(e));
    }


    // usuario não encontrado no momento do login
    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> tratarUsuarioNaoEncontrado(UsernameNotFoundException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }


    // erro relacionado a criação de token
    @ExceptionHandler(JWTCreationException.class)
    public ResponseEntity<String> tratarMensagemToken(JWTCreationException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }

}
