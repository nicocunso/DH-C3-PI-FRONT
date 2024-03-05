package com.carbook.backend.services;

import com.carbook.backend.entities.Usuario;
import com.carbook.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario createNewUser(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
}
