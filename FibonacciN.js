function nthNumberFibonacci(num){
    let fn;
    let f0 = 1;
    let f1 = 1;
    
    if (num < 2){
        fn = 1;
    } else {
        for (i = 2; i <= num; i++){
           fn = f0 + f1;
           f0 = f1;
           f1 = fn;
        }
    }

    console.log(fn);
}

nthNumberFibonacci(0);
nthNumberFibonacci(1);
nthNumberFibonacci(2);
nthNumberFibonacci(5);
nthNumberFibonacci(10);