import org.junit.Test;
import static org.junit.Assert.*;

public class Assertions{
    @Test
    public void testAssertEquals() {
        // Assert equals (checks if two values are equal)
        assertEquals("7 + 8 should equal 15", 15, 7 + 8);
    }

    @Test
    public void testAssertTrue() {
        // Assert true (checks if condition is true)
        assertTrue("10 should be greater than 7", 10 > 7);
    }

    @Test
    public void testAssertFalse() {
        // Assert false (checks if condition is false)
        assertFalse("8 should not be less than 4", 8 < 4);
    }

    @Test
    public void testAssertNull() {
        // Assert null (checks if object is null)
        String nullString = null;
        assertNull("String should be null", nullString);
    }

    @Test
    public void testAssertNotNull() {
        // Assert not null (checks if object is not null)
        String nonNullString = "Hello World";
        assertNotNull("String should not be null", nonNullString);
    }

    @Test
    public void testAssertSame() {
        // Assert same (checks if two objects are the same instance)
        Integer num = 100;
        Integer sameNum = num;
        assertSame("Should be the same Integer object", num, sameNum);
    }

    @Test
    public void testAssertNotSame() {
        // Assert not same (checks if two objects are not the same instance)
        Integer num1 = Integer.valueOf(42);
        Integer num2 = Integer.valueOf(43); // Different values to ensure different objects
        assertNotSame("Should be different Integer objects", num1, num2);
    }

    @Test
    public void testAssertArrayEquals() {
        // Assert array equals (compares two arrays for equality)
        String[] expected = {"apple", "banana", "cherry"};
        String[] actual = {"apple", "banana", "cherry"};
        assertArrayEquals("String arrays should be equal", expected, actual);
    }

    @Test(expected = StringIndexOutOfBoundsException.class)
    public void testAssertThrows() {
        // Test that expected exception is thrown (JUnit 4 way)
        String str = "Hello";
        char ch = str.charAt(10); // This should throw StringIndexOutOfBoundsException
    }
}