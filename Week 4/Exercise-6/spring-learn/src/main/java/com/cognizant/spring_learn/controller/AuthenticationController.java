package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

    @RestController
    public class AuthenticationController {

        @Autowired
        private JwtUtil jwtUtil;

        @GetMapping("/authenticate")
        public TokenResponse authenticate(HttpServletRequest request) {
            String authHeader = request.getHeader("Authorization");
            if (authHeader == null || !authHeader.startsWith("Basic ")) {
                throw new RuntimeException("Missing or invalid Authorization header.");
            }

            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] userAndPass = credentials.split(":", 2);

            if (!"user".equals(userAndPass[0]) || !"pwd".equals(userAndPass[1])) {
                throw new RuntimeException("Invalid credentials");
            }

            String token = jwtUtil.generateToken(userAndPass[0]);
            return new TokenResponse(token);
        }

        record TokenResponse(String token) {}
    }