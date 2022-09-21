// Type your program in here!
// Exercise 1.30
function sum(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) + result);
    }
    return iter(a, 0);
}

//Exercise 1.31
function product(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * product(term, next(a), next, b);
}

function procuct_iter(term, a, next, b) {
    const iter = (a, result) => {
        return a > b
               ? result
               : iter(next(a), term(a) * result);
    }
    return iter(a, 1);
}

// Exercise 1.32
function accumulate(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value;
           : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
    return iter(a, result) {
        return a > b
               ? result
               : iter(next(a), combiner(term(a), result));
    }
    return iter(a, null_value);
}

