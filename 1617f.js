// 16 17
// function mystery(xs) {
//  if (is_null(xs)) {
//  return pair(null, null);
//  } else {
//  let tmp = mystery(tail(xs));
//  let ys = pair(head(xs), tail(tmp));
//  let zs = head(tmp);
//  return pair(ys, zs);
//  }
// }
// let p = mystery(list(1, 2, 3));
// head(p);

// 1D.
function mutable_append(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(tail(xs))) {
        set_tail(xs, ys);
        return xs;
    } else {
        mutable_append(tail(xs), ys);
        return xs;
    }
}

const test = mutable_append(list(1,2,3), list(4,5));
test;

// 1E
function display_tree(tree) {
 if (is_null(tree)) {
 } else if (is_list(head(tree))) {
 display_tree(head(tree));
 display_tree(tail(tree));
 } else {
 display(head(tree));
 display_tree(tail(tree));
 }
}

function transform_tree(t) {
    if (is_null(t)) {
        return t;
    } else {
        const x = head(t);
        const reverse_wish = transform_tree(tail(t));
        if (is_list(x)) {
            return append(reverse_wish, list(transform_tree(x)));
        } else {
            return append(reverse_wish, list(x));
        }
    }
    // return reverse(map(x => is_list(x)
    //          ? transform_tree(x)
    //          : x,
    //          t));
}
let tree1 = list(1,2,3, list(4,5,6), 7, list(8, 9)); // a tree of numbers
let tree2 = transform_tree(tree1);
display_list(tree1);
display_list(tree2);
display_tree(tree1); // displays a sequence of numbers
display_tree(tree2); // displays a reverse of the above

const test3 = pair(1, ()=> pair(2, () => null));
stream_for_each(x => x + 1, test3);
test3;
