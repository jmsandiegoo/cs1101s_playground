// Reflection 6
// 1

function insert_cmp(x, xs, cmp) {
    return is_null(xs)
    ? list(x)
    : cmp(x, head(xs))
    ? pair(x, xs)
    : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs)
    ? xs
    : insert_cmp(head(xs),
    insertion_sort_cmp(tail(xs), cmp),
    cmp);
}

function increase_cmp(x, y) {
    return y >= x;
}

function decerease_cmp(x, y) {
    return x >= y;
}

function reverse_cmp(x, y) {
    return false;
}

// even then sort

function even_odd_cmp(x, y) {
    // even
    if ((x % 2 === 0) && (y % 2 === 0)) {
        return increase_cmp(x, y);
        // odd
    } else if (x % 2 !== 0 && y % 2 !== 0){ 
        return decerease_cmp(x, y);
    } else if (x % 2 !== 0 || y % 2 === 0 ) {
        // even & odd
        return false;
    } else {
        return true;
    }
}

const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);

insertion_sort_cmp(xs, even_odd_cmp);

// Question 2

// half, rounded downwards
function middle(n) {
 return math_floor(n / 2);
}
// put the first n elements of xs into a list
function take(xs, n) {
 // ...
}
// drop the first n elements from the list and return the rest
function drop(xs, n) {
 // ...
}
// merge two sorted lists into one sorted list
function merge(xs, ys) {
     if (is_null(xs)) {
        return ys;
     } else if (is_null(ys)) {
        return xs;
     } else {
        const x = head(xs);
        const y = head(ys);
        return x < y
        ? pair(x, merge(tail(xs), ys))
        : pair(y, merge(xs, tail(ys)));
     }
}

function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)),
                     merge_sort(drop(xs, mid)));
    }
}
