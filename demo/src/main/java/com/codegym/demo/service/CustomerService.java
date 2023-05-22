package com.codegym.demo.service;

import com.codegym.demo.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomerService {
    Page<Customer> findAll(Pageable pageable);
    List<Customer> findAll();
    Customer findById(String id);
    Customer create(Customer customer) throws DuplicateIDException;
    Customer edit(Customer customer) throws DuplicateIDException;
    Customer remove(String id);
    boolean existId(String id);
    Page<Customer> findAllByCustomerNameContaining(String name, Pageable pageable);

}
