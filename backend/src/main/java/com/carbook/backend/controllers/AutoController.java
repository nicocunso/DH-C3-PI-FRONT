package com.carbook.backend.controllers;

import com.carbook.backend.dtos.ActualizarAutoDto;
import com.carbook.backend.entities.Auto;
import com.carbook.backend.services.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/autos")
public class AutoController {
    @Autowired
    private AutoService autoService;

    @GetMapping
    public ResponseEntity<List<Auto>> find() {
        return ResponseEntity.ok(autoService.find());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Auto> getById(@PathVariable Long id) {
        Optional<Auto> result = autoService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Auto> create(@RequestBody Auto auto) {
        return ResponseEntity.ok(autoService.create(auto));
    }

    @PutMapping
    public ResponseEntity<String> update(@RequestBody ActualizarAutoDto actualizarAuto) {
        Optional<Auto> result = autoService.update(actualizarAuto);
        if (result.isPresent()) {
            return ResponseEntity.ok("Auto actualizado correctamente");
        } else {
            return ResponseEntity.badRequest().body("El auto indicado no existe");
        }
    }

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
