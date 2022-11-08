// // Type your program in here!
// // Instructions for students who are using this for practice:
// //
// // (1) Copy and paste this entire file into the editor of Source Academy
// //     Playground at https://sourceacademy.nus.edu.sg/playground
// // (2) Write your solution for each task in the Source Academy Playground.
// // (3) Run the program to test your solution on the given testcases.


// ////////////////////////////////////////////////////////////
// // Question 2A
// ////////////////////////////////////////////////////////////

// function all_different(nums) {
    
//     // WRITE HERE.
//     return accumulate((x, s) => length(filter((y) => y === x, nums)) > 1 ? false : s, true, nums);

// }



// ////////////////////////////////////////////////////////////
// // Question 2B
// ////////////////////////////////////////////////////////////

// function is_valid_toto_set(nums, n, min, max) {

//     // WRITE HERE.
//     return length(nums) === n &&
//           all_different(nums) &&
//           accumulate((x, s) => (x < min || x > max) ? false : s, true, nums);
// }

// ////////////////////////////////////////////////////////////
// // Question 2C
// ////////////////////////////////////////////////////////////

// function num_of_matches(numsA, numsB) {
//     // WRITE HERE.
//     return accumulate((x, counter) => length(filter((y) => y === x, numsB)) >= 1 ? counter + 1 : counter, 0, numsA); 
// }

// ////////////////////////////////////////////////////////////
// // Question 2D
// ////////////////////////////////////////////////////////////

// function check_winning_group(bet_nums, draw_nums, extra_num) {
//     // WRITE HERE.
//     const n = length(draw_nums);
//     const matches = num_of_matches(bet_nums, draw_nums);
//     const is_extra_match = num_of_matches(bet_nums, list(extra_num)) >= 1 ? true : false;
//     return matches === n
//           ? 1
//           : matches === n - 1
//           ? is_extra_match ? 2 : 3
//           : matches === n - 2
//           ? is_extra_match ? 4 : 5
//           : 0;
// }

// // winning_set_1
// // winning_set_2
// // winning_set


// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////


// //===========================================================
// // This function is provided for running the testcases
// // in the Source Academy Playground.
// // They are NOT part of the actual testing facility provided
// // in the actual Practical Assessment.
// //===========================================================
// function assert(f, test_name, fnames) {
//     display(test_name + ": " + (f() ? "PASS" : "FAIL"));
// }
// //===========================================================



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2A
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const nums = list(23);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T1",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 5, 1, 6, 7, 4, 3);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T2",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 6, 1, 7, 6, 4, 3);
//         return equal(all_different(nums), false);
//     },
//     "Q2A-T3",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(3, 2);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T4",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(3, 2, 1, 9, 8);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T5",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 6, 3, 7, 6, 6, 3, 1);
//         return equal(all_different(nums), false);
//     },
//     "Q2A-T6",
//     ['all_different']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2B
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const nums = list(5, 1, 8, 49);
//         const n = 6;
//         const min = 1;
//         const max = 49;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T1",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 2, 31, 30, 3, 15);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T2",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 8, 14, 30, 3, 8);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T3",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 8, 14, 30, 3, 15);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), true);
//     },
//     "Q2B-T4",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(40, 20, 30, 15, 10);
//         const n = 5;
//         const min = 10;
//         const max = 40;
//         return equal(is_valid_toto_set(nums, n, min, max), true);
//     },
//     "Q2B-T5",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(40, 20, 30, 15, 40);
//         const n = 5;
//         const min = 10;
//         const max = 40;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T6",
//     ['is_valid_toto_set']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2C
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40);
//         const numsB = list(3, 29, 40, 15, 20 );
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T1",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsB = list(23, 21, 30, 15, 40);
//         const numsA = list(3, 29, 40, 15, 20);
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T2",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40);
//         const numsB = list(31, 29, 41, 16, 20);
//         return equal(num_of_matches(numsA, numsB), 0);
//     },
//     "Q2C-T3",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40, 4, 2, 1);
//         const numsB = list(1, 21, 23, 30, 4, 15, 2, 40);
//         return equal(num_of_matches(numsA, numsB), 8);
//     },
//     "Q2C-T4",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(2, 1, 30, 15);
//         const numsB = list(31, 29, 41, 16);
//         return equal(num_of_matches(numsA, numsB), 0);
//     },
//     "Q2C-T5",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(2, 1, 30, 15);
//         const numsB = list(15, 29, 2, 16);
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T6",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40, 4, 2, 1, 35);
//         const numsB = list(1, 21, 23, 35, 30, 4, 15, 2, 40);
//         return equal(num_of_matches(numsA, numsB), 9);
//     },
//     "Q2C-T7",
//     ['num_of_matches']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2D
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 23, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 1);
//     },
//     "Q2D-T1",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 27, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
//     },
//     "Q2D-T2",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 3);
//     },
//     "Q2D-T3",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 27, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 4);
//     },
//     "Q2D-T4",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 37, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 5);
//     },
//     "Q2D-T5",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 37, 1, 49, 17, 27);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
//     },
//     "Q2D-T6",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(21, 32, 1, 49, 27, 15, 3);
//         const draw_nums = list(21, 30, 1, 49, 27, 15, 3);
//         const extra_num = 32;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
//     },
//     "Q2D-T7",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(41, 37, 2, 48, 17, 27);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
//     },
//     "Q2D-T8",
//     ['check_winning_group']
// );
// Instructions for students who are using this for practice:
//
// (1) Copy and paste this entire file into the editor of Source Academy
//     Playground at https://sourceacademy.nus.edu.sg/playground
// (2) Write your solution for each task in the Source Academy Playground.
// (3) Run the program to test your solution on the given testcases.


////////////////////////////////////////////////////////////
// Question 3A
////////////////////////////////////////////////////////////

// function evaluate_BAE_tree(bae_tree) {
//     // WRITE HERE.
//     if (is_number(bae_tree)) {
//         return bae_tree;
//     } else {
//         const operator = list_ref(bae_tree, 1);
//         const left = is_list(head(bae_tree)) 
//                      ? evaluate_BAE_tree(head(bae_tree))
//                      : head(bae_tree);
//         const right = is_list(list_ref(bae_tree, 2)) 
//                      ? evaluate_BAE_tree(list_ref(bae_tree, 2))
//                      : list_ref(bae_tree, 2);
                     
//         return operator === "+"
//               ? left + right
//               : operator === "-"
//               ? left - right
//               : operator === "*"
//               ? left * right
//               : left / right;
//     }
// }

////////////////////////////////////////////////////////////
// Question 3B
////////////////////////////////////////////////////////////
    
function build_BAE_tree(bae_list) {
    // WRITE HERE.
    let next_token = bae_list;

    function build_tree() {
        if (equal(head(next_token), "(")) {
            next_token = tail(next_token);
            const left_tree = build_tree();
            const op = head(next_token);
            next_token = tail(next_token);
            const right_tree = build_tree();
            next_token = tail(next_token); // skip over ")"
            return list(left_tree, op, right_tree);
        } else { // token is a number
            const token = head(next_token);
            next_token = tail(next_token);
            return token;
        }
    }

    return build_tree();
}


// find opening parenthesis


////////////////////////////////////////////////////////////
// Question 3C
////////////////////////////////////////////////////////////

function evaluate_BAE(bae_list) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 3D
////////////////////////////////////////////////////////////

function check_parentheses(paren_list) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//===========================================================
// This function is provided for running the testcases
// in the Source Academy Playground.
// They are NOT part of the actual testing facility provided
// in the actual Practical Assessment.
//===========================================================
function assert(f, test_name, fnames) {
    display(test_name + ": " + (f() ? "PASS" : "FAIL"));
}
//===========================================================



////////////////////////////////////////////////////////////
// Test Cases for Q3A
////////////////////////////////////////////////////////////

assert(
    () => {
        const bae_tree = 23;
        return equal(evaluate_BAE_tree(bae_tree), 23);
    },
    "Q3A-T1",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(5, "*", 6);
        return equal(evaluate_BAE_tree(bae_tree), 30);
    },
    "Q3A-T2",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(5, "*", list(7, "+", 3));
        return equal(evaluate_BAE_tree(bae_tree), 50);
    },
    "Q3A-T3",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(8, "-", 2), "*", list(7, "+", 3));
        return equal(evaluate_BAE_tree(bae_tree), 60);
    },
    "Q3A-T4",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(list(20, "/", 2), "-", 2), "*",
                            list(7, "+", 3));
        return equal(evaluate_BAE_tree(bae_tree), 80);
    },
    "Q3A-T5",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = 100;
        return equal(evaluate_BAE_tree(bae_tree), 100);
    },
    "Q3A-T6",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(70, "-", 15);
        return equal(evaluate_BAE_tree(bae_tree), 55);
    },
    "Q3A-T7",
    ['evaluate_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(list(7, "+", 5), "*", 3), "/",
                            list(list(20, "/", 2), "-", list(100, "-", 94)));
        return equal(evaluate_BAE_tree(bae_tree), 9);
    },
    "Q3A-T8",
    ['evaluate_BAE_tree']
);



////////////////////////////////////////////////////////////
// Test Cases for Q3B
////////////////////////////////////////////////////////////

assert(
    () => {
        const bae_tree = 23;
        const bae_list = list(23);
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T1",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(5, "*", 6);
        const bae_list = list("(", 5, "*", 6, ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T2",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(5, "*", list(7, "+", 3));
        const bae_list = list("(", 5, "*", "(", 7, "+", 3, ")", ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T3",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(8, "-", 2), "*", list(7, "+", 3));
        const bae_list = list("(", "(", 8, "-", 2, ")", "*",
                            "(", 7, "+", 3, ")", ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T4",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(list(20, "/", 2), "-", 2), "*",
                            list(7, "+", 3));
        const bae_list = list("(", "(", "(", 20, "/", 2, ")", "-", 2, ")", "*",
                            "(", 7, "+", 3, ")", ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T5",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = 100;
        const bae_list = list(100);
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T6",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(70, "-", 15);
        const bae_list = list("(", 70, "-", 15, ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T7",
    ['build_BAE_tree']
);

assert(
    () => {
        const bae_tree = list(list(list(7, "+", 5), "*", 3), "/",
                            list(list(20, "/", 2), "-", list(100, "-", 94)));
        const bae_list = list("(", "(", "(", 7, "+", 5, ")", "*", 3, ")", "/",
                            "(", "(", 20, "/", 2, ")", "-",
                                 "(", 100, "-", 94, ")", ")", ")");
        return equal(build_BAE_tree(bae_list), bae_tree);
    },
    "Q3B-T8",
    ['build_BAE_tree']
);



////////////////////////////////////////////////////////////
// Test Cases for Q3C
////////////////////////////////////////////////////////////

assert(
    () => {
        const bae_list = list(23);
        return equal(evaluate_BAE(bae_list), 23);
    },
    "Q3C-T1",
    ['evaluate_BAE']
);

assert(
    () => {
        const bae_list = list("(", 5, "*", 6, ")");
        return equal(evaluate_BAE(bae_list), 30);
    },
    "Q3C-T2",
    ['evaluate_BAE']
);

assert(
    () => {
        const bae_list = list("(", "(", "(", 20, "/", 2, ")", "-", 2, ")", "*",
                            "(", 7, "+", 3, ")", ")");
        return equal(evaluate_BAE(bae_list), 80);
    },
    "Q3C-T3",
    ['evaluate_BAE']
);



////////////////////////////////////////////////////////////
// Test Cases for Q3D
////////////////////////////////////////////////////////////

assert(
    () => {
        const paren_list = list();
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T1",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T2",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", "(", ")", ")",
                                   "(", "(", ")", "(", ")", ")", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T3",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list(")", "(");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T4",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", ")", ")", ")", "(", "(", ")");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T5",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", ")", "(");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T6",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", ")", "(", ")", "(", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T7",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", "(", ")", ")",
                                   "(", "(", ")", ")", ")", ")", ")");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T8",
    ['check_parentheses']
);

