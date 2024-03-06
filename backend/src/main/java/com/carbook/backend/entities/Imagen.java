package com.carbook.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "imagenes")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Imagen {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String nombre;

    @Column
    private String tipo;

    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String datos;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "id_auto")
    private Auto auto;
}
