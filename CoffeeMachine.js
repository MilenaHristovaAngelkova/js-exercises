let coffeeMachine = inputArr => {
    let totalIncome = 0;

    inputArr.forEach(element => { 
        let currentArray = element.split(', ');       
        let insertedCoins = parseFloat(currentArray[0]);
        let quantityOfSugar = currentArray[currentArray.length - 1];
        let price = 0;

        if (currentArray[1] == 'tea' || currentArray[2] == 'caffeine'){
            price = 0.80;
        } else {
            price = 0.90;
        }

        if (currentArray.includes('milk')){
            price += price * 0.1;
            price = Number(price.toFixed(1));
        }
        
        if (quantityOfSugar !== '0'){
            price += 0.10;
        }

        if (insertedCoins >= price){
            let change = insertedCoins - price;
            console.log(`You ordered ${currentArray[1]}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            totalIncome += price;
        } else {
            let moneyNeeded = price - insertedCoins;
            console.log(`Not enough money for ${currentArray[1]}. Need $${moneyNeeded.toFixed(2)} more`);
        }
    });

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);

