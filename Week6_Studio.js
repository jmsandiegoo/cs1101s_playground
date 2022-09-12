// Question 1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

// Question 2
function remove_duplicates(lst) {
    const filter_list = build_list((n) => 
                        length(filter((x) => list_ref(lst, x) === 
                        list_ref(lst, n), enum_list(0, n))) === 1, 
                      length(lst));

    return accumulate((x, y) => list_ref(filter_list, x) ? pair(list_ref(lst, x), y) : y, 
                      null, enum_list(0, length(lst) - 1));
}

// Question 3
function makeup_amount(x, coins) { 
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = ...
        // Combinations that do not use the head coin // for the remaining amount.
        const combi_B = ...
        // Combinations that use the head coin.
        const combi_C = ...
        return append(combi_A, combi_C);
    } 
}