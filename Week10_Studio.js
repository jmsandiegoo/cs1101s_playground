// bubble_sort
function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) > head(tail(p))) {
                const temp = head(p);
                set_head(p, head(tail(p)));
                set_head(tail(p), temp);
            }
            p = tail(p);
        }
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;

// question 3
function cc(amount, kind_of_coins) {
    
}
