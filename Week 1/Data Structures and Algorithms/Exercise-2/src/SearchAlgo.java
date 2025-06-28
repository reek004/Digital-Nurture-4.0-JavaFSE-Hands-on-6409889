public class SearchAlgo {
    public static Product linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equals(name)) {
                return products[i];
            }
        }

        return null; // indicates not found
    }

    public static Product binarySearch(Product[] products, int id) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int currentId = products[mid].getProductId();

            if (currentId == id) return products[mid];
            else if (currentId < id) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    }
}
