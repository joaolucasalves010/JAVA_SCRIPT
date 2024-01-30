// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

// 3 - propriedades
const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
};

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
  name: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loop em Arrays

const users = ['Matheus', 'Joao', 'Pedro']

for (let i = 0; i < users.length; i++) {
    console.log(`Listando Usuários ${users[i]}`)
}


/*

Acima podemos ver que utilizamos o lenght para percorrer apenas 
a quantidade de itens que tem dentro do array
onde o console vai mostrar todos os elementos do array

*/

// 11 - Métodos de array: Push e Pop

const array = ['a', 'b', 'c']

console.log(array.length)

array.push('d')

console.log(array)

array.pop()

console.log(`Tamanho do array: ${array.length}`)

console.log(array)

array.push('d', 'e', 'f')

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido) // Nesse caso o item removido foi o F pois ele era o ultimo elemento do array

/* 

Com os métodos de array, pop e push podemos remover e adicionar
novos elementos no final da lista, para adicionarmos utilizamos o push
ja para removermos utilizamos o pop, tambem podemos adicionar varios elementos de uma vez so
tambem podemos guardar em uma váriavel o item que foi removido do array caso precisarmos utiliza-lo
novamente.

*/

// 12 - Shift & Unshifit

const letters = ['a', 'b', 'c']

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift('p', 'q', 'r')

letters.unshift('z')

console.log(letters)


/* 

Shift e Unshift funcionam de forma contrária ao pop e push,
pois eles adicionam e removem elementos no começo do array

adicionamos com o unshift e removemos com o shift 

podemos assim como no pop e push colocar a letra removida em uma váriavel
para se quisermos reutiliza-la depois

*/

// 13 - Métodos de array: indexOf e lastIndexOf

const myElements = ['Maçã', 'Pêra', 'Uva', 'Abacate', 'Uva']

console.log(myElements.indexOf('Maçã'))
console.log(myElements.indexOf('Abacate'))

console.log(myElements.indexOf('Uva'))
console.log(myElements.lastIndexOf('Uva'))

console.log(myElements.indexOf('Banana'))
console.log(myElements.lastIndexOf('Banana')) // Se o item não existir no array ele retorna -1

/*

Com lasIndexOf e indexOf podemos saber em que índice esta um elemento no nosso array 
a diferença entre os dois é que usando o indexOf ele vai mostrar onde o elemento está da esquerda
para a direita ou seja se tivermos mais de um mesmo elemento na nossa lista ele mostrara apenas o primeiro
por isso utilizar o lasIndexOf porque ele mostra se existe mais de um desse mesmo elemento na lista
e qual é o índice que ele foi digitado por ultimo.

*/

// 

// 14 - Métodos de array: Slice.

const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testeSlice.slice(2, 4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3) // Isso retorna uma lista vazia pois passou dos parâmetros!

const subArray4 = testeSlice.slice(2)

console.log(subArray4) // Isso ira printar todos os elementos do array a partir do índice 2!


/*

- O método de slice é um método para extrair um array menor de um array maior.

- O intervalo de elementos é determinado pelos parâmetros, que são: o índice
de ínicio e o índice de fim;



- O ultimo elemento é ignorado, se quisermos ele devemos somar mais 1 ao índice
final!.

- Se o slice passar dos parâmetros do array será retornado ao console um
array vazio.

- Como no exemplo acima podemos ver que se colocar apenas um índice dentro do parâmetro do slice
será retornado ao console todos elementos do array a partir daquele índice

*/

// 15 - forEach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
  console.log(`O número é ${numero}`)
})

const posts = [
  {title: "Primeiro post", category: "PHP"},
  {title: "Segundo post", category: "Java Script"},
  {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
  console.log(`${post.title} sobre ${post.category}`)
})

const carModels = [
  {brand: 'Porsche', model:'Porsche 911', year: 1964},
  {brand: 'Nissan', model:'R34', year: 1973},
  {brand: 'Ferrari', model:'La Ferrari', year: 2013}
]

carModels.forEach((models) => {
  console.log(`Carro da marca ${models.brand}, fabricado no ano ${models.year}, modelo do carro ${models.model}`)
})
  
/*

- O forEach é como uma estrutura for ou while, porém é um método.

- Ele percorre cada um dos elementos do array;

- Para alguns sua sintaxe pode ser mais simples.

*/

// 16 - Métodos de array: Includes

const brands = ['BMW', 'VW', 'Fiat']

console.log(brands.includes('Fiat'))

console.log(brands.includes('Nissan'))

if (brands.includes('Nissan')) {
  console.log('Há carros da marca Nissan')
}
else if (!(brands.includes('Nissan'))) {
  console.log('Não há carros da marca Nissan!')
}

/*

- O método includes verifica se o array tem um elemento

- Utilizamos no array e como argumento colocamos o que buscamos;


*/

// 17 - Métodos de array: Reverse

const reverseTest = [1, 2, 3, 4, 5]

console.log(reverseTest)

reverseTest.reverse()

console.log(reverseTest)


/* 

- O método reverse inverte os elementos de um array

- Esse método modifica o array original.

*/

// 18 - Métodos de String: Trim

const trimTest = "  testando  \n "

console.log(trimTest)

console.log(trimTest.trim())

console.log(trimTest.length)

console.log(trimTest.trim().length)


/*

- O trim remove tudo que não é texto em uma string

- Como caracteres especiais e espaços em branco

- Um método interessante para senitização de dados

- O método não modifica o texto original

*/

// 19 - Métodos de texto: Padstart

const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")

console.log(testePadEnd)

// 20 - Métodos de texto: Split

const frase = 'O rato roeu a roupa do rei de roma'

const arrayDaFrase = frase.split(" ")

for (let i = 0; i < arrayDaFrase.length; i++) {
  console.log(arrayDaFrase[i])
}


/*

- O split divide uma string em um array

- Cada elemento será determinado em um separador comum

- Os mais utilizados, são: ponto e vírgula, vírgula e espaço

*/

// 21 - Métodos de texto: Join

const fraseDeNovo = arrayDaFrase.join(" ")

console.log(fraseDeNovo)

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor', 'Arduino']

const fraseDeCompra = `Precisamos comprar os seguintes itens: ${itensParaComprar.join(", ")}`

console.log(fraseDeCompra)

/*

- O join une um array em uma string

- Podemos colocar o separador também, para formatar a string

*/

// 22 - Métodos de String: Repeat.

const palavra = "Testando "

console.log(palavra.repeat(4))

/*

- O método repeat repet um texto n vezes

- Onde n é o numero que colocamos seu argumento

*/

// 23 - RestOperator / Rest Parameter

const somaInfinita = (...nums) => {
  
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i]
  }

  return total;

}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(190, 2009, 2008, 3567, 90))


/*

- Rest Operator é caracterizado por ...

- Podemos utilizá-lo para receber indefinidos argumentos em uma função;

- Assim não precisamos declarar exatamente o que vamos receber, deixando a função mais ampla

*/

// 24 - Estrutura for of


const somaInfinita2 = (...args) => {
  total = 0

  for (num of args) {
    total = total + num;
  }

  return total;
}

console.log(somaInfinita2(1, 2, 3))

console.log(somaInfinita2(14, 15, 234))


/*

- O for...of é uma estrutura de repetição semelhante ao for, porém mais simples

- o número de repetição é baseado no array utilizado

- E Podemos nos referir aos elementos sem precisar acessar o índice deles.
  
*/

// 25 - Destructuring Objetos

const userDetails = {
  firstname: "Matheus",
  lastname: "Batisti",
  job: "Programador"
}

const {firstname, lastname, job} = userDetails

console.log(firstname, lastname, job)


// 26 - Renomeando as variáveis

const {firstname:primeiroNome} = userDetails

console.log(primeiroNome)

/*

- Destructuring é uma funcionalidade que nos permite desestruturar algum dado

- No caso dos objetos, é possivel criar variáveis a partir de suas propriedades com uma 
simples sintaxe 

*/

// 27 - Destructuring Arrays

const myList = ['Avião', 'Submarino', 'Carro']

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

/*

- O destructuring também pode ser utilizado para destruturar um array em variáveis

- A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves

*/

// 28 - JSON

const testeJson = '{"name": "João Lucas", "age": 15, "skills": ["Python", "JS", "HTML", "CSS"]}'

/*

- O Json, JavaScript Object Notation, é um dado em formato de texto

- Utilizamos para comunicação entre API e Front-end;

- Sua formatação é rigorosa, se for mal feita o dado é invalidado e não conseguimos comunicação

- Seu formato lembra o Object Literals

- Regras: apenas aspas dusplas e não aceita comentários

*/


// 29 - JSON para objeto e objeto para JSON


const meuObjeto = JSON.parse(testeJson)

console.log(meuObjeto)

console.log(meuObjeto.name)

console.log(typeof meuObjeto)


// JSON Inválido

const badJson = '{"name": João Lucas, "age": 15}'

// const badJsonObject = JSON.parse(badJson)

// console.log(badJsonObject.name) // O erro ocorre por conta que criamos uma string sem as aspas  

meuObjeto.IsOpenToWork = true

console.log(meuObjeto)

delete meuObjeto.IsOpenToWork

console.log(meuObjeto) // Podemos Manipular esse objeto como todos os outros ou seja adicionar e remover elementos

const myNewJson = JSON.stringify(meuObjeto) // O stringify faz com que você transforme seu objeto em JSON novamente

console.log(myNewJson)

console.log(typeof myNewJson)


/*

- Na maioria das vezes vamos precisar converter objetos para JSON;

- Ou um JSON para um objeto JS válido

- Utilizamos o objeto JSON e os métodos stringify e parse;

*/

