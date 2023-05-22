package com.codegym.demo.service.impl;

import com.codegym.demo.model.Chat;
import com.codegym.demo.repository.ChatRepository;
import com.codegym.demo.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {
    @Autowired
    ChatRepository chatRepository;

    @Override
    public List<Chat> findAll() {
        return chatRepository.findAll();
    }

    @Override
    public void save(Chat chat) {
        chatRepository.save(chat);
    }
}
