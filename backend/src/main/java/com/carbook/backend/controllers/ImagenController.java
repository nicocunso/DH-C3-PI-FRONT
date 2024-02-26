package com.carbook.backend.controllers;

import com.carbook.backend.entities.Imagen;
import com.carbook.backend.services.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/autos/{autoId}/imagenes")
public class ImagenController {
    @Autowired
    private ImagenService imagenService;

    @GetMapping()
    public ResponseEntity<List<Imagen>> getByAutoId(@PathVariable Long autoId) {
        return ResponseEntity.ok(imagenService.find(autoId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getById(@PathVariable Long autoId, @PathVariable Long id) throws IOException {
        Optional<Imagen> result = imagenService.getById(autoId, id);
        if (result.isPresent()) {
            byte[] imagen = java.util.Base64.getDecoder().decode(result.get().getDatos());
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imagen);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping()
    public ResponseEntity<List<Imagen>> upload(
            @PathVariable Long autoId,
            @RequestParam("imagenes") MultipartFile[] imagenes
    ) throws IOException {
        return ResponseEntity.ok(imagenService.upload(autoId, imagenes));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long autoId, Long id) {
        Optional<Imagen> result = imagenService.getById(autoId, id);
        if (result.isPresent()) {
            imagenService.delete(id);
            return ResponseEntity.ok("Imagen eliminada correctamente");
        } else {
            return ResponseEntity.badRequest().body("La imagen indicada no existe");
        }
    }
}
