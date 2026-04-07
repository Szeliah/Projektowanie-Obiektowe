package com.Zadanie03.service

import com.Zadanie03.model.User
import org.springframework.stereotype.Service


@Service
class AuthService {
    private val users = listOf(
        User("admin", "admin123", "Adam", 25),
        User("john", "password", "Jan", 35),
        User("ann", "1234", "Anna", 28)
    )

    fun authenticate(username: String, password: String): Boolean {
        return users.any { it.username == username && it.password == password }
    }

    fun getAllUsers(): List<User> {
        return users
    }
}
