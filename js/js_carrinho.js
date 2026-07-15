//CRIANDO ARRAY DE ITENS DO CARRINHO
let itenscarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho02 = JSON.parse(sessionStorage.get("carrinhoSessao")) || []

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

//FUNÇÂO PARA REMOVER OS ITENS DO CARRINHO
const removeItem = (indice) => {
    itenscarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itenscarrinho)
    );
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem }

