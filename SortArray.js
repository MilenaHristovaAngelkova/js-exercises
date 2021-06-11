function sortArray(arr, arg) {
    if (arg === 'asc'){
        return console.log(arr.sort((a,b) => a - b));
    } else if (arg === 'desc'){
        return console.log(arr.sort((a,b) => b - a));
    }
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');