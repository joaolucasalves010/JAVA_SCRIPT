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

// 7 - Mais eventos de mouse 

/*

- O mouse pode ativar outros eventos 

- mousedown: pressionou botão do mouse

- mouseup: soltou botão do mouse

- dbclick: click duplo

*/

var mouseEvents = document.querySelector('#mouse')

var botao = document.createElement('button')

mouseEvents.addEventListener('mousedown', function() {
    console.log('Apertou o botão')
})

mouseEvents.addEventListener('mouseup', function() {
    console.log('soltou o botão')
})

mouseEvents.addEventListener('dblclick', function() {
    console.log('Duplo click')
})

// 8 - Movimento do mouse

/*

- É possível ativar um evento a partir da movimentação 
do mouse

- O evento é o mousemove

- Com o objeto de evento podemos detetectar a posição do ponteiro
do mouse

*/

document.addEventListener('mousemove', function(e){
    // console.log(`No eixo x: ${e.x}`)
    // console.log(`No eixo y: ${e.y}`)
})

// 9 - Eventos por scroll

/*

- Podemos também adicionar um evento ao scroll do mouse/página

- Isso é feito pelo evento scroll

- Podemos determinar que algo aconteça apos chegar numa
posição escolhida da tela
*/

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 200) {
        console.log('Passamos de 200px')
    }
})

// 10 - Evento de focus/blur

/*

- O evento focus é disparado quando focamos em um elemento

- Ja o blur é quando perde o foco do elemento

- Este são comuns em inputs

*/


var input = document.querySelector('#my-input')

input.addEventListener('focus', (e) => {
    console.log('Entrou no input') // Focus 
})

input.addEventListener('blur', (e) => {
    console.log('Saiu do input') // Blur 
})

// 11 - Eventos de carregamento 

/*

- Podemos adicionar um evento ao carregar a página que é o load

- E quando o usuário sai da página, que é o beforeunload

*/


// Obs <- Usar isso não é recomendado

window.addEventListener('load', (e) => {
    console.log('A página carregou')
})

window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
})

// 12 - Tecninca de Debounce

/*

- O debounce é uma tecninca utilizada para fazer um evento
disparar menos vezes

- Isso poupa memória do usuário, pois talvez nem sempre
o evento seja necessário
*/

const debounce = (f, delay) => {
    let timeout;

    return (...args) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        
        timeout = setTimeout(() => {
            f.apply(args)
        }, delay)
    }
}

window.addEventListener('mousemove', debounce(() => {
    console.log('Executando a 400ms')
}, 400))