const airline = 'Nepal Airlines';
const plane = 'NA540';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('NA143'[0]);

console.log(airline.length);
console.log('NA143'.length);

console.log(airline.indexOf('l'));
console.log(airline.lastIndexOf('l'));
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(6));
console.log(airline.slice(6, 10));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
