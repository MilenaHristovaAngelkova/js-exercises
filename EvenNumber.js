function isEvenPositiveInteger(num){
    if (num % 2 == 0 && Number.isInteger(num)){
        console.log(`Even number entered: ${num}`);
    } else if (num % 2 !== 0 && Number.isInteger(num)){
        console.log('The number is not even.');
    } else {
        console.log('Invalid number!');
    };
};

isEvenPositiveInteger(34);
isEvenPositiveInteger(35);
isEvenPositiveInteger('Hello');
isEvenPositiveInteger(12.85);
isEvenPositiveInteger(8);