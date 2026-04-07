package com.Zadanie03.service

import com.Zadanie03.model.User
import org.springframework.stereotype.Service


@Service
class AuthService {
    private val users = listOf(
        User("admin", "admin123"),
        User("john", "password"),
        User("anna", "1234")
    )

    fun authenticate(username: String, password: String): Boolean {
        return users.any { it.username == username && it.password == password }
    }

    fun getAllUsers(): List<User> {
        return users
    }
}
