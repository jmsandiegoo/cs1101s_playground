// Lecture 9


// Linear Search Array
/* 
iterate through each elem. and if === break loop and return true
*/
function linear_search(A, value) {
    const len = array_length(A);
    let i = 0;
    while (i < len) {
        if (A[i] === value) {
            break;
        }
        i = i + 1;
    }
    return (i < len);
}

// Binary Search Array
function binary_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    
    while (low <= high) {
        const mid = math_floor((low + high) / 2);
        if (A[mid] === v) {
            break;
        } else if (A[mid] < v) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return (low <= high);
}