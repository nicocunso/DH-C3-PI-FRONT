package com.carbook.backend.controllers;

import com.carbook.backend.entities.Car;
import com.carbook.backend.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {
    @Autowired
    private CarService carService;

    @GetMapping
    public ResponseEntity<List<Car>> find() {
        return ResponseEntity.ok(carService.find());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getById(@PathVariable Long id) {
        Optional<Car> result = carService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Car> create(@RequestBody Car car) {
        return ResponseEntity.ok(carService.create(car));
    }

    @PutMapping
    public ResponseEntity<String> update(@RequestBody Car car) {
        Optional<Car> result = carService.getById(car.getId());
        if (result.isPresent()) {
            carService.update(car);
            return ResponseEntity.ok("Car ID: " + car.getId() + " updated successfully");
        } else {
            return ResponseEntity.badRequest().body("Car not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Car> result = carService.getById(id);
        if (result.isPresent()) {
            carService.delete(id);
            return ResponseEntity.ok("Car ID: " + id + " deleted successfully");
        } else {
            return ResponseEntity.badRequest().body("Car not found");
        }
    }
}
