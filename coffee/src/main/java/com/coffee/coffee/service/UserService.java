package com.coffee.coffee.service;
import org.springframework.stereotype.Service;
import com.coffee.coffee.repository.UserRepository;
import com.coffee.coffee.model.User;


public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User newUser) {
        return userRepository.save(newUser);

    }

    public User login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password).orElse(null);
    }



}