let cookingByNumbers = arr => {
    let num = parseInt(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        switch(arr[i]){
            case 'chop':
                num = num / 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num)
                console.log(num);
                break;
            case 'spice':
                num = num + 1;
                console.log(num);
                break;
            case 'bake':
                num = num * 3;
                console.log(num);
                break;
            case 'fillet':
                num = num - (num * 0.2);
                console.log(num.toFixed(1));
        };
    };
    };
    cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
    cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
