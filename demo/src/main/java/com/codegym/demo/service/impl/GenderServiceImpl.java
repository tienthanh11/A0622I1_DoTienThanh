package com.codegym.demo.service.impl;

import com.codegym.demo.model.Gender;
import com.codegym.demo.repository.GenderRepository;
import com.codegym.demo.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenderServiceImpl implements GenderService {
    @Autowired
    GenderRepository genderRepository;
    @Override
    public Iterable<Gender> findAll() {
        return genderRepository.findAll();
    }
}
