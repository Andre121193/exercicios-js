function planoDeSaude(idade){
    if(idade <= 10 ){
        console.log('Valor a ser pago de R$180,00')
    } else if (idade <= 30) {
        console.log('Valor a ser pago de R$150,00')
    } else if (idade <= 60) {
        console.log('Valor a ser pago de R$195,00')
    } else if (idade > 60) {
        console.log('Valor a ser pago de R$230,00')
    }
}

planoDeSaude(10)
planoDeSaude(15)
planoDeSaude(35)
planoDeSaude(62)