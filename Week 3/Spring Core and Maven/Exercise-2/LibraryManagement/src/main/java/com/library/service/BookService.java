package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;

public class BookService {
    private BookRepository bookRepository;

    // Setter for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void registerBook(String bookName) {
        if (bookName == null || bookName.trim().isEmpty()) {
            System.out.println("Error: Book name cannot be empty");
            return;
        }
        bookRepository.saveBook(bookName.trim());
        System.out.println("Book registration completed: " + bookName);
    }
    
    public void displayAllBooks() {
        System.out.println("Fetching all books from library...");
        List<String> books = bookRepository.getAllBooks();
        if (books.isEmpty()) {
            System.out.println("No books available in the library");
        } else {
            System.out.println("Available books:");
            for (int i = 0; i < books.size(); i++) {
                System.out.println((i + 1) + ". " + books.get(i));
            }
        }
    }
}
