//PEGANDO ELEMENTOS DOS DOM 
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO charge
inputCep.addEventListener('change' , (evt)=>{
  
    const numCep = evt.target.value.replace(/\D/g, "")
    console.log(numCep)
    if( numCep.length !== 8){
        alert('CEP INVÁLIDO')
        return
    }
    consultaCEP(numCep)
})

//FUNÇÃO CONSULTA CEP VIACEP
const consultaCEP = async (cep) => {
    //TENTA CONECTAR A API
    try{
        //FAZ A COMUNICAÇÃO COM A API DO VIA CEP POR MEIO DA FUNÇÃO fetch
        //AWAIT  AGUARDA ATÉ OBTER UM PROMISE
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
//SE O STATUS DA RESPOSTA NÃO FOR OK DISPARA UM EXEÇÃO
if(!resposta.ok){
throw new Error("ERRO NA REQUISIÇÃO")
}
//OBTEM OS DADOS DA API
const dadosEndereco = await resposta.json()
//VERIFICA SE OS DAOD S SÃO VÁLIDOS 
if (dadosEndereco.erro) {alert('CEO NÃO LOCALIZADO')

return
    
}
//CHAMA A FUNÇÃO 
    }catch(erro){
        console.log("ERRO",erro.message) }

   
}
//OBJETO LITERAL
const campos ={
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector("#bairro"),
    localidade:document.querySelector('#localidaade'),
    uf: document.querySelector('uf'),

}
 //FUNÇÃO CARREGA INPUTS
 const carregaInput = (objEndereco) => {

 }