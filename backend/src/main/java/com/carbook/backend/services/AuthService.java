package com.carbook.backend.services;

import com.carbook.backend.dtos.AuthResponse;
import com.carbook.backend.dtos.AuthenticationRequest;
import com.carbook.backend.dtos.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);

    AuthResponse authenticate(AuthenticationRequest request);
}
