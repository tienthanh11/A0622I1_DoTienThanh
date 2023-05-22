package com.codegym.demo.repository;

import com.codegym.demo.model.Log;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface LogRepository extends PagingAndSortingRepository<Log, Long> {
}
