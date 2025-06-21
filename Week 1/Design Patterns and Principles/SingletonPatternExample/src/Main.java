
public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Logging via logger1");
        logger2.log("Logging via logger2");

        /* Should print 'true' because both refs point to the same instance */
        System.out.println("logger1 and logger2 are the same instance? " + (logger1 == logger2));
    }
}