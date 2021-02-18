//TASK2

//BMI Calculator
const BMICAL = (W, H) => {           
    let BMI = W/(H*H);
    if(BMI <= 18.5) {
        console.log('Under Weight');
        console.log(BMI);
    }
    if(BMI > 18.5 && BMI < 24.9){
        console.log('Normal');
        console.log(BMI);
    }
    if(BMI >= 25){
        console.log('Over Weight');
        console.log(BMI);
    }
}
BMICAL(74,2);

//Degree to Fahrenhite Calculator
/*
const DtoF = (C) => {
let F = (C * 9/5) + 32
console.log(F);
}
DtoF(25);
*/
