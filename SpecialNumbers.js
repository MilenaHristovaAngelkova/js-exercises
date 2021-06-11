function specialNumbers(num){ ///returns all numbers between 1111 and 9999 where num % each digit == 0
    let output = [];

    for (let i = 1111; i <= 9999; i++){
        let str = i.toString();
        let arr = str.split('');

        if (num % arr[0] == 0 && num % arr[1] == 0 && num % arr[2] == 0 && num % arr[3] == 0){
            output.push(i);
        }
    }

    console.log(output.join(' '));
}

specialNumbers(3);
specialNumbers(11);
specialNumbers(16);