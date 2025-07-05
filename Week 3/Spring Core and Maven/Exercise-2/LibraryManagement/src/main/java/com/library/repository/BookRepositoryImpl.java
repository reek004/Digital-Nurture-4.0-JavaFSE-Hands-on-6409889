package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepositoryImpl implements BookRepository {
    private List<String> books = new ArrayList<>();
    
    @Override
    public void saveBook(String bookName) {
        books.add(bookName);
        System.out.println("Successfully saved book: " + bookName);
    }
    
    @Override
    public List<String> getAllBooks() {
        System.out.println("Retrieving all books from repository");
        return new ArrayList<>(books);
    }
}