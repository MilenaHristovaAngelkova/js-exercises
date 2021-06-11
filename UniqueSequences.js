function uniqueSequences(input) {
    let arrayOfNumbers = [];

    for (i = 0; i < input.length; i++) {
        let currentArr = input[i].replace('[','').replace(']','').split(', ');
        let tempArr1 = [];
        currentArr.forEach(el => tempArr1.push(Number(el)));
        arrayOfNumbers.push(tempArr1);
    };

    let numberOfNumbers = [];

    for (i = 0; i < arrayOfNumbers.length; i++){
        for (j = i + 1; j < arrayOfNumbers.length; j++){
            if (JSON.stringify(arrayOfNumbers[i].sort()) == JSON.stringify(arrayOfNumbers[j].sort())){
                break;
            }
            if (j == arrayOfNumbers.length - 1){
                numberOfNumbers.push(arrayOfNumbers[i].sort((a,b) => b - a));
            }
        }
    }

    numberOfNumbers.forEach(el => console.log(el));
    console.log(arrayOfNumbers[arrayOfNumbers.length - 1].sort((a,b) => b - a));
}

//     for (i = 0; i < input.length; i++) {
//         let currentArr = input[i].replace('[','').replace(']','').split(', ');
//         arrayOfNumbers.push(currentArr);
//     };

//     let numbersOfNumbers = [];

//      for (i = 0; i < arrayOfNumbers.length; i++){
//         let tempArr = [];
//         for (j = 0; j < arrayOfNumbers[i].length; j++){            
//             let numStr = arrayOfNumbers[i][j];
//             if (numStr.includes('.')) {
//                 numStr= parseFloat(numStr);
//             }

//             for (l = i + 1; l < arrayOfNumbers.length; l++){
//                 if (arrayOfNumbers[l].includes(numStr)){
//                     break;
//                 }
//                 if (l == arrayOfNumbers.length - 1) {
//                 tempArr.push(numStr); 
//                 }
//             }                 
//         }
//         numbersOfNumbers.push(tempArr);
//     }

//     for (i = 0; i < numbersOfNumbers.length; i++){
//         if (numbersOfNumbers[i].length > 0){
//             console.log(numbersOfNumbers[i].sort((a,b) => b - a));//            
//         }
//     }
//     console.log(arrayOfNumbers[arrayOfNumbers.length - 1].sort((a,b) => b - a));
// };

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]", 
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);
