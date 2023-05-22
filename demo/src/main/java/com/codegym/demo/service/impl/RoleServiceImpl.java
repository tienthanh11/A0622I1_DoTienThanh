package com.codegym.demo.service.impl;

import com.codegym.demo.model.Role;
import com.codegym.demo.repository.RoleRepository;
import com.codegym.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository repository;

	@Override
	public Role findById(int id) {
		return repository.findById(id).orElse(null);
	}
}
