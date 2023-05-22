package com.codegym.demo.service.impl;

import com.codegym.demo.model.Position;
import com.codegym.demo.repository.PositionRepository;
import com.codegym.demo.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionServiceImpl implements PositionService {
    @Autowired
    PositionRepository positionRepository;
    @Override
    public List<Position> findAll() {
        return positionRepository.findAll();
    }
}
