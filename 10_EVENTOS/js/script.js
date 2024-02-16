// 1 - O que são eventos? 

/*

- Ações atreladas a algum comportamento do usuário

- Exemplo: click, algume tecla, movimento de tela e mouse

- Podemos inserir lógica quando esses eventos ocorrem

- E podemos disparar eventos em certos elementos

- Esse tecnica é conhecida como event handler

*/

// 2 - Adicionando eventos

/*

- Primeiramente precisamos selecionar o elemento que vai disparar
o evento

- Depois vamos ativar um método chamado addEventListener

- Nele declaramos qual o tipo do evento, e por meio de callback
definimos o que acontece

*/

const btn = document.querySelector('#my-button')

btn.addEventListener('click', function() {

    console.log('Clicou no botão')
})

// 2 - Removendo Eventos

/*

- Há situações que vamos querer remover os eventos dos elementos

- O método para isso é removeEventListener

- Passamos o evento que queremos remover como argumento

*/

const secondBtn = document.querySelector('#btn')

function imprimirMensagem() {
    console.log('teste')
}

secondBtn.addEventListener('click', imprimirMensagem)

const thirdBtn = document.querySelector('#other-btn')

thirdBtn.addEventListener('click', () => {
    console.log('Evento Removido')
    secondBtn.removeEventListener('click', imprimirMensagem)
})

// 3 - Objeto do evento / Argumento do evento

/*

- Todo evento possui um argumento especial, que contém informações do mesmo

- Geralmente chamado de event ou e

*/

var myTitle = document.querySelector('#my-title')   

myTitle.addEventListener("click", function(event) {

    // Com essas propriedades conseguimos extrair informações do evento

    console.log(event) // Objeto do evento
    console.log(event.srcElement) // Exibe o elemento
    console.log(event.offsetX) // Mostra o elemento no eixo x
    console.log(event.pointerType) // Tipo do click ou ponteiro
    console.log(event.target) // Mostra o elemento alvo
})

// 4 - Propagando eventos

/*

- Quando um elemento de um evento não é claramente definido pode
haver propagação

- Ou seja, um outro elemento ativar o evento

- Para resolver este problema temos o método stopPropagation
*/

var btnContainer = document.querySelector('#btn-container')

btnContainer.addEventListener('click', function() {
    console.log('Evento 1')
})

var insideBtnContainer = document.querySelector('#inside-btn')

insideBtnContainer.addEventListener('click', function(e) { //Temos que passar o e ou event de parametro
    e.stopPropagation() // Usamos o stopPropagation no evento 2
    console.log('Evento 2')
})

// 5 - Prevent Default

/*

- Muitos elementos tem ações padrão no HTML

- Como os links que nos levam a outras páginas

- Podemos remover isso com o método preventDefault

*/

const a = document.querySelector('a')

a.addEventListener('click', function(e) { // É necessario passar o e ou event

    e.preventDefault() // Comando para remover ação padrão da tag

    console.log('Não foi redirecionado')

})

// 6 - Eventos de Tecla

/*

- Os eventos de tecla mapeiam as ações no teclado

- Temos a disposição o keyup e keydown

- Keyup ativa quando a tecla é solta

- E keyDown quando é pressionada

*/

// document.addEventListener('keyup', function(e) {
//     console.log(`Soltou a tecla ${e.key}`)
// })

// document.addEventListener('keydown', function(e) {
//     console.log(`Apertou a tecla ${e.key}`)
// })