import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.BeforeClass;
import org.junit.AfterClass;
import static org.junit.Assert.*;


public class CalculatorTest {

    private Calculator calculator;

    @BeforeClass
    public static void setUpClass() {
        System.out.println("Setting up Calculator test suite");
        // Initialize any class-level resources here
    }

    @Before
    public void setUp() {
        // Arrange: Initialize the Calculator instance before each test
        calculator = new Calculator();
        System.out.println("Calculator instance created for test");
    }

    @After
    public void tearDown() {
        // Clean up by setting calculator to null after each test
        calculator = null;
        System.out.println("Calculator instance cleaned up after test");
    }

    @AfterClass
    public static void tearDownClass() {
        System.out.println("Calculator test suite completed");
        // Clean up any class-level resources here
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 5;
        int b = 3;
        int expected = 8;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals("Adding " + a + " and " + b + " should equal " + expected,
                expected, result);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 5;
        int b = 3;
        int expected = 2;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals("Subtracting " + b + " from " + a + " should equal " + expected,
                expected, result);
    }

    @Test
    public void testDivide() {
        // Arrange
        double a = 6.0;
        double b = 2.0;
        double expected = 3.0;

        // Act
        double result = calculator.divide(a, b);

        // Assert
        assertEquals("Dividing " + a + " by " + b + " should equal " + expected,
                expected, result, 0.0001);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        // Arrange
        double a = 5.0;
        double b = 0.0;

        // Act & Assert (exception expected)
        calculator.divide(a, b);

        // If we reach here, the test fails
        fail("Expected ArithmeticException for division by zero");
    }
}