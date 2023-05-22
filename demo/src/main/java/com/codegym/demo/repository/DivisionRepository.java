package com.codegym.demo.repository;

import com.codegym.demo.model.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface DivisionRepository extends JpaRepository<Division, Integer> {
}
