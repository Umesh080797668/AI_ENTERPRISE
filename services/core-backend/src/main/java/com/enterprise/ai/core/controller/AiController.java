package com.enterprise.ai.core.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/ai")
@RequiredArgsConstructor
public class AiController {

    private final RestTemplate restTemplate;

    @Value("${application.ai-engine.url}")
    private String aiEngineUrl;

    @PostMapping("/query")
    public ResponseEntity<Object> query(@RequestBody Map<String, Object> queryRequest, @AuthenticationPrincipal UserDetails user) {
        // Here you could log the query, check quotas, etc. using the user details
        
        String url = aiEngineUrl + "/query";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(queryRequest, headers);
        
        // Proxy the request to the AI Engine
        try {
            ResponseEntity<Object> response = restTemplate.postForEntity(url, request, Object.class);
            return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
