// 1 - Programação Assíncrona

/*

Oque é programação Assíncrona

- A programação Assíncronica precisa ser utilizada quando as respostas não são obtidas
de forma imediata no programa

- Chamadas a uma API são assíncronas, não sabemos quanto tempo a resposta pode demorar;

- Até agora só utilizamos instruções síncronas

- Na programação assíncrona as execuções não ocorrem em formato de fila, e sim ocorrem no seu tempo

*/

// 2 - Função SetTimeout

/*

- A função setTimeout faz parte da programação assíncrona

- Pois estabelecemos uma ação para ser executada após um certo tempo

- Ou seja, o código continua rodando e depois temos a execução da função

*/

console.log('Ainda não executou')

setTimeout(function(){
    console.log('Requisição Assíncrona') // função executando após 2 segundos (OBS: este valor é em ms)
}, 2000)

console.log('Ainda não executou')

// Mais teste

setTimeout(function() {
    console.log('Temporizador ajustado para 4 segundos')
}, 3000)


setTimeout(function () {
    console.log('Acabou o tempo')
}, 4000)

    
// 3 - Função setInterval

/*

- A função setInterval é semelhante a setTimeout, ela é executada após um tempo

- Porém ela não para de ser executada, temos a sua chamada definida pelo tempo de espera na execução

- É como um loop infinito com execução de tempo controlada

*/


// console.log('Ainda não começou')

// setInterval(function() {
//     console.log('Intervalo Assíncrono')
// }, 5000)

// console.log('Ainda não começou')

// 4 - Promises 

/*

- As promises (promessas) são execuções assíncronas

- É literalmente uma promessa de um valor que pode chegar em um ponto futuro

- Utilizamos o objeto promise e alguns métodos para auxiliar

*/

const promessa = Promise.resolve(5 + 5)

console.log(`Algum código`)

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`))   

console.log(`Outro código`)

// 5 - Falha nas promises 

/*

- Uma promise pode conter um erro, ou dependendo de como o código é executado podemos receber um
erro

- Utilizamos a função catch para isso, podemos pegar o erro e exibir

*/

Promise.resolve(4 * "asd")
    .then((n) => {
        if(Number.isNaN(n)) {
            throw new Error(`Valores inválidos`)
        }
    }).catch((erro) => console.log(`An error has ocurred: ${erro}`))


// 6 - Reijeitando promises 

/*

- A rejeição, diferente do erro, ocorre quando nós decidimos rejeitar uma promise

- Podemos fazer isso com o método reject

*/

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10) {
            resolve('O valor é maior que 10')
        }
        else {
            reject(new Error('Valor muito baixo'))
        }
    })
}
    
const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))

b.then((v) => console.log(`${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))

// 7 - Resolvendo várias promises

/*

- Com o método all podemos executar várias promises 

- JavaScript se encarrega de verificar e retornar os seus valores finais 

*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    })
}, 3000)

const p2 = Promise.resolve(10)

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30)
    }
    else {
        reject('Erro')
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 8 - Async Functions 

/*

- Async functions são funções que retornam Promises

- Consequentemente há a possibilidade de receber o resultado delas depois, além da utilização
dos métodos de Promise

*/

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor é ${value}`)
})

// 9 - Async await

/*

- Instrução await serve pra aguardar o resultado de uma async function

- Tornando mais simples de lidar com esse tipo de função, desta maneira não
precisamos trabalhar diretamente com promises 

*/

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve('Resolve a promise')
        }, 2000)
    })
}

async function chamadaComDelay() {
    console.log('Chamando a promise, e esperando resultado')
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

// 10 - Generators

/*

- Generators funcionam de forma semelhante as promises

- Ações podem ser pausadas e continuadas depois

- Temos novos operadores, como function* e yiel

*/

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
