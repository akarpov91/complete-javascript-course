('use strict');
//Enhanced object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  //Enhanced object literals
  orderPizza(mainIngredient, ...optionalIngredients) {
    console.log(mainIngredient);
    console.log(optionalIngredients);
  },
};

const badArray = [7, 8, 9];
const newArray = [1, 2, ...badArray];
console.log(...newArray);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join arrays
//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);

//iterables: arrays, strings, maps, sets. Not objects

const str = 'alex';
const letters = [...str, ' ', 'A.'];
console.log(letters);

/* const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
]; */

//restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
console.log('heelo');

//destructuring

//spread, because on Right side of =
//const arr = [1, 2, ...[3, 4]];

//rest, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods);

//rest in objects
//const { sat, ...weekdays } = restaurant.openingHours;
//console.log(sat);

//functions
const add = function (...numbers) {
  console.log(numbers.reduce((a, b) => a + b, 0));
};
add(2, 3);
add(5, 3, 7, 2);
add(3, 4, 6, 8, 3, 7, 4);

const x = [29, 5, 7];
add(...x);

restaurant.orderPizza('Cheese', 'Sauce', 'Pepperoni');

console.log('-------OR --------');
//short circuiting
console.log(3 || 'Alex');
//logical operators can use, return any data type, and short-circuiting
console.log('' || 'Alex');
console.log(true || 0);
console.log(undefined || null);

console.log('-------AND --------');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish: null and undefined (not 0 or '' )
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
players1;

const [gk, ...fieldPlayers] = players1;
console.log(fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final', players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...names) {
  console.log(names);
  console.log(`${names.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
const result = printGoals(...game.scored);
result;

team1 < team2
  ? console.log('teams 1 is more likely to win')
  : console.log('team 2 is more likely to win');

//Looping array: The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log('item', item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//Optional chaining
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

// w/optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
  open;
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

//arrays
const users = [{ name: 'Alex', email: 'hello@gmail.com' }];
console.log('hello', users[0]?.name ?? 'there');

//Looping objects: object keys, values, and Entries

// property names
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
properties;

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
openStr;

// property values
const values = Object.values(openingHours);
values;

// entries
const entries = Object.entries(openingHours);
entries;

//destructuring [day, { open, close }]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

//coding challenge 2

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
average;

//3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[team] ?? 'draw'}: ${odd}`);
}

//bonus
for (const [goal, name] of Object.entries(game.scored)) {
  goal;
  name;
}

//Sets
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
orderSet;
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
orderSet;
for (const order of orderSet) {
  order;
}

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
uniqueStaff;
console.log(new Set(staff).size);

//maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest;
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest;
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 22)
  .set(true, 'we are open')
  .set(false, 'we are closed');
rest;
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
console.log(rest.has('open'));
//rest.delete(2);

//rest.clear()
const arr = [1, 4];
rest.set(arr, 'Test');
//rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));

//map iteration
const question = new Map([
  ['question', 'what is the best programing language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

question;

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
hoursMap;

//iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt(question.get('question')));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

//convert map back to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
events;

//2
console.log(gameEvents.delete(64));
gameEvents;

//3
const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first half' : 'second half';
  console.log(`[${half}] ${min}: ${event}`);
}

//Strings
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);

//string methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//slice method
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1).toLowerCase();
  console.log(s == 'b' || s == 'e' ? 'Middle' : 'not middle');
};

checkMiddleSeat('11B');
checkMiddleSeat('9e');

// strings part II
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
passengerCorrect;

// compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//trimmedEmail;

const normalEmail = loginEmail.toLowerCase().trim();
normalEmail;
console.log(email === normalEmail);

//replacing strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
priceUS;

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('Airb'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo'));
console.log('new airbus family');

//practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    return 'You are Not allowed to board';
  } else {
    return 'welcome aboard';
  }
};

console.log(checkBaggage('I have a laptop, some food and a pocket Knife'));
console.log(checkBaggage('socks and camera'));
console.log(checkBaggage('got some snacks and a gun for protection'));

//string part III
console.log('a+very+nice+string'.split('+'));
console.log('Alex Karpov'.split(' '));

const [firstName, lastName] = 'Alex Karpov'.split(' ');
firstName;
lastName;

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
newName;

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

console.log(capitalizeName('jessica ann smith davis'));
capitalizeName('alex karpov');

//padding string
const message = 'Got to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number.toLocaleString('fullwide', { useGrouping: false });
  str;
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(484848383848848));
console.log(maskCreditCard('49494948585848595830488330030'));
console.log(maskCreditCard(48484858594938384854845858348));

//repeat
const message2 = 'Bad Weather...All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(2);
planesInLine(13);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//document.body.append(document.createElement('textarea'));
//document.body.append(document.createElement('button'));

/* document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  const inputRemoveBreak = input.replace(/(\r\n|\n|\r)/gm, ' ');
  const inputArray = inputRemoveBreak.split(' ').filter(Boolean);
  //const inputRemoveFalsy = inputArray.filter(Boolean);
  console.log(inputArray);
}); */

const originalInput = `underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure`;

const finalStringArray = [];
//const inputRemoveBreak = originalInput.replace(/(\r\n|\n|\r)/gm, ' ');
const inputArray = originalInput.split('\n').filter(Boolean);
inputArray;
for (const [i, v] of inputArray.entries()) {
  const [first, second] = v.toLowerCase().trim().split('_');
  const test = first + second[0].toUpperCase() + second.slice(1);
  console.log(`${test.padEnd(20)}${'✅'.repeat(i + 1)}`);

  //console.log(formatted[1]);
}

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  console.log(flight.split(';'));
  const [type, departure, arrival, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(departure)} to ${getCode(arrival)} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output.padStart(50));
}
