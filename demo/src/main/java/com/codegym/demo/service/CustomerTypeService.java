package com.codegym.demo.service;


import com.codegym.demo.model.CustomerType;

public interface CustomerTypeService {
    Iterable<CustomerType> findAll();
    CustomerType findById(int id);
    void save(CustomerType customerType);
    void remove(int id);
}
