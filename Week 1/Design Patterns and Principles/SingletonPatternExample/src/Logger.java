public class Logger {
    //Private Static Logger Instance
    private static Logger instance;

    private Logger(){
        // Private constructor to prevent instantiation from outside
    }

    //Global accessor
    public static Logger getInstance(){
        if(instance==null){
            instance = new Logger();
        }
        return instance;
    }

    // example method
    public void log(String message) {
        System.out.println("LOG : " + message);
    }


}
