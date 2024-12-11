package com.coffee.coffee.repository;


import org.springframework.data.repository.CrudRepository;
import com.coffee.coffee.entity.User;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    public Optional<User> findByUsername(String username);
    public Optional<User> findByUsernameAndPassword(String username, String password);

    @Query("SELECT u FROM user WHERE u.authority = true ")
    public Optional<User> findAdmin();
}