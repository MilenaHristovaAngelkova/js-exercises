function autoEngineeringInventory(arr) {
    let output = new Map();

    arr.forEach(element => {
        let currentEntry = element.split(' | ');
        let carBrand = currentEntry[0];
        let carModel = currentEntry[1];
        let producedCars = Number(currentEntry[2]);
   
        if(!output.has(carBrand)){
            output.set(carBrand, {[carModel]: producedCars});
        } else {
            if(!output.get(carBrand).hasOwnProperty(carModel)){
                output.set(carBrand, {...output.get(carBrand), [carModel]: producedCars});
            } else{
                output.set(carBrand, {[carModel]: producedCars + output.get(carBrand)[carModel]});
            }
        }
    });

    for (let [key, value] of output.entries()){
        console.log(key);

        for (let val of Object.keys(value)){
        console.log(`###${val} -> ${value[val]}`);
        }
    }; 
};

autoEngineeringInventory(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);