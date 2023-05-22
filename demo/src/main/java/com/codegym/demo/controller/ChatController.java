package com.codegym.demo.controller;

import com.codegym.demo.model.Chat;
import com.codegym.demo.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class ChatController {
    @Autowired
    ChatService chatService;

    @GetMapping("/chat-box")
    public String index(Model model){
        List<Chat> chats = chatService.findAll();
        model.addAttribute("chats", chats);
        model.addAttribute("chat", new Chat());
        return "chat-box";
    }

//    @GetMapping("chat")
//    public String showChat(Model model){
//        model.addAttribute("chat", new Chat());
//        return "chat";
//    }

    @PostMapping("chat")
    public String chat(@ModelAttribute("chat") Chat chat, Model model){
        Object obj = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)obj).getUsername();
        chat.setNameUser(username);
        System.out.println(((UserDetails)obj).getUsername());
        chatService.save(chat);
        model.addAttribute("chat", new Chat());
        return "redirect:/chat-box";
    }
}
