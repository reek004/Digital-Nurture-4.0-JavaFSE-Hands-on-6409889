import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take user input for principal, growth rate, and number of years
        System.out.print("Enter principal amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual growth rate (e.g., 0.05 for 5%): ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int numYears = scanner.nextInt();
        
        scanner.close();
    
        double futureAmount = FinancialForecasting.computeProjection(principal, growthRate, numYears);
        System.out.printf("Projected Amount after %d years: INR %.2f\n", numYears, futureAmount);
    }
}