//CRIANDO ARRAY DE ITENS DO CARRINHO
const itenscarrinho = JSON.parse(sessionStorage.get("carrinhoSessao")) || []
//const itensCarrinho02 = JSON.parse(sessionStorage.get("carrinhoSessao")) || []

//FUNÇÃO PARA ADICIONAR ITEM
const addItem = (objItem) => {
    itenscarrinho.push(objItem)

    sessionStorage.set("carrinhoSessao"), itenscarrinho

    listItens()
}

//FUNÇÂO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
      const listItens = JSON.stringify(sessionStorage.get("carrinhoSessao"))

    montaTelaCarrinho(listItens)

}

//MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens) => {
   const sectionItensCarrinho = document.querySelector('#itens-carrinho')

   objListaItens.forEach((elem, i) =>{
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', item)

        const divImgItem = document.createElement('img')
        ImgItem.setAttribute('src', elem.caminhoImagem)
        ImgItem.setAttribute('alt', elem.descricaoProduto)

        ImgItem.appendChild(ImgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divQuant.setAttribute('class', input-quantidade)

        const inputQuantidade = document.createElement ('input')
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

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)
})

}
        
//EXPORTAÇÃO
export {addItem}
        
