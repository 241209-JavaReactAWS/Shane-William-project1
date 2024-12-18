package com.coffee.coffee.repository;

import com.coffee.coffee.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CoffeeRepository extends JpaRepository<Coffee, Integer> {
    Optional<Coffee> findByName(String name);
}