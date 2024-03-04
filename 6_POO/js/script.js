// Oque é Programação Orientada a Objetos / POO

/*

- Um paradigma da programação, uma outra forma de programar     

- Utilizando objetos como seu principal principio

- A maioria dos softwares é desenvolvovido neste paradigma

- Frameworks e bibliotecas de front-end também são desenvolvidas com POO

- Estavamos desenvolvendo no modo procedural

*/

// 1 - Métodos POO = Programação orientada a objetos

/*

- Métodos podem ser adicionados aos objetos

- Eles são como propriedades, mas contém uma função

- Invocamos os métodos do mesmo modo que funções

Exemplos Abaixo


*/

const animal = {
    nome: 'Bob',
    latir: function() {
        console.log('Au au')
    }
}

console.log(animal.nome)

animal.latir();     

// Objeto Calculadora 

const calculadora = {
    soma: function(...nums) {
        soma = 0

        for (let i = 0; i < nums.length; i++) { // i = índice 
            soma = soma + nums[i]
        }

        return soma 
        
    },

    subtração: function(...nums) {
        resultado = nums[0]

        for (let i = 1; i < nums.length; i++) {
            resultado = resultado - nums[i]
        }
        
        return resultado
    },

    raizQ: function(x) {
        resultado = Math.sqrt(x)

        return resultado
    }
    
}

console.log(calculadora.soma(10, 20, 30, 40, 50))

console.log(calculadora.raizQ(81))


// Dentro dos objetos temos as propriedades e os métodos que são funções

// 2 - Aprofundando em métodos



/*

- Os métodos são utilizados para interagir tambem com as propriedades do seu objeto

- Podemos exibir ou modificá-las

- Podemos nos referenciar com o próprio objeto com a palavra reservada this

Exemplos Abaixo
*/

const pessoa = {
    nome: 'Matheus',

    getNome: function() {
        return this.nome
    },
    setNome: function(novoNome) {
        this.nome = novoNome
    }

}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome('João Lucas')

console.log(pessoa.nome)

console.log(pessoa.getNome())

// Mais testes

const user = {
    userName: 'DESKTOP',

    getUser: function() {
        return this.userName        
    },

    changeUser: function(newUser) {
        this.userName = newUser
    }
}

console.log(user.userName)

console.log(user.getUser())

user.changeUser('João Lucas')

console.log(user.userName)

console.log(user)

const greeting = {
    customGreet: 'Olá',

    greet: function(newGreet) {
        this.customGreet = newGreet
    }
}

console.log(greeting.customGreet)

greeting.greet('Olá, Seja bem vindo!')

console.log(greeting.customGreet) // Trabalhando com valor default em métodos de objetos POO

// Objeto Pessoa 2

nome =  'João Lucas'

const myPerson2 = {
    name: nome,
}


console.log(myPerson2.name)




// 3 - Sobre os prototypess

/*

- Prototype é um recurso que faz parte da arquitetura do JavaScript

- É uma espécie de herança, onde objetos pais herdam propriedades e métodos aos filhos

- Por isso muitos dados são considerados objetos e temos objetos, como: String, Number, e outros

- Ou seja, cada dado tem um objeto pai herdou características pelo prototype

*/

// 4 - Prototype na prática

/*

- O recurso fundamental do prototype que temos que entender é o fallback

- Quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral

- Ou seja, é por isso que temos a lenght em strings por exemplo

Exemplos Abaixo

*/

const text = 'asd'

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(arr.length)

console.log(Object.getPrototypeOf(arr))

// 5 - Mais sobre prototypes

/*

- Quando criamos um objeto a partir do outro, este outro será o prototype do -
objeto criado

- Porém também herdara as características do objeto pai, se for um objeto, Herda de Object

- Isto é denominado cadeia do prototype.

*/

const myObject = {
    a: 'b'
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

const myObject2 = {
    nome: 'João',
    idade: function(age) {
       let idade = age
       return idade
    }
}

console.log(Object.getPrototypeOf(myObject2))

console.log(Object.getPrototypeOf(myObject2) === Object.prototype)

const mySecundaryObject = Object.create(myObject2)

console.log(Object.getPrototypeOf(mySecundaryObject) === myObject2)

console.log(mySecundaryObject.nome)

console.log(myObject2.nome)

let idade = mySecundaryObject.idade(15)

console.log(idade)

// 6 -  Classes Básicas

/*

- Os prototypes são originados de uma classe 

- Que é o molde dos objetos, nela definimos métodos e propriedades

- Js já possui suas classes, porém podemos criar as nossas

- Isso é essencial para a orientação em objetos

Exemplos Abaixo

*/

const cachorro = {
    raca: undefined,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemao'

console.log(cachorro.raca)

console.log(pastorAlemao.raca)

const rotWeiller = Object.create(cachorro)

rotWeiller.raca = 'Rottweiler'

console.log(rotWeiller.raca)

const notebook = {
    marca: undefined,
    memoriaRam: undefined,
    processador: undefined,
    preco: undefined
}

const notebookLenovo = Object.create(notebook)

notebookLenovo.marca = 'Lenovo'

notebookLenovo.memoriaRam = 4

notebook.procssador = 'I3 11th generation'

// 7 - Funções como classe POO - Função construtora    

/*

- Utilizando funções como classe podemos iniciar as propriedades com a criação o objeto

- Este recurso se denomina função construtora

- O construtor tem como objetivo instanciar um objeto, ou seja, criar um novo objeto.

Exemplos Abaixo
*/

const criarCachorro = (nome, raca) => {
    const cachorro = Object.create({})

    cachorro.nome = nome ;
    cachorro.raca = raca;

    return cachorro;

}

const bob = criarCachorro('Bob', 'Vira lata')

console.log(bob)

const bruce = criarCachorro('Bruce', 'Pastor Alemao')

console.log(bruce)

const criarFuncionario = (name, age, job) => {
    const funcionario = Object.create({})

    funcionario.nome = name
    funcionario.age = age 
    funcionario.job = job

    return funcionario

}

const JoaoLucas = criarFuncionario('João Lucas', 15, 'Programador')

console.log(JoaoLucas)

// Mais funções como classes 

const criarVeiculo = (brand, year, model) => {
    const veiculo = Object.create({})

    veiculo.modelo = model
    veiculo.marca = brand
    veiculo.ano = year
    
    return veiculo
}

const porsche = criarVeiculo('Porsche', 2013, 'Carrera Gt')

console.log(porsche)

const arrayVeiculos = [
    {modelo: porsche.modelo, marca: porsche.marca, ano: porsche.ano}
]

arrayVeiculos.forEach(elemento => {
    console.log(`Marca: ${elemento.marca}, Ano: ${elemento.ano}, Modelo: ${elemento.modelo}`)
})

// 8 - Funções Construtora

/*

- Este recurso é semelhante ao anterior, mas com uma nova palavra chave: a new

- Em várias linguagens o new é utilizado para instanciar novos objetos, em Js isso tambem acontece

- E eles podem partir de funções

Exemplos Abaixo

*/
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro('Ozzy', 'Husky')

console.log(husky)

function CriarVeiculo(modelo, ano, marca) {
    this.model = modelo
    this.year = ano
    this.brand = marca
}

const carreraGt = new CriarVeiculo('Carrega Gt', 2013, 'Porsche')

console.log(carreraGt)

// 9 - Métodos em funções construtoras

/*

Classes de função com métodos

- Para Adicionar métodos antes da criação do objeto, Podemos acessar o prototype e coloca-los la

- Esta é basicamente a essência de JS

- Porém com a evolução da linguagem, outros recursos foram criados, é o que veremos nas proximas
aulas

Exemplos Abaixo

*/

Cachorro.prototype.latir = function() {
    console.log('Au au')
}

husky.latir()

// 10 - ClassesES6 / Classes em Js

/*

- Nas versões mais atuais em JS abandonamos as funções e utilizamos classes

- Aqui temos recursos comuns em outras linguagens como o constructor

- Além da instância new

Exemplos Abaixo
*/

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
        this.latir = function() {
            console.log('Au au')
        }
    }
}

const jeff = new CachorroClasse('Jeff', 'Labrador')

console.log(jeff)

jeff.latir()

const glock = new CachorroClasse('Glock', 'Pastor Alemão')

console.log(glock)

// 11 - Mais sobre classes  

/*

- Não podemos adicionar propriedade diretamente as classes 

- Isso precisa ser feito ao inicia-la ou via prototype

- Métodos nao precisam da palavra function

- Métodos de classe também podem utilizar this para se referir ao objeto instanciado

Exemplos Abaixo
*/

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhao possui ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'Vermelha')

console.log(scania)

scania.descreverCaminhao()

const c2 = new Caminhao(4, 'Preta')

Caminhao.prototype.motor = 4.0

console.log(c2)

console.log(c2.motor)

class Pessoa2 {
    constructor(age, name) {
        this.name = name
        this.age = age 
    }
}

Pessoa2.prototype.dormir = function() {
    console.log("Zzzzzzzzzzzzzz")
}

const matheus = new Pessoa2(16, 'Matheus')

console.log(matheus)

console.log(matheus.name)

console.log(matheus.age)

matheus.dormir()

// 12 - Substituindo propriedades pelo prototype

/*

Override nas propriedades via prototype

- As instâncias dos objetos são criadas baseadas nas classes

- Ou seja, as propriedades tem valores definidos no constructor ou por métodos 

- Para alterá-las podemos usar o prototype

Exemplos Abaixo
*/

class Humano {
    constructor(name, age = 'Não especificada') {
        this.age = age
        this.name = name
    }
}

const paulo = new Humano('Paulo', 22) // Podemos utilizar o valor default 

console.log(paulo)

Humano.prototype.age = 'Não Definida'

console.log(paulo.age)

console.log(Humano.prototype.age)

const maria = new Humano('Maria', 22)

console.log(maria)

class Greet {
    constructor(name) {
        this.name = name
    }
}

const carlos = new Greet("carlos")

console.log(carlos)

function greet(name) {
    if (name === undefined) {
        console.log('Olá, Seja Bem-Vindo!')
    }
    else {
        console.log(`Ola ${name}, Seja Bem-vindo!`)
    }
}

greet(carlos.name)

greet()

// 13 - Sybom com classes

/*

- Quando utilizamos o recurso de symbol com classe é possivel criar uma propriedade unica e 
imutavel

- Isso é util quando há algum dado que se repetirá em todos os objetos criados a partir da classe

Exemplos Abaixo
*/

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao('Boeing', 10)

console.log(boeing)

console.log(boeing[asas])

console.log(boeing[pilotos])

// 14 - Getters e setters

/*

- Os getters e setters são bem famosas na orientação a objetos

- O get é um método utilizado para exibir o valor de alguma propriedade

- E o set é utilizado para alterar o valor

- Através de métodos, temos um bloco de código para transformação de dados

Exemplos Abaixo
*/

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você esta lendo um post ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagArray = tags.split(", ")
        this.tags = tagArray
    }
}

const myPost = new Post('Algum post', 'Esse é um post sobre programação')

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = 'JavaScript, Programação, JS'

console.log(myPost)

console.log(myPost.tags)

for (let i = 0; i < myPost.tags.length; i++) {
    console.log(myPost.tags[i])    
}

// 15 - Herança

/*

- Uma Classe pode herdar propriedades de outra por meio de herança

- Utilizamos a palavra chave extends, para adicionar a classe que vai trazer as propriedades

- E super para enviar os valores para a classe pai

Exemplos Abaixo

*/

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, 'Shark')

console.log(Mamifero)

console.log(shark)

console.log(shark.patas, shark.nome)

// 16 - Operador instaceof

/*

- Assim como typeof que verifica o tipo, temos o operador instaceof

- Que verifica se um objeto é pai de outro, para ter certeza da ancestrabilidade

- Isso é verificado com objeto => classe, e não através das classes

Exemplos Abaixo

*/

console.log(shark instanceof Lobo)

console.log(new Lobo(4, 'teste') instanceof Mamifero)

console.log(new Post('Algum Post', 'Post', 'aaa') instanceof Mamifero)

console.log(new Post('Algum Post', 'Post', 'aaa') instanceof Lobo)

console.log(typeof(Post))

console.log(typeof(shark))

console.log(typeof(Mamifero))

console.log(typeof(carreraGt))

    
number = [6, 2, 8, 1, 10] // = 16

function sumArray(array) {
    let min = array[0]

    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }       
    }

    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array [i]
        }
    }

    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }

    const sumNumber = max + min
    const result = sum - sumNumber

    console.log(result)
}

sumArray(number)