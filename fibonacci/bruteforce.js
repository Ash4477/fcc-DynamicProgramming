const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)); // takes long time

// Time Complexity: O(2^n)
// Space Complexity: O(n)
// *in recursion space comp is usually height of tree