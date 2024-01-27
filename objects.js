const product = {
  name: 'shirt',
  price: 25,
  details: {
    sizes: ['medium', 'large', 'small'],
    colors: ['red', 'green', 'blue']
  }
}
//console.log(product.name)
console.log(product.details.colors)
console.log(JSON.stringify(product))
