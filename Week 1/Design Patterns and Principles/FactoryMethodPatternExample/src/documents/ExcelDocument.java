package documents;

public class ExcelDocument implements Document {
     @Override
    public String getContent() {
        return "xlsx";
    }

    @Override
    public String getType() {
        return "Excel Document";
    }
}
