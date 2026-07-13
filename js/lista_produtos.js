const produtos = [
    {
        idProduto: 1,
        descricaoProduto: "Brinco Argola Dourada",
        valorUnitario: 39.90,
        unidade: "UN",
        caminhoImagem: "../imagens/brincos02.png",
        idSecao: 1,
        secao: "Brincos"
    },
    {
        idProduto: 2,
        descricaoProduto: "Brinco Pérola Clássica",
        valorUnitario: 34.90,
        unidade: "UN",
        caminhoImagem: "../imagens/br00.webp",
        idSecao: 1,
        secao: "Brincos"
    },
    {
        idProduto: 3,
        descricaoProduto: "Bolsa",
        valorUnitario: 29.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsa01.webp",
        idSecao: 1,
        secao: "Bolsas"
    },
    {
        idProduto: 4,
        descricaoProduto: "Bolsa",
        valorUnitario: 42.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsas04.jpg ",
        idSecao: 1,
        secao: "Bolsas"
    },
    {
        idProduto: 5,
        descricaoProduto: "Bolsa ",
        valorUnitario: 36.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsas08.webp",
        idSecao: 1,
        secao: "Bolsa"
    },
    {
        idProduto: 6,
        descricaoProduto: "Bolsa",
        valorUnitario: 59.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bls000.webp",
        idSecao: 2,
        secao: "Bolsas"
    },
    {
        idProduto: 7,
        descricaoProduto: "Colar Coração Dourado",
        valorUnitario: 69.90,
        unidade: "UN",
        caminhoImagem: "img/colares/colar-coracao.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 8,
        descricaoProduto: "Colar Borboleta",
        valorUnitario: 64.90,
        unidade: "UN",
        caminhoImagem: "img/colares/colar-borboleta.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 9,
        descricaoProduto: "Colar Lua e Estrela",
        valorUnitario: 72.90,
        unidade: "UN",
        caminhoImagem: "img/colares/colar-lua-estrela.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 10,
        descricaoProduto: "Colar Trevo",
        valorUnitario: 61.90,
        unidade: "UN",
        caminhoImagem: "img/colares/colar-trevo.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 11,
        descricaoProduto: "Pulseira Riviera",
        valorUnitario: 79.90,
        unidade: "UN",
        caminhoImagem: "img/pulseiras/pulseira-riviera.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 12,
        descricaoProduto: "Pulseira Pérolas",
        valorUnitario: 54.90,
        unidade: "UN",
        caminhoImagem: "img/pulseiras/pulseira-perolas.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 13,
        descricaoProduto: "Pulseira Charms",
        valorUnitario: 89.90,
        unidade: "UN",
        caminhoImagem: "img/pulseiras/pulseira-charms.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 14,
        descricaoProduto: "Pulseira Love",
        valorUnitario: 49.90,
        unidade: "UN",
        caminhoImagem: "img/pulseiras/pulseira-love.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 15,
        descricaoProduto: "Pulseira Cristais",
        valorUnitario: 68.90,
        unidade: "UN",
        caminhoImagem: "img/pulseiras/pulseira-cristais.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 16,
        descricaoProduto: "Anel Solitário",
        valorUnitario: 45.90,
        unidade: "UN",
        caminhoImagem: "img/aneis/anel-solitario.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 17,
        descricaoProduto: "Anel Ajustável",
        valorUnitario: 32.90,
        unidade: "UN",
        caminhoImagem: "img/aneis/anel-ajustavel.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 18,
        descricaoProduto: "Anel Borboleta",
        valorUnitario: 39.90,
        unidade: "UN",
        caminhoImagem: "img/aneis/anel-borboleta.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 19,
        descricaoProduto: "Anel Coração",
        valorUnitario: 36.90,
        unidade: "UN",
        caminhoImagem: "img/aneis/anel-coracao.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 20,
        descricaoProduto: "Anel Infinito",
        valorUnitario: 41.90,
        unidade: "UN",
        caminhoImagem: "img/aneis/anel-infinito.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 21,
        descricaoProduto: "Presilha Flor",
        valorUnitario: 19.90,
        unidade: "UN",
        caminhoImagem: "img/cabelo/presilha-flor.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 22,
        descricaoProduto: "Tiara Pérolas",
        valorUnitario: 34.90,
        unidade: "UN",
        caminhoImagem: "img/cabelo/tiara-perolas.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 23,
        descricaoProduto: "Scrunchie Cetim Rosa",
        valorUnitario: 14.90,
        unidade: "UN",
        caminhoImagem: "img/cabelo/scrunchie-rosa.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 24,
        descricaoProduto: "Laço Boutique",
        valorUnitario: 17.90,
        unidade: "UN",
        caminhoImagem: "img/cabelo/laco-boutique.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 25,
        descricaoProduto: "Piranha Acrílica",
        valorUnitario: 22.90,
        unidade: "UN",
        caminhoImagem: "img/cabelo/piranha-acrilica.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 26,
        descricaoProduto: "Bolsa Transversal Nude",
        valorUnitario: 119.90,
        unidade: "UN",
        caminhoImagem: "img/bolsas/bolsa-nude.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 27,
        descricaoProduto: "Bolsa Mini Preta",
        valorUnitario: 99.90,
        unidade: "UN",
        caminhoImagem: "img/bolsas/bolsa-preta.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 28,
        descricaoProduto: "Bolsa Tiracolo Rosa",
        valorUnitario: 109.90,
        unidade: "UN",
        caminhoImagem: "img/bolsas/bolsa-rosa.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 29,
        descricaoProduto: "Carteira Feminina",
        valorUnitario: 69.90,
        unidade: "UN",
        caminhoImagem: "img/bolsas/carteira.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 30,
        descricaoProduto: "Bolsa Matelassê",
        valorUnitario: 139.90,
        unidade: "UN",
        caminhoImagem: "img/bolsas/bolsa-matelasse.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 31,
        descricaoProduto: "Óculos Gatinho",
        valorUnitario: 79.90,
        unidade: "UN",
        caminhoImagem: "img/oculos/oculos-gatinho.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 32,
        descricaoProduto: "Óculos Redondo",
        valorUnitario: 74.90,
        unidade: "UN",
        caminhoImagem: "img/oculos/oculos-redondo.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 33,
        descricaoProduto: "Óculos Quadrado",
        valorUnitario: 82.90,
        unidade: "UN",
        caminhoImagem: "img/oculos/oculos-quadrado.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 34,
        descricaoProduto: "Óculos Retrô",
        valorUnitario: 89.90,
        unidade: "UN",
        caminhoImagem: "img/oculos/oculos-retro.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 35,
        descricaoProduto: "Óculos Degradê",
        valorUnitario: 84.90,
        unidade: "UN",
        caminhoImagem: "img/oculos/oculos-degrade.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 36,
        descricaoProduto: "Relógio Feminino Rose",
        valorUnitario: 149.90,
        unidade: "UN",
        caminhoImagem: "img/relogios/relogio-rose.jpg",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 37,
        descricaoProduto: "Relógio Prata",
        valorUnitario: 139.90,
        unidade: "UN",
        caminhoImagem: "img/relogios/relogio-prata.jpg",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 38,
        descricaoProduto: "Relógio Dourado",
        valorUnitario: 159.90,
        unidade: "UN",
        caminhoImagem: "img/relogios/relogio-dourado.jpg",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 39,
        descricaoProduto: "Relógio Minimalista",
        valorUnitario: 129.90,
        unidade: "UN",
        caminhoImagem: "img/relogios/relogio-minimalista.jpg",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 40,
        descricaoProduto: "Relógio Pulseira de Couro",
        valorUnitario: 169.90,
        unidade: "UN",
        caminhoImagem: "img/relogios/relogio-couro.jpg",
        idSecao: 8,
        secao: "Relógios"
    }
];

export {produtos}