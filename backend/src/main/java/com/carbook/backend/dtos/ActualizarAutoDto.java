package com.carbook.backend.dtos;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActualizarAutoDto {
    private Long id;
    private Integer anno;
    private Integer kilometraje;
    private Integer precioXDia;
    private String estado;
}

