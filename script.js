"use strict";

//lern function

function sayhello() {
  console.log("Hello javascript");
  return "Hello";
}
const text = sayhello();
console.log(text);

//arrow function for one parameter
const sayhello2 = (b) => 10 + b;
console.log(sayhello2(10));

//arrow function for two
const sum = (b, ...a) => {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
};
console.log(sum(10, 20, 30, 40, 50));

const score = [10, 20, 30, 40];
const copyscore = score.slice();
console.log(copyscore);

//from function
const copyscore2 = Array.from(score);
console.log(copyscore2);

//use spread operator
const copyscore3 = [...score];
console.log(copyscore3);

//Destructuring
const product = {
  id: 1,
  name: "iphone 15",
  price: 1500,
  stock: 10,
};
const { id, name, price, stock } = product;
console.log(product.name);

const printrecipt = ({ id, name, price, stock }) => {
  console.log(`ID : ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Price: ${price}`);
  console.log(`Stock: ${stock}`);
};
printrecipt(product);

//Destructuring from array
const priceList = [10, 20, 30, 40];
const [price1, price2, price3, price4] = priceList;
console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);

const [, , p3, p4] = priceList;
console.log(p3, p4);

const [pr1, pr2, ...rest] = priceList;
console.log(pr1, pr2, rest);
