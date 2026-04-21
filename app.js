'use strict'

import produtos from "./produtos.json" with { type: "json" }

function definirClasses(categoria) {
    let classe

    if (categoria == 'Informática') {
        classe = 'informatica'
    } else if (categoria == 'Eletrônicos') {
        classe = 'eletronico'
    } else {
        return false
    }

    return classe
}

function definirClassificacao(avaliacao) {
    let cincoEstrelas = avaliacao
    let estrelasVazias = 5 - avaliacao
    let estrelas = ''

    while (cincoEstrelas > 0) {
        estrelas += '★'

        cincoEstrelas--
    }

    while (estrelasVazias > 0) {
        estrelas += '☆'

        estrelasVazias--
    }

    return estrelas
}

function criarCard(produto) {
    const card = document.createElement('div')
    card.className = 'card'

    const imgProduto = document.createElement('img')
    imgProduto.src = `./img/${produto.imagem}`
    imgProduto.alt = `Foto de ${produto.nome}`

    const nomePdt = document.createElement('h4')
    nomePdt.className = 'titulo'
    nomePdt.textContent = produto.nome

    const descricaoPdt = document.createElement('p')
    descricaoPdt.className = 'descricao'
    descricaoPdt.textContent = produto.descricao

    const categoriaPdt = document.createElement('span')
    categoriaPdt.className = definirClasses(produto.categoria)
    categoriaPdt.textContent = produto.categoria

    const valorPdt = document.createElement('p')
    valorPdt.className = 'preco'
    valorPdt.textContent = `R$ ${produto.preco}`

    const avaliacaoPdt = document.createElement('p')
    avaliacaoPdt.className = 'classificacao'
    avaliacaoPdt.textContent = definirClassificacao(produto.classificacao)

    card.append(imgProduto, nomePdt, descricaoPdt, categoriaPdt, valorPdt, avaliacaoPdt)

    return card
}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)