console.log('destructuring');

// Object destructuring

// const person = {
//     name: 'Mark',
//     age: 48,
//     location: {
//         city: 'Alliance',
//         temp: 45
//     }
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);

// const { name = 'Anonymous', age } = person;
// const { city, temp: tempreture } = person.location;

// console.log(`${name} is ${age}.`);


// console.log(`It's ${tempreture} in ${city}`);

// Array destructuring

const address = ['2625 Shunk Ave', 'Alliance', 'Ohio', '44601'];

const [, , state] = address;

console.log(`I live in ${state}`);

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [item, , med] = items;

console.log(`A medium ${item} costs ${med}`);