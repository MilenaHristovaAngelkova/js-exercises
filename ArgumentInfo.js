function argumentInfo(arr){
    let typesDetails = [];
    let typesCount = {};
    let type;

    for (i = 0; i < arr.length; i++){
        type = typeof(arr[i]);
        typesDetails.push(type + ': ' + arr[i]);

        if (typesCount.hasOwnProperty(type)){
            typesCount[type] = typesCount[type] + 1;
        } else {
            typesCount[type] = 1;
        }
    }

    typesDetails.forEach(el => console.log(el));
    
    for (let [key, value] of Object.entries(typesCount).sort((a, b) => b[1] - a[1])){
        console.log(`${key} = ${value}`);
    }
}

argumentInfo(['cat', 42, function () { console.log('Hello world!'); }]);