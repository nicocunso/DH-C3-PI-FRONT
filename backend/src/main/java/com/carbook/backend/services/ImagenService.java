package com.carbook.backend.services;

import com.carbook.backend.entities.Imagen;
import com.carbook.backend.entities.Auto;
import com.carbook.backend.repository.ImagenRepository;
import com.carbook.backend.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {
    @Autowired
    private ImagenRepository imagenRepository;
    @Autowired
    private AutoRepository autoRepository;

    public List<Imagen> find(Long autoId) {
        return imagenRepository.findByAutoId(autoId);
    }

    public Optional<Imagen> getById(Long autoId, Long id) {
        return imagenRepository.findByAutoIdAndId(autoId, id);
    }

    public List<Imagen> upload(Long autoId, MultipartFile[] imagenes) throws IOException {
        List<Imagen> listadoImagenes = new ArrayList<Imagen>();
        Optional<Auto> autoEntity = autoRepository.findById(autoId);

        // Obtenemos el nombre original de la imagen
        for (MultipartFile imagen : imagenes) {
            String nombreImagen = StringUtils.cleanPath(imagen.getOriginalFilename());
            Imagen imagenEntity = Imagen.builder()
                    .nombre(nombreImagen)
                    .tipo(imagen.getContentType())
                    .datos(Base64.getEncoder().encodeToString(imagen.getBytes()))
                    .auto(autoEntity.get())
                    .build();
            listadoImagenes.add(imagenEntity);
        }
        return imagenRepository.saveAll(listadoImagenes);
    }

    public void delete(Long id) {
        imagenRepository.deleteById(id);
    }
}