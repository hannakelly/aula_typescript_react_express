// 1 - Numbers
let x: Number = 10 

console.log(x)

x = 15
console.log(typeof x)

const y: number = 3.14329492349

console.log(y.toPrecision(3))

// 2 - string
const FirstName: string = "Hanna"

console.log(FirstName.toUpperCase())

const lastName: string = "Kelly"

let fullName: string

fullName = FirstName + ' ' + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(typeof a)
console.log(a)

a = true

console.log(a)

// 4 - inference e annotation
let ann: string = 'Teste'
let inf = 'teste'

// ann = 1
// inf = 1



// 5 - compile automatico
let q = 10

console.log(q)

q = 11

console.log(q)

// 6 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu quero imprimir o número ${numberToString}`

console.log(printMyNumber)