function usernames(arr) {
    let namesAndLengths = {};

    arr.forEach(element => {
        if (!namesAndLengths.hasOwnProperty(element)){
            namesAndLengths[element] = Number(element.length);
        }
    });

    for(let  [key, value] of Object.entries(namesAndLengths).sort((a, b) => {
        if (!(a[1] == b[1])) {
            return a[1] - b[1];
        } else if (a[0] > b[0]){
            return + 1;
        } else {
            return - 1;
        }
    })){
        console.log(key);
    }
};

usernames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']);

usernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);