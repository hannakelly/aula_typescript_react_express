// 1 - var, let e const
var x = 10
var y = 15 

if( y > 10) {
    var x = 5
    console.log(x)
}
console.log(x)

let a = 10
let b = 15

if(b > 10 ) {
    let a =5 
    console.log(a)
}
console.log(a)

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logname() {
    const name = "Hanna"
    console.log(name)
}

const name = "hanna"

logname()

console.log(name)

// 2 ARROW FUNCTION 

const sum = function sum (a, b) {
    return a + b 
}

 const arrowSum = (a ,b) => {
    return a + b 
 }

 console.log(sum(5, 5))
 console.log(arrowSum(5, 5))

 const greeting = (name) => {
    if (name) {
        return "Olá" + name + "!"
    }else {
        return "Ola!"
    }
 }
9 
 console.log(greeting("Hanna"))
 console.log(greeting())

 const testeArrow = () => console.log("Testou!") 

 testeArrow()

 const user  = {
    name:"Hanna",
    sayUserName() {
        var self = this
        sentTimeout(function() {
           console.log(self)
           console.log("Username:" + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
          console.log("Username:" + this.name)
    }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()

// 3-Filter

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})
 console.log(highNumbers)

 const users = [
 {name: "Hanna", available: true},
 {name: "Kelly", available: false},
 {name: "Holanda", available: false},
 {name: "Rosa", available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = !users.filter((user) => user.available)

console.log(availableUsers)
console.log(notAvailableUsers)


// 4 - Map

const protucts = [
    {name: "Camisa", price: 10.99, categoria: "Roupas"},
    {name: "Chaleira- Eletrica", price: 10.99, categoria: "Eletro"},
    {name: "Calça Jean", price: 10.99, categoria: "Roupas"},
]

 products.map((protucts) =>{
   if(protucts.category === "Roupas") {
    protucts.onSale = true
   }
 })

 console.log(protucts)


 // 5 - template literals 
 const userName = "Hanna"
 const age = 22

 console.log(`O nome o usuario é ${userName} e ele tem ${age}`)

 //js convencional 
 console.log(" O nome do usuario é" + userName + " e ele tem" + age + "anos.")

 // Destructuring 
 const  fruits = ["Maça", "Laranja", "Mamão"]

 const [f1, f2, f3] = fruits
 console.log(f1)
 console.log(f2)


 const productDetails = {
    name:"Mouse",
    price:39.90,
    category:"Perifericos",
    color:"Cinza"
 }

 const {name: productName, price, category: productCategory, color} = productDetails

 console.log(`O nome do procussssssto é ${productName}, custa R$${price} pertence a categoria ${productCategory} e é a cor ${color}`)


 // 7- Spread operator 
 const a1 = [1, 2, 2]
 const  a2 = [4, 5, 6]

 const a3 = [...a1, ...a2]

 const a4 = [0,...a1, 4]

 console.log(a4)

 // 8 - Classes 

 class Product {
    constructor (name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100 )
    }
    
 }

 const shirt = new Product("Camisagola v, 20")

 console.log(shirt.name)
 console.log(shirt.productWithDiscount(10))
 console.log(shirt.productWithDiscount(50))

 // 9 - Herança

 class productWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name,price) 
            this.colors = colors
        }
    }

    showcolors() 
        console.log("As cores são:")
        this.colors.forEach((color) => {
        console.log(color)
        })
        
    
 

 const hat = new productWithAttributes("Chapeu", 29,99 ["Preto", "Azul", "Verde"])

 console.log(hat.name)

 console.log(hat.productWithDiscount(30))

 console.log(hat.showcolors())
