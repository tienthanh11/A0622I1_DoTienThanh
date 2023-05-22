package com.codegym.demo.service;

import com.codegym.demo.model.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LogService {
    public Page<Log> findAll(Pageable pageable);
    public Log findById(Long id);
    public void save(Log log);
    public void remove(Long id);
}
