function d_filter(pred, xs) {
    let first_occurence = false;
    let recent_pointer = xs;
    for (let T = xs; !is_null(T); T = tail(T)) {
        display(head(T));
        if (pred(head(T))) {
            if (first_occurence) {
                xs = T;
                first_occurence = true;
                recent_pointer = xs;
            } else {
                set_tail(recent_pointer, T);
                recent_pointer = T;
            }
        }
        else {
            set_tail(recent_pointer,tail(T));
        }
    }
    return xs;
}

const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
const V = d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
//L; // What is L now?
V;

// // if true

// // else

// // remove?


// let a = 10;
// function foo(x) {
//     let b = 0;
//     function goo(x) {
//         let a = 30;
//         if (x <= 2) {
//             a = a + x;
//             b = b + x;
//         // Breakpoint #4
//         } else {
//         // Breakpoint #3
//             goo(x - 1);
//         }
//     }
//     a = a + x;
//     b = b + x;
//     // Breakpoint #2
//     goo(3);
// }
// // Breakpoint #1
// foo(1);
// // Breakpoint #5
// display('lmao');