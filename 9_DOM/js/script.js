// 1 - Protocolos da web

/*

- Um protocolo é uma forma de comunicação entre computadores através da rede 

- O HTTP serve para solicitar arquivos e imagens do servidor (Hyper Text Transfer Protocol)

- É possível navagar em sites através do HTTP

- SMTP: Protocolo para envio de email

- TCP: Protocolo para transferência de dados

*/

// 2 - Conhecendo as URLs

/*

- Cada arquivo que é carregado no navegador tem uma URL

- A URL (uniform resource locator) pode ser dividida em três partes

- Por exemplo: https://horadecodar.com.br/index.html

- https é o protocolo, horadecodar.com.br é o domínio, que referência um servidor (DNS > IP)

- E index.html o arquivo / página que estamos acessando

*/

// 3 - Conhecendo o HTML

/*

- HTML (hyper markup language) é uma linguagem de marcação

- Onde estruturamos as páginas web, criando elementos

- Os elementos são chamados de tags, que podem ser títulos, imagens, formulários e listas....

- As tags caracterizadas por <p>Texto</p>

- Podemos adicionar estilos ao HTML com CSS

*/

// 4 - A estrutura do HTML 

/*

- A estrutura do HTML tem duas partes importantes, head e body

- A head é aonde vamos inserir as configurações da página como linkar o html o css e o JavaScript

- A body é o contéudo principal da página nele está toda a parte visual como as tags, ou seja
são todos os elementos visíveis para o usuário

- As tags possuem atributos que configuram elementos

*/

// 5 - HTML e JavaScript

/*

- Podemos adicionar JavaScript ao HTML por meio da tag <script></script>, em arquivo externo ou script na página

- Algumas tags tem atributos que podem executar JS, mas isso não é muito utilizado

- Sempre que houver um link entre um arquivo e outro uma chamada HTTP é executada

- JavaScript pode ser utilizado para manipular elementos do HTML e alterar estilos

*/

// 6 - HTML e o DOM

/*

HTML e o DOM

- O DOM é uma representação do HTML da página

- ele é utilizado para acessar o HTML através do JS
(JavaScript), acessamos os elementos/tags

- Assim podemos modificá-lo através dos métodos e 
propriedades dos objetos que alteram o DOM

- DOM vem de Document Object Model

- Através dele também podemos atrelar venetos ao HTML,
como click ou pressionar teclas do mouse 

*/

// 7 - DOM

/*

- O DOM pode modificar completamente uma página

- É possivel alterar: elementos, atributos,
estilização;

- Adicionamos e removemos elementos

- O dom cria uma árvore do HTML, os elementos são chamados
de nós

imagem: https://cdn.discordapp.com/attachments/1201293976611848304/1202358674304012429/DOM.png?ex=65cd2ac6&is=65bab5c6&hm=393f4d8baf8cf443ee33752dd0cf62e19a179af107b3f444b85976707343e78f&

"""Basicamente o DOM nos permite modificar elementos
/tags por meio de js"""

*/

// 8 - Movendo-se pelo DOM

/*

- Todos os elementos podem ser acessados através
do document.body

- A partir deste elemento pai, vamos encontrado os 
childNodes(nós)

- E podemos acessar suas propriedades, e consequentemente
modificá-los

*/

console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

console.log(document.body.childNodes[5])

console.log(document.body.childNodes[5].childNodes[1].textContent)

// 9 - Selecionando elementos

/*

- Temos várias formas de selecionar especificamente 
um elemento, ou um conjunto deles

- A diferença entre eles é a forma de seleção, que pode ser 
por: id, classe e seletor de css

- Alguns exemplos são: getElementByTagName,
getElementById, querySelector

*/

// 10 - Encontrando elementos por tag

/*

- Com o método getElementsByTagName selecionamos 
um conjunto de elementos por uma tag em comum

- O argumento é uma string que leva a tag a ser
selecionada

*/

const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 11 - Encontrando elementos por id

/*

- Com o método getElementById selecionamos um único elemento, ja que o id é único na página

- O argumento é uma string que leva o id ser selecionado

*/

const title = document.getElementById("title")

console.log(title)

// 12 - Encontrando elementos por classe

/*

- Com o método getElementByClassName, selecionamos um conjunto de elementos de uma classe em comum  

- O argumento é uma string que leva a classe a ser selecionada

- Veja como os atributos do HTML começam a fazer mais sentido em conjunto com o JS
*/

const products = document.getElementsByClassName('product')

console.log(products)