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

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const companyName = new String('Bitpoint');
console.log(companyName);
console.log(typeof new String('Bitpoint'));

console.log(typeof new String('Bitpoint').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'gOrakh';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
