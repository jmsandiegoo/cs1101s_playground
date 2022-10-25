// function dest_map(fun, xs) {
//     if (! is_null(xs)) {
//         const h = head(xs);
//         set_head(xs, fun(h));
//         dest_map(fun, tail(xs));
//     }
// }

// const L = list(1, 2, 3);
// dest_map(x => y => x + y, L);

// function pair_add_one(p) {
//     set_head(p, head(p)  + 1);
//     set_tail(p, tail(p) + 1);
// }

// const q = pair(2, 5);
// pair_add_one(q);
// q;

// function scale_stream(c, stream) {
//     return stream_map(x => c * x, stream);
// }
// const A = pair(1, () => scale_stream(2, A));
// // pair(pair())
// display(A);
// display(stream_tail(A));
// display(stream_tail(stream_tail(A)));
// display(stream_ref(A, 3));
// display('lol');
// function mul_streams(a,b) {
// return pair(head(a) * head(b),
// () => mul_streams(stream_tail(a), stream_tail(b)));
// }
// const B = pair(1, () => mul_streams(B, integers));

// let xx = 0;
// let yy = 0;

// function funC(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         xx = funC(n - 1);
//         display('fun' + stringify(n));
//         display(xx);
//         yy = funC(n - 2);
//         display('fun' + stringify(n));
//         display(xx);
//         return xx + yy;
//     }
// }
// funC(7);

// function H(n) {
//  let M = [];
//  let i = 1;
//  while (i <= n) {
//  const f = x => x + i;
//  display(f);
//  M[i - 1] = f;
//  i = i + 1;
//  }
//  return M;
// }
// const M = H(4);
// display(M);
// let sum = 0;
// let i = 0;
// while (i < 4) {
//  sum = sum + M[i](0);
//  i = i + 1;
// }
// sum;

// let test = 1;


// function F(xs) {
//  if (is_null(tail(xs))) {
//  return xs;
//  } else {
//  const v = F(tail(xs));
//  return pair(head(v), pair(head(xs), tail(v)));
//  }
// }
// const L = list(1, 2, 3);
// const R = F(L);
// R;
// const test = 1;


// let y = 1;
// function g(f) {
//  y = y + 1;
//  return x => 10 * f() + x;
// }
// const h = g(() => y + 1);
// y = y + 1;
// h(y);
// let lmao = 1;

// let gg = x => (x % 2 === 0);
// function fun(ff, xs) {
//  gg = x => (x % 2 === 0);
//  if (is_null(xs)) {
//  return xs;
//  } else if (gg(head(xs))) {
//  const new_x = ff(head(xs));
//  return pair(new_x, fun(ff, tail(xs)));
//  } else {
//  set_tail(xs, fun(ff, tail(xs)));
//  return xs;
//  }
// }
// const L = list(2, 3, 4);
// const R = fun(x => 2 * x, L);

// let lmao = 1;




