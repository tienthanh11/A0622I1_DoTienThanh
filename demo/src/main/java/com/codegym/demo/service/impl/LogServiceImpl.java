package com.codegym.demo.service.impl;

import com.codegym.demo.model.Log;
import com.codegym.demo.repository.LogRepository;
import com.codegym.demo.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class LogServiceImpl implements LogService {
    @Autowired
    LogRepository logRepository;
    @Override
    public Page<Log> findAll(Pageable pageable) {
        return logRepository.findAll(pageable);
    }

    @Override
    public Log findById(Long id) {
        return logRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Log log) {
        logRepository.save(log);
    }

    @Override
    public void remove(Long id) {
        logRepository.deleteById(id);
    }
}
