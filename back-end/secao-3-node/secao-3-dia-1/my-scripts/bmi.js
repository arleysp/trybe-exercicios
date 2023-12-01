const readline = require('readline-sync');

const bmi = (weight, height) => {
  const bmi = weight / (height * height);
  return bmi;
}
const callBmi = () => {
  const weight = readline.questionFloat('Enter your weight in kg: ');
  const height = readline.questionFloat('Enter your height in m: ');

  const bmiResult = bmi(weight, height).toFixed(2);
  if (bmiResult < 18.5) {
    console.log(`Your BMI is ${bmiResult}. You are underweight.`);
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    console.log(`Your BMI is ${bmiResult}. You are normal weight.`);
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    console.log(`Your BMI is ${bmiResult}. You are overweight.`);
  } else if (bmiResult >= 30) {
    console.log(`Your BMI is ${bmiResult}. You are obese.`);
  } else {
    console.log('Invalid input.');
  }
};

callBmi();