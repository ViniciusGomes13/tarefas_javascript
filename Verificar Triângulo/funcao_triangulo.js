function eh_triangulo(lado1, lado2, lado3){

    if (((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado1 + lado3) > lado2)){
        
        if (lado1 === lado2 && lado2 === lado3){
            return "É um triângulo equilátero"
        } else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1){
            return "É um triângulo escaleno"
        } else{
            return "É um triângulo isósceles"
        }

    } else{
        return "Não é triângulo"
    }
}

export default eh_triangulo