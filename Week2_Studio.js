// Question 1
function biggie_size(combo) {
    return combo >= 1 && combo <=4 ? combo + 4 : -1;
}

biggie_size(1);

// Question 2
function unbiggie_size(biggieSize) {
    return biggieSize >= 5 && biggieSize <= 8 ? biggieSize - 4 : -1;
}

unbiggie_size(1);

// Question 3
function is_biggie_size(combo) {
    return combo > 4;
}

// Question 4
function combo_price(combo) {
    is_biggie_size(combo) ? (combo - 4) * 
    return combo * 1.17
}


// Question 5

// Question 6

// Question 7


// Question 8
function other_combos(otherCombos) {
    return math_floor(otherCombos / 10);
}

// other_combos(7);