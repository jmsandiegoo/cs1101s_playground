// Type your program in here
function every_second(items) {
    return is_null(items) || is_null(tail(items))
           ? null
           : pair(head(tail(items)), every_second(tail(tail(items))));
}

every_second(list("a", "x", "b", "y", "c", "z", "d", "e"));

function every_type(items, type) {
    if ( is_null(items) || (is_null(tail(items)) && type==="odd") ) {
        return null;
        
    } else if ( is_null(tail(items)) && type==="even" ) {
        return pair(head(items), every_type(tail(items), type));
    } else if ( type === "even" ) {
        return pair(head(items), every_type(tail(tail(items)), type));
    } else {
        return pair(head(tail(items)), every_type(tail(tail(items)), type));
    }
}

const items = list(1,2,3,4,5,6,7);

every_type(items, "odd");

function sum_type(item) {
    return  is_null(item)
            ? 0
            : head(item) + sum_type(tail(item));
}

function sums(items) {
    return pair(sum_type(every_type(items, "even")), 
                pair(sum_type(every_type(items, "odd")), null));
}

sums(items);


// [9, [6, null]]
/*
    pair(head(current) + head(tail(items)) )
*/