//CRIANDO ARRAY DE ITENS DO CARRINHO
let itenscarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho02 = JSON.parse(sessionStorage.get("carrinhoSessao")) || []
//FUNÇÃO ITEM
const item = (objProduto) => {

    const item = {
        idProduto: objProduto.idProduto,
        descricaoProduto: objProduto.descricaoProduto,
        valorUnitario: objProduto.valorUnitario,
        unidade: objProduto.unidade,
        caminhoImagem: objProduto.caminhoImagem,
        quantidade: 1,
    }

    return item
} 
console.log(itenscarrinho.findIndex(elem=> elem.idProduto == 80 ))

//FUNÇÃO PARA ADICIONAR ITEM
const addItem = (objItem) => {
    itenscarrinho.push(objItem)

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itenscarrinho))

}

//FUNÇÂO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

    return listaItens

}

//FUNÇÂO PARA REMOVER OS ITENS DO ARRAY
const removeItem = (pos) => {
    itenscarrinho.splice(pos, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itenscarrinho)
    );
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem }
item(0)


