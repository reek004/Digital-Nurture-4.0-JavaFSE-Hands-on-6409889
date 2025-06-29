import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TestMyService {

    @Mock
    private ExternalApi mockApi;

    private MyService service;

    @BeforeEach
    public void setUp() {
        System.out.println("Setting up TestMyService with mock API");
        service = new MyService(mockApi);
    }

    @Test
    public void testVerifyInteraction() {
        System.out.println("Testing method interaction verification...");
        service.fetchData();

        // HERE we VERIFY: was mockApi.getData called with these arguments?
        verify(mockApi, times(1)).getData("Reek", 4);
        System.out.println("Verified: mockApi.getData called once with arguments ('Reek', 4)");
    }
}