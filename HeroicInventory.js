/*function main(input) {
    let heroData = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ];

    for (let i = 0; i < input.length; i++) {
        let inputInventory = input[i].split(' / ');

        let currentHeroName = inputInventory[0];
        let currentHeroLevel = Number (inputInventory[1]);
        let currentHeroItems = [];

        if(inputHeros.length > 2){
                currentHeroItems = inputInventory[2].split(', ');
            } 

         let heroicInventory = {
             name = currentHeroName,
             level = currentHeroLevel,
             items = currentHeroItems
        };

        heroData.push(heroicInventory);
    }

    console.log(JSON.stringify(heroData));
}*/




function inputHeros (arr) {
    var heroData = [];
    arr.forEach(inputElement => {
        let inputInventory = inputElement.split(' / ');

        let currentHeroName = inputInventory[0];
        let currentHeroLevel = Number(inputInventory[1]);

        let currentHeroItems;
        inputHeros.length > 2 ? currentHeroItems = inputInventory[2].split(', ') : currentHeroItems = [];
        // if(inputHeros.length > 2){
        //     currentHeroItems = inputInventory[2].split(', ');
        // }

        let heroicInventory = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(heroicInventory);
    });

    return console.log(JSON.stringify(heroData));
};

inputHeros(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
