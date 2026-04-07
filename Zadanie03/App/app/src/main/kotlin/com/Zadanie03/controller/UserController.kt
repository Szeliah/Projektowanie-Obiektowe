package com.Zadanie03.controller

import com.Zadanie03.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController {

    private val users = listOf(
        User("Bartek", "1234"),
        User("Adam", "adam1234"),
        User("Zbyszek", "haslo")
    )

    @GetMapping("/users")
    fun getUsers(): List<User> {
        return users
    }
}