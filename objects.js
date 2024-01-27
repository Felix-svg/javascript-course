// const product = {
//   name: 'shirt',
//   price: 25,
//   details: {
//     sizes: ['medium', 'large', 'small'],
//     colors: ['red', 'green', 'blue']
//   }
// }
// //console.log(product.name)
// console.log(product.details.colors)
// console.log(JSON.stringify(product))

const names = ["Felix", "Omondi", "Onyango"];

function upperCase(collection) {
    return collection.toUpperCase();
}
//upperCase(names);
const upperCaseNames = names.map(upperCase);
console.log(upperCaseNames)
console.log(upperCaseNames[0])

const greeting = 'Good morning!'
console.log(greeting.toUpperCase())