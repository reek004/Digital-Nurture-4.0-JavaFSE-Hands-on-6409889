package com.library.repository;

import java.util.List;

public interface BookRepository {
    void saveBook(String bookTitle);
    List<String> getAllBooks();
}
