function calculo_venda(venda, pagamento) {

    let valorVenda = venda
    let forma_pagamento = pagamento
    let valor_alterado

    switch (forma_pagamento) {

        case '1':
            valor_alterado = valorVenda - (valorVenda * 8 / 100)
            break

        case '2':
            valor_alterado = valorVenda - (valorVenda * 4 / 100)
            break

        case '3':
            valor_alterado = valorVenda
            break

        case '4':
            valor_alterado = (valorVenda * 8 / 100) + (Number(valorVenda))
            break

        default:
            console.log('>> ERRO: Isso não corresponde à nenhuma forma de pagamento.')
            break
    }

    if (valor_alterado != undefined)
        return valor_alterado.toFixed(2)
    else
        return false
}

function calculo_parcelas(valor_alterado, pagamento) {

    let valor = valor_alterado
    let parcela

    if (pagamento == 3)
        parcela = valor / 2
    else if (pagamento == 4)
        parcela = valor / 4


    if (parcela != undefined)
        return parcela.toFixed(2)
    else
        return false

}

module.exports = {
    calculo_venda,
    calculo_parcelas
}