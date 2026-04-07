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

    private var currentUser: String? = null

    fun authenticate(username: String, password: String): Boolean {
        val result =  users.any { it.username == username && it.password == password }

        if (result) {
            currentUser = username
            return true;
        }
        else {
            currentUser = null
            return false;
        }
    }

    fun getUsers(): List<User> {
        return users
    }

    fun isLoggedIn(): Boolean {
        return currentUser != null
    }

    fun logout() {
        currentUser = null
    }    

}
