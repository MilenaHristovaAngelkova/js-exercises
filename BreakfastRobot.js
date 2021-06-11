    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

function solution(str){
    let recipies = {
        'apple': {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10}
    };

    // let ingredients = {
    //     'protein': 0,
    //     'carbohydrate': 0,
    //     'fat': 0,
    //     'flavour': 0
    // };

    let input = str.split(' ');
    let command = input[0];

    if (command === 'restock') {
        let microelement = input[1];
        let quantity = Number(input[2]);

        ingredients[microelement] = ingredients[microelement] + quantity;
        console.log('Success');
    } else if (command === 'prepare') {
        let recipe = input[1];
        let quantity = Number (input[2]);
        let currentRecipe = {};

        if (recipies.hasOwnProperty(recipe)) {
            // deep cloning of the currently needed recipe and its quantity into a new object, independent of the 
            // recipies object
            for (let entry of Object.entries(recipies[recipe])) {
                let currentMicroelement = entry[0];
                let currentQuantity = entry[1] * quantity;
                currentRecipe[recipe] = {...currentRecipe[recipe], [currentMicroelement]: currentQuantity};
            };
         
            for (let keys = Object.keys(currentRecipe[recipe]), i = 0, end = keys.length; i < end; i ++) {
                let key = keys[i];
                let val = currentRecipe[recipe][key];
                if (ingredients[key] < val) {
                    console.log(`Error: not enough ${key} in stock`);
                    break;
                } else if (i == end - 1) {
                    console.log('Success');
                    for (let [key, val] of Object.entries(currentRecipe[recipe])) {
                        if (ingredients.hasOwnProperty(key)) {
                            ingredients[key] = ingredients[key] - val;
                        }
                    }
                }
            }
        }        
    } else if (command === 'report') {
        let reportArr = [];
        for (let [key, value] of Object.entries(ingredients)){
            reportArr.push(`${key}=${value}`)
        };
        console.log(reportArr.toString().replace(/,/g, ' ')); /// regex for all commas
    }

    function checkAgain(str2){
        if (str2) {
            return solution(str2);
        } else {
            return solution(str);
        }
    }

    checkAgain.toString = function() {return solution(str2)};
    return checkAgain;
};

solution("restock flavour 50")("prepare lemonade 4");
solution("restock carbohydrate 10")("restock flavour 10")("prepare apple 1")("restock fat 10")("prepare burger 1")("report");

solution("prepare turkey 1")("restock protein 10")("prepare turkey 1")("restock carbohydrate 10")("prepare turkey 1")
("restock fat 10")("prepare turkey 1")("restock flavour 10")("prepare turkey 1")("report");

// To do:
//1. how to keep ingredients in such a way that the function remembers only till finishes re-triggering in the same go
//(not global as when global, egs from previous go pollute current go)
