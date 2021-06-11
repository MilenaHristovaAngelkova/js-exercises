function loopThroughEvenPowerOfN(n){ //loops through all even power of n
    let num = 1;
    let currentNum = 1;
    for (let i = 0; i <= (n / 2); i++){
        currentNum = num * 4;
        console.log(num);
        num = currentNum;
    }
}

loopThroughEvenPowerOfN(3);
loopThroughEvenPowerOfN(4);
loopThroughEvenPowerOfN(5);
loopThroughEvenPowerOfN(6);
loopThroughEvenPowerOfN(7);