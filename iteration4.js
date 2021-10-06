const numbers = [12, 21, 38, 5, 45, 37, 6];
const other = [4,5,12,288];

function average(listarray) {
let counter = 0

for (let i = 0; i < listarray.length; i++) {
counter += listarray[i]; 
}
return console.log (counter / listarray.length);
}

average(numbers);
average(other);