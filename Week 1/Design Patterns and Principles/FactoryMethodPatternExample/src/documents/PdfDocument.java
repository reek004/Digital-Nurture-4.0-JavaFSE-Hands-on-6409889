package documents;

public class PdfDocument implements Document {

    @Override
    public String getContent() {
        return "pdf";
    }

    @Override
    public String getType() {
        return "PDF Document";
    }
    
}
