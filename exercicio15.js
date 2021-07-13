function concessionaria(carro){
    switch (carro){
        case 'hatch':
            console.log('compra efetuada com sucesso.')
            break
        case 'sedam':
        case 'caminhonete':
        case 'motocicleta':
            console.log('Tem certeza que não prefere este modelo?')   
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')    
    }
}

concessionaria('hatch')
concessionaria('sedam')
concessionaria('caminhonete')
concessionaria('motocicleta')
concessionaria('aviao')