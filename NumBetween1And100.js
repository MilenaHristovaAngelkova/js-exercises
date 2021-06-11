function numBetween1And100(num){ 
    console.log('Еnter a number in the range [1...100]:')
    
    if (num <= 0 || num > 100 || !Number.isInteger(num)) {
        console.log('Invalid number!');
        // do {
        //     console.log('Еnter a number in the range [1...100]:')
        // } while (true);
    } else {
        console.log(`The number is: ${num}`);
    }
}


numBetween1And100(105);
numBetween1And100(0);
numBetween1And100("-");
numBetween1And100(200);
numBetween1And100(13.4);
numBetween1And100(77);
numBetween1And100(35);
