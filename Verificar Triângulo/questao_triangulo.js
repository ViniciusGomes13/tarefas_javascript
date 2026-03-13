import eh_triangulo from "./funcao_triangulo.js"

let resultado_equilatero = eh_triangulo(12, 12, 12)
console.log(resultado_equilatero)

let resultado_escaleno = eh_triangulo(10, 8, 6)
console.log(resultado_escaleno)

let resultado_isosceles = eh_triangulo(9, 8, 9)
console.log(resultado_isosceles)

let nao_eh_triangulo = eh_triangulo(40, 12, 15)
console.log(nao_eh_triangulo)