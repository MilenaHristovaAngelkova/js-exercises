function numbersPyramid(num) {
    let prevArr = [];
    let nextArr = [];

    for (let i = 1; i <= num; i++){
        nextArr.push(i);
        if (nextArr.length > prevArr.length){
            console.log(nextArr.join(' '));
            prevArr = nextArr;
            nextArr = [];
        }

        if (i == num) {
            console.log(nextArr.join(' '));
        }
    }
};

numbersPyramid(15);