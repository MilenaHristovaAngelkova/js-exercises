function isPrimeNumber(num){
    let prime = true;

    if (num < 2){
        prime = false;
    } else{
        for (i = 2; i < num; i++){
            if (num % i == 0){
                prime = false;
            }
        }
    }

    prime == false ? console.log('Not prime') : console.log('Prime');
};

isPrimeNumber(2);
isPrimeNumber(3);
isPrimeNumber(4);
isPrimeNumber(5);
isPrimeNumber(1);
isPrimeNumber(0);
isPrimeNumber(-1);
isPrimeNumber(149);
