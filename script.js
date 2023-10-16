// Istenilen sayda  gelen datalarin ortalamasini veren Js function yazin.Call back istifade edeceksiz
const arr = [1, 2, 3, 6];
function Average(callback, ...numbers) {
  let sum = numbers.reduce((number, value) => number + value);
  let arraverage = sum / arr.length;
  callback(arraverage);
}
function result(mid) {
  console.log(mid);
}
Average(result, ...arr);

