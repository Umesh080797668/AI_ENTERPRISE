package com.enterprise.ai.core.controller;

import com.enterprise.ai.core.model.Document;
import com.enterprise.ai.core.model.User;
import com.enterprise.ai.core.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/documents")
@RequiredArgsConstructor
public class DocumentController {

    private final DocumentService service;

    @PostMapping("/upload")
    public ResponseEntity<Document> uploadDocument(
            @RequestParam("file") MultipartFile file,
            @AuthenticationPrincipal User user
    ) throws IOException {
        return ResponseEntity.ok(service.uploadDocument(file, user));
    }

    @GetMapping
    public ResponseEntity<List<Document>> getUserDocuments(
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(service.getUserDocuments(user.getId()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Document> getDocument(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(service.getDocument(id));
    }
}
