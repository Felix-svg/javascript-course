const product = {
  name: 'socks',
  price: 1090
}

console.log(product)
console.log(product.name)
console.log(product.price)
console.log(typeof product)
product.name = 'cotton socks'
console.log(product.name)
delete product.name
console.log(product)
product.isAvailable = true
console.log(product)