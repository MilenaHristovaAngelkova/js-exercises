function juiceBottles (arr) {
    let juicesInventory = {};
    let juicesOutput = new Map();

      arr.forEach(element => {
        let inputDetails = element.split(' => ');

        let keyDetail = inputDetails[0];
        let valueDetail = Number(inputDetails[1]);

         if (!juicesInventory.hasOwnProperty(keyDetail)) {   
            juicesInventory[keyDetail] = valueDetail;
            
            if (valueDetail >= 1000) {
                juicesOutput.set(keyDetail, valueDetail);
            };
        } else {
            juicesInventory[keyDetail] = juicesInventory[keyDetail] + valueDetail;
            
            if (juicesInventory[keyDetail] >= 1000) {

                if (!juicesOutput.has(keyDetail)){
                    juicesOutput.set(keyDetail, juicesInventory[keyDetail]);
                } else {
                    juicesOutput.set(keyDetail, juicesOutput.get(keyDetail) + valueDetail);
                }
            };
        }
    });
    
   for (let [key, value] of juicesOutput) {
        let convertedValue = Math.floor(value / 1000);
        console.log(`${key} => ${convertedValue}`);
    }

    /*juicesOutput.forEach((value, key) => {
        console.log(`${key} => ${Math.floor(value / 1000)}`);
    });*/
}

/*juiceBottles(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);*/

juiceBottles(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
