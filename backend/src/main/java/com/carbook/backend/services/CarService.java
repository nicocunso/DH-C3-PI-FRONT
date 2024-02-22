package com.carbook.backend.services;

import com.carbook.backend.entities.Car;
import com.carbook.backend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public List<Car> find() {
        return carRepository.findAll();
    }

    public Optional<Car> getById(Long id) {
        return carRepository.findById(id);
    }

    public Car create(Car car) {
        return carRepository.save(car);
    }

    public void update(Car car) {
        carRepository.save(car);
    }

    public void delete(Long id) {
        carRepository.deleteById(id);
    }
}
