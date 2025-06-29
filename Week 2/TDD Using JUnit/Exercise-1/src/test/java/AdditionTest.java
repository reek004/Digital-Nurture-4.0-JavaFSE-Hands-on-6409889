import org.junit.Test;
import static org.junit.Assert.*;

public class AdditionTest {
    @Test
    public void testCase1(){
        Addition test = new Addition();
        assertEquals(5, test.add(2 , 3));
    }
    @Test
    public void testCase2(){
        Addition test = new Addition();
        assertEquals(28, test.add(12,16));
    }
    @Test
    public void testCase3(){
        Addition test = new Addition();
        assertEquals(8, test.add(-5,13));
    }

}
