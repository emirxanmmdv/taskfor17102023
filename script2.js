// Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

const arr = [1, 2, 3, 6];
function Total(callback, ...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  callback(sum);
}
function result(even) {
  console.log(even);
}
Total(result, ...arr);
