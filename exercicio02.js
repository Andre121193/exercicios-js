
function triangulo(ladoA, ladoB, ladoC){
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log ('triangulo equilatero')
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        console.log ('triangulo isóseles')
    } else {
        console.log ('triangulo escaleno')
    }
}

triangulo(10,10,10)
triangulo(10,10,20)
triangulo(10,20,10)
triangulo(20,10,10)
triangulo(10,20,30)