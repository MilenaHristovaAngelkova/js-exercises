function factorial(n){
    let num = 1;
    if (n >= 1 && n <= 12){
        for (let i = 1; i <= n; i++){
            num = num * i;
        }
        console.log(num);
    }    
};

factorial(5);
factorial(6);
factorial(10);
factorial(1);
factorial(2);