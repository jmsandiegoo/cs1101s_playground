import {circle, square, blank, ribbon, stack, beside, show, stack_frac, beside_frac} from "rune";


function moony_1(n, bottom_right) {
    return beside_frac(1/n,
                stack_frac(1/n, circle, square), 
                stack_frac(1/n, blank, bottom_right));
}

show(moony_1(2, ribbon));

function moony_2(n) {
    return n === 2
           ? moony_1(2, circle)
           : moony_1(2, moony_2(n-1));
}

show(moony_2(5));

// function equal_moony_1(,bottom_right) {
//     return beside(stack_frac(n,circle, square), stack_frac(n,blank, bottom_right));
// }

function moony(n) {
    return n === 2
           ? moony_1(n, circle)
           : moony_1(n, moony(n-1));
}

show(moony(5));

// Qsn 4
// O(n) - as n grows time and space grows accordingly