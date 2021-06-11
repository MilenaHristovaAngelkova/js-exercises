function simplePasswordGenerator(num1, num2){
    let passwordsTemp = [];
    let passwords = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 1; i < num1; i++) {
        for (let j = 1; j < num1; j++) {
            for (let k = 0; k < num2; k++){
                for (let l = 0; l < num2; l++){
                        passwordsTemp.push(`${i}${j}${alphabet.charAt(k)}${alphabet.charAt(l)}`);                                 
                }
            }     
        }
    }

    passwordsTemp.forEach(el => {
        let temp = Math.max(el[0], el[1]);
        for (let m = temp + 1; m <= num1; m++){
            passwords.push(el + m);
        }
    })

    console.log(passwords.join(' '));
}

simplePasswordGenerator(2, 4);
simplePasswordGenerator(3, 1);
simplePasswordGenerator(3, 2);
simplePasswordGenerator(4, 2);