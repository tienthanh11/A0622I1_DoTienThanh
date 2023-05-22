package com.codegym.demo.repository;

import com.codegym.demo.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface PositionRepository extends JpaRepository<Position, Integer> {
}
