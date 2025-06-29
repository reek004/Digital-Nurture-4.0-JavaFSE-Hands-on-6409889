import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.* ;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    @Mock
    private ExternalApi mockApi;

    private MyService service;

    @BeforeEach
    public void setUp() {
        System.out.println("Setting up MyService test with mock API");
        service = new MyService(mockApi);
    }

    @Test
    public void testFetchDataSuccess() {
        System.out.println("Testing successful data fetch...");
        when(mockApi.getData()).thenReturn("Mock Data");

        String result = service.fetchData();
        System.out.println("Result: " + result);

        assertEquals("Mock Data", result, "Should return mocked data");

        // Verify: Ensure getData was called ONLY ONCE
        verify(mockApi, times(1)).getData();
        System.out.println("✓ Test passed - data fetched successfully");
    }

    @Test
    public void testFetchDataNullResponse() {
        System.out.println("Testing null response handling...");
        when(mockApi.getData()).thenReturn(null);

        String result = service.fetchData();
        System.out.println("Result: " + result);

        assertEquals("No data available", result, "Should handle null response");

        verify(mockApi, times(1)).getData();
        System.out.println("✓ Test passed - null response handled correctly");
    }

    @Test
    void testFetchDataThrowsRuntimeException() {
        System.out.println("Testing exception handling...");
        RuntimeException exception = new RuntimeException("API failure");
        when(mockApi.getData()).thenThrow(exception);

        RuntimeException thrown = assertThrows(RuntimeException.class, () -> {
            service.fetchData();
        });
        System.out.println("Exception caught: " + thrown.getMessage());

        assertSame(exception, thrown, "Should throw the same RuntimeException object");
        assertEquals("API failure", thrown.getMessage());
        verify(mockApi, times(1)).getData();
        System.out.println("✓ Test passed - exception handled correctly");
    }
}