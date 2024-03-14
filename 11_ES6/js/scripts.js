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

// 7 - spread operator
    
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2];

console.log(a3)

const a4 = [0, ...a3, 7];

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: "Vw"}
const otherInfos = {km: 100000, price: 49999}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

// Outras maneiras de unir array utilizando concat e sort para deixar do menor elemento para o maior

// 8 - classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const camiseta = new Product('Camisa gola polo', 20)

console.log(camiseta)
console.log(camiseta.productWithDiscount(10))
console.log(camiseta.productWithDiscount(15))

// 9 - Herança

class ProductWithAtributes extends Product {

    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
 
    showColors() {
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
    
}

const hat = new ProductWithAtributes('Chapeu', 29.99, ['Preto', 'Amarelo', 'Verde'])

console.log(hat.name)

console.log(hat.showColors())

console.log(hat.price)

class Dog {
    constructor() {
        this.patas = 4
        this.type = 'Mamifero'
    }
}

class NewDog extends Dog {
    constructor(patas, type, color, name) {
        super(patas, type)
        this.color = color
        this.name = name
    }
}

const glock = new NewDog(4, 'Mamifero', 'Preto', 'Glock')

const array = []

array.push(glock)

array.forEach((dog) => {
    console.log(dog)
})

