function digitsSum(num){
    sum = 0;

    while (num){
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
};

digitsSum(5634);
digitsSum(19);
digitsSum(5);
digitsSum(17151);
