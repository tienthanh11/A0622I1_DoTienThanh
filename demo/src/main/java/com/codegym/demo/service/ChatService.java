package com.codegym.demo.service;

import com.codegym.demo.model.Chat;

import java.util.List;

public interface ChatService {
    List<Chat> findAll();
    void save(Chat chat);
}
