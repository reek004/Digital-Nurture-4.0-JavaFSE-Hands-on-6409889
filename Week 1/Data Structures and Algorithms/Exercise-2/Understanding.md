### Big O Notation?
Big O notation is an approach to determine how fast or slow an algorithm performs when input size grows.
It shows us what occurs to an algorithm's space or time complexity if we increase the amount of data.
Such as:

O(1) is constant time  it takes the same time no matter how much data you're working with.

O(n) means linear time — time grows in direct proportion to growth in data.

O(log n) signifies logarithmic time — time grows slowly even if data grows much.

### Why is it useful?
It allows us to examine multiple algorithms, and choose one that will be better when confronted with large data.
It indicates which algorithms perform faster and use fewer resources.

### Best, Average, and Worst Case Scenarios in Search .

Best Case: The object is immediately found (as in the first element).
Example: In Linear Search, this takes O(1) time.

Average Case: The item is somewhere in the middle.
Example: In Linear Search, this takes O(n/2) which is still O(n).

Worst Case: The object is not in the list or at the bottom.
Example: In Linear Search, this takes O(n) time.
This runs in O(log n) time for Binary Search.


### Time Complexity Comparison: Linear Search vs Binary Search

| Search Type     | Time Complexity | Notes                                      |
|-----------------|----------------|--------------------------------------------|
| Linear Search   | O(n)           | Checks each item one by one. Works on unsorted data. |
| Binary Search   | O(log n)       | Repeatedly divides the sorted array in half. Only works if the data is already sorted. |

**Summary:**
- **Linear Search** can be used on unsorted data but is slower for large datasets.
- **Binary Search** is much faster but requires the data to be sorted first.

### Which Algorithm is More Suitable and Why?
For an e-commerce platform, I believe binary search is more suitable, especially when the product list is sorted by ID or name.

#### Why do I prefer Binary Search?

Because it's much faster when dealing with large amounts of data.
In an e-commerce system, we often have thousands of products, and performance is important for a good user experience.
If I sort the product list once, I can then use binary search multiple times without needing to sort again.
This makes searches efficient and quick, which is ideal for such platforms.
