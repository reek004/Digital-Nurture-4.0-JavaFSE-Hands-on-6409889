import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class TestSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Create array of products with updated names
        Product[] products = {
                new Product(3, "Smartphone", "Electronics"),
                new Product(1, "Wireless Charger", "Accessories"),
                new Product(5, "Bluetooth Speaker", "Audio"),
                new Product(2, "Smartwatch", "Wearables"),
                new Product(4, "Tablet", "Electronics")
        };

        // === Linear Search ===
        System.out.println("=== Linear Search ===\n");
        System.out.println("Available products: Smartphone, Wireless Charger, Bluetooth Speaker, Smartwatch, Tablet");
        System.out.print("Enter product name to search: ");
        String nameInput = scanner.nextLine();

        Product result = SearchAlgo.linearSearch(products, nameInput);

        if (result != null) {
            System.out.println("Found: " + result);
        } else {
            System.out.println("Product with name '" + nameInput + "' not found.");
        }

        // === Binary Search ===
        System.out.println("\n=== Binary Search ===/n");

        // Sort products by ID for binary search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        System.out.println("Products sorted by ID:");
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.print("\nEnter product ID to search: ");
        int idInput = scanner.nextInt();

        result = SearchAlgo.binarySearch(products, idInput);

        if (result != null) {
            System.out.println("Found: " + result);
        } else {
            System.out.println("Product with ID " + idInput + " not found.");
        }

        scanner.close();
    }
}
