// 1 - Var let & const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b >= 15) {
    let a = 5
    console.log(a)
}

console.log(a)

function logName() {
    const name = 'Pedro'
    console.log(name)
}

const name = 'Matheus'

logName()

console.log(name)

// 2 - Arrow Functions 
const sum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {

    if (name) {
        return `Hello ${name}`
    } else {
        return 'Hello'
    }
}

console.log(greeting('João'))
console.log(greeting())

const user = {
    name: 'Theo',
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }
}

// user.sayUserName()
// user.sayUserNameArrow()

// 3 - filter 
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Matheus', available: true },
    { name: 'João', available: false },
    { name: 'Maria', available: true },
    { name: 'Josias', available: false },
    { name: 'Lucas', available: true },
]

const availableUsers = users.filter((user) => user.available)

availableUsers.forEach((user) => {
    console.log(`O usuario(a) ${user.name} está disponivel!`) // Usando forEach para passar os usuários disponiveis
})

// 4 - Map
const products = [
    { name: "Camisa", price: 10.99, category: 'Roupas' },
    { name: "Chaleira Eletrica", price: 150, category: 'Eletro' },
    { name: "Fogão", price: 499, category: 'Eletro' },
    { name: "Jeans", price: 87.99, category: 'Roupas' }
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onsale = true
    }
})

console.log(products)

// 5 - Template literals

const userName = 'Matheus'
const age = 21

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)

// 6 - Destructuring

const fruits = ['Maçã', 'Mamão', 'Laranja']

const [f1, f2, f3] = fruits

console.log(f1, f3)

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periferico',
    color: 'Cinza'
}

const {name: productName, price, category, color} = productDetails

console.log(`O nome do produto é ${productName}, ele custa ${price} e é da cor ${color}`)