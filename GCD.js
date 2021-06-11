function greatestCommonDivisor(num1, num2) {
    let gcd = 1;
    for (i = 1; i <= Math.max(num1, num2); i++){
        if (num1 % i == 0 && num2 % i == 0){
            gcd = i;
        }
    }
    console.log(gcd);
};
greatestCommonDivisor(24, 16);
greatestCommonDivisor(67, 18);
greatestCommonDivisor(15, 9);
greatestCommonDivisor(100, 88);
greatestCommonDivisor(10, 10);
