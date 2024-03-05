package com.carbook.backend.controllers;

import com.carbook.backend.dtos.ActualizarAutoDto;
import com.carbook.backend.entities.Auto;
import com.carbook.backend.entities.Imagen;
import com.carbook.backend.services.AutoService;
import com.carbook.backend.services.ImagenService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/autos")
public class AutoController {
    @Autowired
    private AutoService autoService;
    @Autowired
    private ImagenService imagenService;
    @GetMapping
    public ResponseEntity<List<Auto>> find() {
        return ResponseEntity.ok(autoService.find());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Auto> getById(@PathVariable Long id) {
        Optional<Auto> result = autoService.getById(id);
        System.out.println(result);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Auto> create(@RequestPart MultipartFile[] imageFiles, @RequestPart String auto) throws IOException {
        //1. se convierte el string auto a un objeto Auto para interactuar con el servicio
        Auto autoObj = convertToAuto(auto);

        return ResponseEntity.ok(autoService.create(autoObj,imageFiles));
    }

    private Auto convertToAuto(String autoObj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(autoObj,Auto.class);

    }
/*
    @PutMapping
    public ResponseEntity<String> update(@RequestBody ActualizarAutoDto actualizarAuto) {
        Optional<Auto> result = autoService.update(actualizarAuto);
        if (result.isPresent()) {
            return ResponseEntity.ok("Auto actualizado correctamente");
        } else {
            return ResponseEntity.badRequest().body("El auto indicado no existe");
        }
    }
*/
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Auto> result = autoService.getById(id);
        if (result.isPresent()) {
            autoService.delete(id);
            return ResponseEntity.ok("Auto eliminado correctamente");
        } else {
            return ResponseEntity.badRequest().body("El auto indicado no existe");
        }
    }
}
