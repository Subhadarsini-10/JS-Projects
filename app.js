const defaultResult = 0;
let currentResult = defaultResult;
let conResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

conResult = add(1, 2);

currentResult = ((defaultResult + 10) * 3) / 10 + 3;

let calculationDescription = `(${defaultResult} + 10) * 3 /10 + 3`;

console.log(currentResult);
