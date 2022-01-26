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

// Comparing emails
const email = 'mail@gorakhjoshi.com';
const loginEmail = '  Mail@Gorakhjoshi.Com \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Airb'));
if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split & join method
console.log('a+very+nice+string'.split('+'));
console.log('Gorakh Raj Joshi'.split(' '));
const [firstName, middleName, lastName] = 'Gorakh Raj Joshi'.split(' ');
const newName = ['Mr.', firstName, middleName, lastName.toUpperCase()].join(
  ' '
);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('gorakh raj joshi');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('gorakh'.padStart(20, '+').padEnd(30, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));
