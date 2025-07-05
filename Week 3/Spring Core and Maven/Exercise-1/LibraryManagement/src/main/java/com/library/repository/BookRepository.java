package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    private List<String> books = new ArrayList<>();
    
    public void saveBook(String bookName) {
        books.add(bookName);
        System.out.println("Successfully saved book: " + bookName);
    }
    
    public List<String> getAllBooks() {
        System.out.println("Retrieving all books from repository");
        return new ArrayList<>(books);
    }
}