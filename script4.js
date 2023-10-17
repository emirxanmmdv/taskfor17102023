const arr = [2, 3, 1, 4, 5, 9, 3, 3, 6, 7, 8];
teklerinCemi = arr.reduce((total,initial) => (initial % 2 === 1) ? total+initial : 0) 
cutlerinCemi = arr.reduce((total,initial) => (initial % 2 === 0) ? total+initial : 0) 
const tekVeCemHasili = teklerinCemi + cutlerinCemi