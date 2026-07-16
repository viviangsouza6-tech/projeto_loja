
import { listItens, removeItem } from './carrinho.js'

const montaTelaCarrinho = () => {
    const divItensCarrinho = document.querySelector('#produtos')

    divItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const divItem = document.createElement('div')
        divItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminhoImagem)
        imgItem.setAttribute('alt', elem.descricaoProduto)

        const h2Descricao = document.createElement('h2')
        h2Descricao.setAttribute('class', 'titulo')
        h2Descricao.innerHTML = elem.descricaoProduto

        const pVlrUnitario = document.createElement('p')
        pVlrUnitario.setAttribute('class', 'vlr-unitario')
        pVlrUnitario.innerHTML = `Preço: R$ ${elem.valorUnitario}`
        
        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)
        
        inputQuantidade.addEventListener('input', (e) => {

            let qtd = parseInt(e.target.value)
        
            if (isNaN(qtd) || qtd < 1) {
                qtd = 1
                e.target.value = 1
            }
        
            elem.quantidade = qtd
        
            const itens = listItens()
            itens[i].quantidade = qtd
        
            sessionStorage.setItem(
                "carrinhoSessao",
                JSON.stringify(itens)
            )
        
            pSubTotal.innerHTML =
                `Subtotal: R$ ${(elem.valorUnitario * qtd).toFixed(2)}`
        
            calcularTotal()
        
        })
        
        const pSubTotal = document.createElement('p')
        pSubTotal.setAttribute('class', 'vlr-subtotal')
        pSubTotal.innerHTML =
        `Subtotal: R$ ${(elem.valorUnitario * elem.quantidade).toFixed(2).replace('.', ',')}`
        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.jpg')
        imgRemover.setAttribute('alt', 'remover')

        imgRemover.addEventListener('click', () => { if(confirm(`tem certeza que deseja remover ${elem.descricaoProduto} do carrinho?`)){
            removeItem(i)
        }
           
            montaTelaCarrinho();
            calcularTotal()
        });

        

        divItem.appendChild(imgItem)
        divItem.appendChild(h2Descricao)
        divItem.appendChild(pVlrUnitario)
        divItem.appendChild(inputQuantidade)
        divItem.appendChild(pSubTotal)
        divItem.appendChild(imgRemover)


        divItensCarrinho.appendChild(divItem)

    })

}

montaTelaCarrinho()

const calcularTotal = () => {

    let total = 0

    listItens().forEach(item => {

        total += item.valorUnitario * item.quantidade

    })

    document.querySelector("#valorTotal").innerHTML =
        `R$ ${total.toFixed(2).replace('.', ',')}`

    const frete = 10

    document.querySelector("#valorPagar").innerHTML =
        `R$ ${(total + frete).toFixed(2).replace('.', ',')}`

}
calcularTotal()




/*

const montaTelaCarrinho = () => {
    const divProdutos = document.querySelector('#produtos')

    divProdutos.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminhoImagem)
        imgItem.setAttribute('alt', elem.descricaoProduto)

        sectionItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricao-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')
        divDescricao.innerHTML = elem.descricaoProduto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem.valorUnitario).toFixed
        (2).replace('.', '.')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', 1)

        divQuant.appendChild(inputQuantidade)

        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${elem.valorUnitario * 1}`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')

        imgRemover.addEventListener('click', () => {
            removeItem(i);
            montaTelaCarrinho();
        });

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)
         
        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)

        sectionItem.appendChild(divDescricaoItens)

        divProdutos.appendChild(sectionItem)

    })
}

montaTelaCarrinho()
*/