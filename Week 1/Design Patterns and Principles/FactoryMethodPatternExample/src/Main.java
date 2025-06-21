import factories.*;
import documents.Document;

public class Main {
    public static void main(String[] args) {
        // Create a Word document 
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDocument = wordFactory.createDocument();
        System.out.println("Created a " + wordDocument.getType() + " with content: " + wordDocument.getContent());
        
        // Create a Pdf document 
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDocument = pdfFactory.createDocument();
        System.out.println("Created a " + pdfDocument.getType() + " with content: " + pdfDocument.getContent());

        // Create an Excel document
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDocument = excelFactory.createDocument();
        System.out.println("Created a " + excelDocument.getType() + " with content: " + excelDocument.getContent());
    }
    
}
