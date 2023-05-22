package com.codegym.demo.service;

import com.codegym.demo.model.Gender;

public interface GenderService {
    Iterable<Gender> findAll();
}
