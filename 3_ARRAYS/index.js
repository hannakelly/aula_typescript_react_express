"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
// numbers.push('a')
console.log(numbers[2]);
// numbers = "teste"
const nomes = ['Matheus', 'Pedro'];
// nomes.push(4)
// 2 - outra sintaxe de array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// numbers.push("teste")
console.log(nums[5]);
// 3 - any
const arr1 = [1, 'teste', true, { nome: "Hanna" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametro de função
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma('ads', 1)
// 5 - retorno de funcao
function greeting(name) {
    return `Olá ${name}!`;
}
console.log(greeting("Hanna"));
// greeting(1)
// 6 - funcoes anonimas
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
}, 100);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('X coordinates: ' + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates({nome: 1, sobrenome: 2})
const pessoaObj = { nome: "Hanna", surname: "Kelly" };
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("c:" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(4)
// 9 - validando parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    console.log(`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Hanna", "Kelly"));
console.log(advancedGreeting("Holanda"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance('500');
//showBalance(true)
const arr2 = [1, "teste", true];
// 11 - mais sobre union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        console.log('Usuário não aprovado!');
    }
    console.log(`O usuário é um: ${role}`);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
console.log(showUserRole("Editor"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Sobrenome: ${user.surname}`);
}
userDetails({ name: "Hanna", surname: "Kelly" });
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const itemCoords = {
    x: 20,
    y: 30,
    z: 40,
};
showCoords(itemCoords);
const randomNumber = 10;
const somePerson = { name: "Hanna", age: 22 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = "testando";
// test = "opa"
function showDirection(direction) {
    console.log(`The direction is: ${direction}`);
}
showDirection('left');
showDirection('center');
//showDirection("up")
// 16 - non-null assertion
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - big int
let n;
// n = 1
n = 1000n;
// console.log(n + 1)
console.log(n + 100n);
// 17 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
