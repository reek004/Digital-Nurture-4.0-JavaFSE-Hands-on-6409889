### Understanding Recursive Algorithms

** What is Recursion? **  
Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller parts.  
In my forecasting tool, recursion is used to apply the compound growth formula repeatedly over a number of years.

** How Does Recursion Simplify the Problem? **  
Instead of using loops, I recursively calculate the future value:  
**FV = PV × (1 + r)^n**  
By calling the function again with updated parameters, the logic directly mirrors the mathematical expression.  
This makes the code shorter, cleaner, and easier to understand — especially for formula-based computations.

---

### Analysis

**Time Complexity of My Recursive Algorithm**  
The method `computeProjection()` makes one recursive call per year.  
- **Time Complexity:** `O(n)` where `n` is the number of years  
- **Space Complexity:** `O(n)` due to the call stack

Each call does constant-time work, but because each year creates a new call on the stack, the space and time grow linearly.

**How I Can Optimize This**  
Recursion is elegant but has limitations with large inputs (e.g., 1000+ years), as it can lead to stack overflow.

To make it efficient:
#### Convert to Iterative Version  
Instead of using recursion, I can compute the result with a simple loop:
```java
for (int i = 0; i < years; i++) {
    amount *= (1 + rate);
}
```
This reduces **space complexity to O(1)** while keeping **time complexity at O(n)**.

####  Use Memoization (if overlapping subproblems exist)  
For more complex models where I may call the same computation repeatedly, I can cache results to avoid redundant calculations.
