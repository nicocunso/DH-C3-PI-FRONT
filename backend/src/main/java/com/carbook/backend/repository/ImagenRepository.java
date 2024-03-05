package com.carbook.backend.repository;

import com.carbook.backend.entities.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Long> {
    List<Imagen> findByAutoId(Long autoId);
    Optional<Imagen> findByAutoIdAndId(Long autoId, Long Id);
}
