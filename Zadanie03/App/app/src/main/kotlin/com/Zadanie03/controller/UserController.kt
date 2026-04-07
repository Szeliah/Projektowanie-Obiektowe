package com.Zadanie03.controller

import com.Zadanie03.model.User
import com.Zadanie03.model.LoginRequest
import com.Zadanie03.service.AuthService

import org.springframework.web.bind.annotation.*
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus

@RestController
class UserController(private val authService: AuthService) {

    @GetMapping("/users")
    fun getUsers(): ResponseEntity<List<User>> {
        if (authService.isLoggedIn()) {
            return ResponseEntity.ok(authService.getUsers())
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null)
    }

    @PostMapping("/login") 
    fun login(@RequestBody req: LoginRequest): ResponseEntity<String> {
        
        val result = authService.authenticate(req.username, req.password)

        if (result) {
            return ResponseEntity.ok("You are logged in as ${req.username}")
        } else {
           return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password")
        }

    }

    @GetMapping("/logout") 
    fun logout(): ResponseEntity<String> {
        
        if (authService.isLoggedIn()) {
            authService.logout()
            return ResponseEntity.ok("Logged out")
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Already logged out")

    }

}