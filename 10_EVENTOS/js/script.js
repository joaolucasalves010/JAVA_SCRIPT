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

    // Modificando o botão 
    btn.style.color = 'green'
    btn.style.background = 'hsl(0, 0%, 25%)'
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