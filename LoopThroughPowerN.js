function loopThrough2OnPower0ToN(n){ /// runs through 2 on power of 0 to 2 on power of n
    let num = 1;
    let currentNum = 1;
    for (i = 0; i <= n; i++){
        currentNum = num * 2;
        console.log(num);
        num = currentNum;
    }
}

loopThrough2OnPower0ToN(3);
loopThrough2OnPower0ToN(4);
loopThrough2OnPower0ToN(5);