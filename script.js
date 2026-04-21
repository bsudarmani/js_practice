const product = [
  { id: 1, item: "android", quality: 23, price: 12000 },
  { id: 2, item: "iphone", quality: 56, price: 53000 },
  { id: 3, item: "tv", quality: 10, price: 45035 },
  { id: 4, item: "Androidlate", quality: 55, price: 11238 },
];

let result = product
  .sort((a, b) => a.price - b.price)
  .filter(value => value.price < 50000)
  .map(value => value.item + " - " + value.price);

console.log(result);