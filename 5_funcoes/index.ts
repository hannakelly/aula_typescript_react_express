// 1 - funcoes sem retorno
function withoutReturn(): void {
  console.log("esta função não tem retorno")
  // return 1
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}!`
}

function preGreeting(f: (name: string) => string, username: string) {
  console.log('Preparando a saudação!')
  const greet = f(username)
  console.log(greet)
}

preGreeting(greeting, "Hanna")
preGreeting(greeting, "Kelly")

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
console.log(firstElement([]))
// firstElement('a')

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  }
}

const newObj = mergeObjects({ name: "Hanna" }, { age: 22 })

console.log(newObj)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T) {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12" , "5"))


// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste" , "testando"]))



// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }
  return `Olá ${name}!`
}

console.log(modernGreeting("Hanna", 'Sr.'))
console.log(modernGreeting("Hanna"))

// 7 - parametro default
function somaDefault(n: number, m = 10) {
  return n + m
}

console.log(somaDefault(10, 20))
console.log(somaDefault(20))

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === "number") {
    console.log("X é um número")
  }
  // x()
}

doSomething([1, 2, 3])
doSomething(5)


// 9 - never
function showErrorMsg(msg: string): never {
   throw new Error(msg)
}

 //showErrorMsg('Algo deu errado!')




 // 10 - rest operator como parametro
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(4, 5, 6, 10))




// 11 - destructuring como parametro
function showProductDetails({
  name,
  price,
}: {
  name: string
  price: number
}): string {
  return `O nome do produto é ${name} e o seu preço é R$${price}`
}

const shirt = { name:"Camisa", price: 59.99 }

console.log(showProductDetails(shirt))