package com.carbook.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class DemoController {

    @GetMapping("/publico")
    public String saludopublico(){
        return "Ingreso a un endpoint publico";
    }

    @GetMapping("/restringido")
    public String saludoprotegido(){
        return "Ingreso a un endpoint restringido";
    }



}
