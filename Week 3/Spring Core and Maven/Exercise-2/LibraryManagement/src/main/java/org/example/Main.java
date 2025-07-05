package org.example;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class Main {
    public static void main(String[] args) {
        // Load the Spring application context
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        try {
            // Get the BookService bean
            BookService bookService = (BookService)context.getBean("bookService");

            // Test the service methods
            bookService.registerBook("Think and Grow Rich");
            bookService.registerBook("Psychology of Money");
            
            // Display all books
            bookService.displayAllBooks();
        } finally {
            // Close the context to prevent resource leak
            context.close();
        }
    }
}