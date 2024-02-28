package com.carbook.backend.services;

import com.carbook.backend.dtos.ActualizarAutoDto;
import com.carbook.backend.entities.Auto;
import com.carbook.backend.entities.Imagen;
import com.carbook.backend.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class AutoService {
    @Autowired
    private AutoRepository autoRepository;

    @Autowired
    private ImagenService imagenService;
    public List<Auto> find() {
        return autoRepository.findAll();
    }

    public Optional<Auto> getById(Long id) {
        return autoRepository.findById(id);
    }

    public Auto create(Auto auto, MultipartFile[] imageFiles) throws IOException {
        //1. guardamos el auto
        Auto autocreado = autoRepository.save(auto);
        //2. Cargamos las imagenes
        List<Imagen> uploadedFiles = imagenService.upload(autocreado.getId(),imageFiles);
        //3. Setteamos el valor del campo 'imagenes' con las imagenes cargadas
        autocreado.setImagenes(uploadedFiles);
        //4. Retornamos el autocreado
        return autocreado;
    }
/*
    public Optional<Auto> update(ActualizarAutoDto actualizarAuto) {
        Optional<Auto> auto = this.getById(actualizarAuto.getId());
        auto.ifPresent(autoActualizar -> {
            if (actualizarAuto.getAnno() != null) {
                autoActualizar.setAnno(actualizarAuto.getAnno());
            };
            if (actualizarAuto.getKilometraje() != null) {
                autoActualizar.setKilometraje(actualizarAuto.getKilometraje());
            };
            if (actualizarAuto.getEstado() != null) {
                autoActualizar.setEstado(actualizarAuto.getEstado());
            };
            if (actualizarAuto.getPrecioXDia() != null) {
                autoActualizar.setPrecioXDia(actualizarAuto.getPrecioXDia());
            };
            autoRepository.save(autoActualizar);
        });
        return auto;
    }
*/
    public void delete(Long id) {
        autoRepository.deleteById(id);
    }
}
