function add(num1) {
    let sum = num1;

    function addAgain(num2){
        if (num2){
            sum += num2;
            return addAgain;
        } else {
            return sum;
        }
    }

    addAgain.toString = function() {return sum};
    return addAgain;
}

add(1);
add(1)(6)(-3);
// IIFE:
// (function test (){
//     console.log(true);
// })();