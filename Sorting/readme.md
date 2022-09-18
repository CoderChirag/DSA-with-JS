# Sorting Algorithms Comparison

| Sorting Algo       | Time Complexity (Best)     | Time Complexity (Average) | Time Complexity (Worst) | Adaptive\* | Stable\* | Space Complexity |
| ------------------ | -------------------------- | ------------------------- | ----------------------- | ---------- | -------- | ---------------- |
| **Bubble Sort**    | O(n)                       | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | Yes        | Yes      | O(1)             |
| **Selection Sort** | O(n<sup>2</sup>)           | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | No         | Yes      | O(1)             |
| **Insertion Sort** | O(n)                       | O(n<sup>2</sup>)          | O(n<sup>2</sup>)        | Yes        | Yes      | O(1)             |
| **Merge Sort**     | O(n logn)                  | O(n logn)                 | O(n logn)               | No         | Yes      | O(n + logn)      |
| **Quick Sort**     | O(n logn)                  | O(n logn)                 | O(n<sup>2</sup>)        | No         | No       | O(logn)          |
| **Radix Sort**     | O(nk), n=no. of max digits | O(nk)                     | O(nk)                   | No         | Yes      | O(n+k)           |

\***Adaptive :** Takes low time for already sorted elements.
<br>

\***Stable :** In case of duplicates, order is preserved.
