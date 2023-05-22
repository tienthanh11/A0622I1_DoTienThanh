package com.codegym.demo.repository;

import com.codegym.demo.model.Gender;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GenderRepository extends PagingAndSortingRepository<Gender, Integer> {
}
