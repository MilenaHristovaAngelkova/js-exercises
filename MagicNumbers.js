function magicNumber (num) { ///returns all 6-digit numbers where the product of the digits = num
    let outputArr = [];

    for (let i = 100000; i <= 1000000; i++) {
        let str = i.toString();
        let arr = str.split('');

        if ((arr[0]*arr[1]*arr[2]*arr[3]*arr[4]*arr[5]) == num){
            outputArr.push(i);
        }
    }

    console.log(outputArr.join(' '));
}

magicNumber(2);
magicNumber(8);
magicNumber(531441);