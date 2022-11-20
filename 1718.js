// pa 1718 

// 1 C
// function differences(tn1, tn2) {
//     function helper(count, xs, ys) {
//         if (is_null(xs) || is_null(ys)) {
//             return count;
//         } else {
//             const x = head(xs);
//             const y = head(ys);
//             return equal(x, y)
//                   ? helper(count, tail(xs), tail(ys))
//                   : helper(count + 1, tail(xs), tail(ys));
//         }
//     }
//     return helper(0,tn1, tn2);
// }

// function differences(nt1, nt2) {
//     if (is_null(nt1)) {
//         return 0;
//     } else if (is_number(nt1)) {
//         return (nt1 === nt2) ? 0 : 1;
//     } else {
//         return differences(head(nt1), head(nt2))
//                 +
//               differences(tail(nt1), tail(nt2));
//     }
// }

// differences(list(4, null, list(4,6), 8),
//  list(5, null, list(4,7), 8)); // returns 2
 

// list(1,2,3) === list(1,2,3);

// 3C.

function enter_copies(arr, n, v, start) {
    for (let i = start; i < start + n; i = i + 1) {
        arr[i] = v;
    }
}

const l = list(1,2,3,4,5,3,6,7,8);

member(3, tail(member(3, l)));


// let some_array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// enter_copies(some_array, 4, 8, 2);
// some_array;
