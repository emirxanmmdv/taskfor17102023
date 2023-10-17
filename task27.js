// task-27 bir olculu massivin cut elementlerinin indeksini ekrana cixaran proqram tertib edin
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((x, i) => (x % 2 === 0 ? console.log(i) : null));