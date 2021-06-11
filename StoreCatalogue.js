function storeCatalogue(arr){
    let productsCatalogue = {};
    let outputCatalogue ={};

    arr.forEach(element => {
        let inputItem = element.split(' : ');
        let productName = inputItem[0];
        let productPrice = inputItem[1];

        productsCatalogue[productName] = productPrice;
    });

    for (let key of Object.keys(productsCatalogue)){
        if (!outputCatalogue.hasOwnProperty(key[0][0])) {
            outputCatalogue[key[0][0]] = [key + ' : ' + productsCatalogue[key]];
        } else {
            outputCatalogue[key[0][0]].push(key + ' : ' + productsCatalogue[key]);
        }
    }

    for (let key of Object.keys(outputCatalogue).sort()) {

        console.log(key);

        outputCatalogue[key] = outputCatalogue[key].sort();
        outputCatalogue[key].forEach(el => {
        console.log('  ' + el);
        })
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])