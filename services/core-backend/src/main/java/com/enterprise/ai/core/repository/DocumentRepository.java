package com.enterprise.ai.core.repository;

import com.enterprise.ai.core.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findAllByUploadedBy_Id(Long userId);
}
