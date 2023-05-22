package com.codegym.demo.repository;

import com.codegym.demo.model.EducationDegree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface EducationDegreeRepository  extends JpaRepository<EducationDegree, Integer> {
}
