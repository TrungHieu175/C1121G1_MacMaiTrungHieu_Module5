function calculateSum(n) {
    var fibo = [];
    if (n <= 0) {
        return 0;
    }
    fibo[0] = 0;
    fibo[1] = 1;
    var sum = fibo[0] + fibo[1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] +
            fibo[i - 2];
        sum += fibo[i];
    }
    return sum;
}
console.log(calculateSum(15));
