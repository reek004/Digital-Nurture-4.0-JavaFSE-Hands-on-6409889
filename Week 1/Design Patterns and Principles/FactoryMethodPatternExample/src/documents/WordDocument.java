package documents;

public class WordDocument implements Document {
     @Override
    public String getContent() {
        return "docx";
    }

    @Override
    public String getType() {
        return "Word Document";
    }
}