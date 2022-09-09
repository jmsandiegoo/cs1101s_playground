function accumulate_tree(map_func, binary_func, initial, tree) {
    if (is_null(tree)) {
        return initial;
    } else { 
        if (is_list(head(tree))) {
            return binary_func(
                accumulate_tree(map_func, binary_func, initial, head(tree)), 
                accumulate_tree(map_func, binary_func, initial, tail(tree)));
        } else {
            return binary_func(map_func(head(tree)), accumulate_tree(map_func, binary_func, initial, tail(tree)));
        }
    }
}

const tree = list(1, list(2, list(3,4),5), list(6,7));

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

tree_sum(tree);
