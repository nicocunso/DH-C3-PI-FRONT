package com.carbook.backend.controllers;

import com.carbook.backend.entities.Usuario;
import com.carbook.backend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    ResponseEntity<Usuario> createNewUser(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.createNewUser(usuario));
    }

}
