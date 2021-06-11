function personalBMI(arr){
    let name = arr[0];
    let age = arr[1];
    let weightKg = arr[2];
    let heigthCm = arr[3];
    let BMI = weightKg/(Math.pow(heigthCm/100, 2));
    let status = '';
    let personalDetails = new Map();

    if (BMI < 18.5){
        status = 'underweight';
    } else if (BMI < 25){
        status = 'normal';
    } else if (BMI < 30){
        status = 'overweight';
    } else if (BMI >= 30){
        status = 'obese';
    }

    personalDetails = {'name': name, 'personalInfo': {'age': age, 'weight': weightKg, 'height': heigthCm}, 'BMI': Math.round(BMI), 
    'status': status};

    if (personalDetails['status'] == 'obese'){
        personalDetails = {...personalDetails, 'recommendation': 'admission required'};
    }

    console.log(personalDetails);
};

personalBMI(["Peter", 29, 75, 182]);
personalBMI(["Honey Boo Boo", 9, 57, 137]);
