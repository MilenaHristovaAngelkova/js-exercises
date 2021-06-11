function tableOfNumbers(num){
    for (let row = 1; row <= num; row++){  
        for (let col = 1; col <= row; col++){
            let temp = [];     
            if (col == row) {             
                for (let k = row; k <= num; k++){
                   temp.push(k);
                   if (k == num){
                       for (let l = num - 1; l >= 1; l--){
                           if (temp.length < num){
                            temp.push(l);
                           }
                       }
                   }
               }
                console.log(temp.join(' '));
            }
        }
    }
}

tableOfNumbers(2);
tableOfNumbers(3);
tableOfNumbers(4);
tableOfNumbers(5);