package com.carbook.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "autos")
@Getter
@Setter
public class Auto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
/*
    @Column(name = "id_tipo_auto")
    private Long idTipoAuto;
*/
    @Column
    private String matricula;

    @Column
    private String modelo;

    @Column
    private Integer anno;
/*
    @Column(name = "tipo_combustible")
    private String tipoCombustible;

    @Column
    private String transmision;

    @Column
    private Integer kilometraje;

    @Column(name = "precio_x_dia")
    private Integer precioXDia;

    @Column
    private String estado;

    @Column(name = "numero_puertas")
    private Integer numeroPuertas;

    @Column(name = "aire_acondicionado")
    private char aireAcondicionado;
*/
    @Column
    @OneToMany(mappedBy = "auto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Imagen> imagenes;
}
