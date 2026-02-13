package com.enterprise.ai.core.controller;

import com.enterprise.ai.core.model.DocumentStatus;
import com.enterprise.ai.core.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/internal/documents")
@RequiredArgsConstructor
public class InternalController {

    private final DocumentService service;

    // This endpoint should be protected or only accessible within the internal network
    // For now, we rely on network isolation (docker internal network) or we can add a simple API key check
    @PostMapping("/{id}/status")
    public ResponseEntity<Void> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> payload
    ) {
        String statusStr = payload.get("status");
        if (statusStr != null) {
            try {
                DocumentStatus status = DocumentStatus.valueOf(statusStr.toUpperCase());
                service.updateDocumentStatus(id, status);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.ok().build();
    }
}
