////////////////////////////////////////////////////////////////////////
//Objetivo: Elaborar um programa para auxiliar no processo de vendas de 
//uma loja, solicitando o valor da venda e apresentar o valor atualizado, 
//conforme a tabela de condições.
//Data: 30/08/2023
//Autor: Estela Alves de Moraes
//Versão: 1.0
/////////////////////////////////////////////////////////////////////////

var novo_valor = require('./modulo/novo_valor')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log()
entradaDados.question('Valor da venda: R$', function (valorVenda) {

    console.log()
    let venda = valorVenda.replace(',', '.')
    if (venda == '' || isNaN(venda)) {
        console.log('>> ERRO: O valor deve ser um número.')
    } else {
        console.log()
        console.log('+----------------------------------------------+')
        console.log('| Código | Classificação                       |')
        console.log('|----------------------------------------------|')
        console.log('| 1      | Á vista, 8% de desconto             |')
        console.log('| 2      | Á vista no cartão, 4% de desconto   |')
        console.log('| 3      | Em 2x, preço normal, sem juros      |')
        console.log('| 4      | Em 4x, preço acrescido de 8%        |')
        console.log('+----------------------------------------------+')
        console.log()

        entradaDados.question('Código da forma de pagamento: ', function (formaPagamento) {

            let valor_alterado
            let pagamento = formaPagamento
            let parcela

            valor_alterado = novo_valor.calculo_venda(venda, pagamento)
            parcela = novo_valor.calculo_parcelas(valor_alterado, pagamento)

            if (valor_alterado) {
                console.log('Valor final: R$' + valor_alterado)
                if (pagamento == 3 || pagamento == 4) {
                    console.log('Em parcelas de: R$' + parcela)
                }
            }

            entradaDados.close()
        })
    }

})
