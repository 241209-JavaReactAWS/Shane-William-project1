package com.coffee.coffee.entity;
import javax.persistence.*;

@Entity
@Table(name ="user")
public class User {

    @Column(name="userId")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO);
    private Integer userId;

    /*
    User field for username login credential.
     */
    @Column(name="username")
    private String username;

    /*
    User field for password login credential.
     */
    @Column(name="password")
    private String password;

    /*
    User field for admin status.
     */

    @Column(name="authority")
    private boolean authority;

    /*
    Default no args constructor
     */
    public User() {}

    public User(String username, String password, boolean authority) {
        this.username = username;
        this.password = password;
        this.authority = authority;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() { return this.username; }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getAuthority() { return authority; }

    public void setAuthority(boolean authority) { this.authority = authority;}
}