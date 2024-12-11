package com.coffee.coffee.repository;

import com.coffee.coffee.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Integer> {
}