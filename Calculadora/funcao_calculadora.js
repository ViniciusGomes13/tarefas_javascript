function calculadora(num1, num2, operador){

    switch (operador){

        case "+":
         return num1 + num2

        case "-":
         return num1 - num2

        case "/":
         return num1 / num2

        case "*":
         return num1 * num2

        default:
         return "Operador inválido!"
    }
}

export default calculadora