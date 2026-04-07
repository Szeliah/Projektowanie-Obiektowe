package com.Zadanie03.controller

import com.Zadanie03.model.User
import com.Zadanie03.model.LoginRequest
import com.Zadanie03.service.AuthService

import org.springframework.web.bind.annotation.*

@RestController
class UserController(private val authService: AuthService) {

    @GetMapping("/users")
    fun getUsers(): List<User> {
        return authService.getAllUsers()
    }

    @PostMapping("/login") 
    fun login(@RequestBody req: LoginRequest): Boolean {
        return authService.authenticate(req.username, req.password)
    }
}