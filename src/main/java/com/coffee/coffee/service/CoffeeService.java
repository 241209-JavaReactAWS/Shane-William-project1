package com.coffee.coffee.service;
import com.coffee.coffee.repository.* ;
import com.coffee.coffee.model.* ;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoffeeService {
    private final CoffeeRepository coffeeRepository;

    @Autowired
    public CoffeeService(CoffeeRepository coffeeRepository){
        this.coffeeRepository = coffeeRepository;
    }
//Creating coffee
    public Coffee createCoffee(Coffee coffee){
        return coffeeRepository.save(coffee);
    }
//Find all kind of coffees
    public List<Coffee> findAllCoffee(){
        return coffeeRepository.findAll();
    }
// Find by id
    public Optional<Coffee> findCoffeeById(Integer id){
        return coffeeRepository.findById(id);
    }
// Deletes one type of coffee
    public int deleteCoffeeById(Integer id){
         coffeeRepository.deleteById(id);
        return 0;
    }
    // Update the coffee name
    public boolean updateCoffeeName(Integer id, String newName) {
        return coffeeRepository.findById(id)
                .map(coffee -> {
                    coffee.setName(newName);
                    coffeeRepository.save(coffee);
                    return true;
                })
                .orElse(false);
    }

    // Update the quantity of the coffee
    public boolean updateCoffeeQuantity(Integer id, Integer newQuantity) {
        return coffeeRepository.findById(id)
                .map(coffee -> {
                    coffee.setQuantity(newQuantity);
                    coffeeRepository.save(coffee);
                    return true;
                })
                .orElse(false);
    }

    // Update the description of the coffee
    public boolean updateCoffeeDescription(Integer id, String newDescription) {
        return coffeeRepository.findById(id)
                .map(coffee -> {
                    coffee.setDescription(newDescription);
                    coffeeRepository.save(coffee);
                    return true;
                })
                .orElse(false);
    }
}
