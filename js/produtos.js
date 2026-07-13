//IMPORTANDO OS PRODUTOS DO ARQUIVO lista_produtos.js
import {produtos} from './lista_produtos.js'

//CARREGANDO PRODUTOS
const carregandoProdutos = (idSecao) => {
    if (idSecao == 0) {
        //CHAMANDO AS FUNÇÕES montaCard E  listarProdutos
        montaCards(listarProdutos())
    } else {
        //CHAMANDO A FUNÇÃO filtroProduto
        filtroProduto(idSecao)
    }

    carregaSecoes()
}

    
//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listarProdutos = () => {
    return produtos
}

//MONTANDO OS MENUS SEÇÕES
const menuSecoes = () =>{
    //CRIANDO A COLEÇÃO MAP
    const mapSecoes = new Map ()
    //PERCORRENDO O ARRAY PRODUTO
    produtos.forEach((elem)=>{
        //SELECIONANDO AS SEÇÔES
        mapSecoes.set(elem.idSecao, elem)
    })

//CONVERTENDO MAP EM ARRAY
    const secoesFiltrada = Array.from(mapSecoes.values())

//RETORNANDO O ARRAY SELECIONADO
    return secoesFiltrada
}

//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregaSecoes = () =>{
    //PEGANDO O ELEMENTO ul menu-secoes DO DOM
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    //LIMPANDO O ELEMENTO DO DOM 
    ulMenuSecoes.innerHTML = ''
    
    //CRIANDO O ELEMENTO li
     const liMenu = document.createElement('li')

     //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
    const aMenu = document.createElement('a')
    aMenu.setAttribute('href', '#')
    aMenu.setAttribute('class', 'lnk-secao')
    aMenu.innerHTML= 'Todos'

    aMenu.addEventListener('click', () => {
        montaCards(listarProdutos())
    })

    //ADICIONANDO O ELEMENTO FILHO a NO li
    
    liMenu.appendChild(aMenu)
    ulMenuSecoes.appendChild(liMenu)

    
    //CHAMANDO A FUNÇÂO menuSecoes E PERCORRENDO O ARRAY DE SEÇÔES JÀ SELECIONADAS
    menuSecoes().forEach((elem, i)=>{
        //CRIANDO O ELEMENTO li
        const liMenu = document.createElement('li')

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'lnk-secao')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click',()=>{
        montaCards(filtroProduto(elem.idSecao))
        })

        //ADICIONANDO O ELEMENTO FILHO a NO li
        liMenu.appendChild(aMenu)
 
        //ADICIONANDO O ELEMENTO FILHO liMenu NO OBJETO DOM
        ulMenuSecoes.appendChild(liMenu)
    })


}
//FUNÇÂO FILTRO PRODUTO 
const filtroProduto = (idSecao)=>{
    //FILTRANDO OS PRODUTOS A PARTIR DO REPETIÇÃO filter
    return produtos.filter(elem => elem.idSecao === idSecao)
}

//CAPTURANDO OS CARACTERES DO INPUT PESQUISA
//PEGANDO O INPUT DO DOM
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt)=>{
    //PEGANDO O VALOR DO input E CONVERTENDO EM MINÙSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUINDO 
    montaCards(produtos.filter(elem => elem.descricaoProduto.toLowerCase().includes(txtInput)))
})

//FUNÇÃO MONTAR CARDS
const montaCards = (objProdutos) => {
     //PEGANDO ELEMENTOS DO DOM
     const sectionCards = document.querySelector('#cards')
     //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''

    //PERCORRENDO O ARRAY DE objProdutos
    objProdutos.forEach((elem, i)=>{
        //CRIANDO O ELEMNTO div E DEFININDO O ATRIBUTO CARD
        const divCard= document.createElement('div')
        divCard.setAttribute('class', 'card')
    
        //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÂO DOS PRODUTOS
        const imgCard= document.createElement('img')
        imgCard.setAttribute('src', elem.caminhoImagem)
        imgCard.setAttribute('alt', elem.descricaoProduto)
    
        //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS 
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricaoProduto 
    
        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML += `R$ ${parseFloat(elem.valorUnitario).toFixed (2).replace('.',',')}`
    
        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', ()=> {
            window.location.href = 'paginas/carrinho.html'
        })


        //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        //ADICIONANDO O divCard A SECTION CARDS
        sectionCards.appendChild(divCard)

    })
}

montaCards(listarProdutos());
carregaSecoes();