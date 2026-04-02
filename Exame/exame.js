class Exam {
    constructor(weight, correctAnswers) {
        this.weight = weight;
        this.correctAnswers = correctAnswers;
        this.studentsAnswers = [];
    }

    add(respostasAluno) {
        let notasTotal = 0;

        for (let i = 0; i < this.correctAnswers.length; i++) {

            if (respostasAluno[i] == this.correctAnswers[i]) {
                notasTotal += this.weight[i];
            }
        }
        this.studentsAnswers.push(notasTotal);
    }

    avg() {
        if (this.studentsAnswers.length === 0) {
            return 0;
        }

        let somaTotal = 0;
        for (let i = 0; i < this.studentsAnswers.length; i++) {
            somaTotal += this.studentsAnswers[i];
        }

        let media = somaTotal / this.studentsAnswers.length;
        return media;
    }

    min(quantidade) {
        let copiaOrdenadaCrescente = [...this.studentsAnswers].sort((a, b) => a - b);
        let menoresNotas = []

        let limite = Math.min(quantidade, copiaOrdenadaCrescente.length);
        for (let i = 0; i < limite; i++) {
            menoresNotas.push(copiaOrdenadaCrescente[i])
        }
        return menoresNotas
    }

    max(quantidade) {
        let copiaOrdenadaDecrescente = [...this.studentsAnswers].sort((a, b) => b - a);
        let maioresNotas = []

        let limite = Math.min(quantidade, copiaOrdenadaDecrescente.length);
        for (let i = 0; i < limite; i++) {
            maioresNotas.push(copiaOrdenadaDecrescente[i])
        }
        return maioresNotas
    }

    lt(notaDeCorte) {
        let listaNotaDeCorte = []
        for (let i = 0; i < this.studentsAnswers.length; i++) {
            if (this.studentsAnswers[i] < notaDeCorte) {
                listaNotaDeCorte.push(this.studentsAnswers[i])
            }
        }
        return listaNotaDeCorte
    }

    gt(notaDeCorte) {
        let listaNotaDeCorte = []
        for (let i = 0; i < this.studentsAnswers.length; i++) {
            if (this.studentsAnswers[i] > notaDeCorte) {
                listaNotaDeCorte.push(this.studentsAnswers[i])
            }
        }
        return listaNotaDeCorte
    }
}

const pw2 = new Exam([2, 4, 4], ['a', 'd', 'b']);


pw2.add(['a', 'd', 'b']);
pw2.add(['b', 'b', 'b'])
pw2.add(['a', 'a', 'a']);
pw2.add(['c', 'd', 'b']);
pw2.add(['a', 'c', 'b']);
pw2.add(['c', 'c', 'c']);

console.log("Todas as notas da turma:", pw2.studentsAnswers); 

console.log("-----------------------------------");

// Média das notas
console.log("Média da turma:", pw2.avg()); 

// Vetor com três menores notas
console.log("As 3 menores notas:", pw2.min(3)); 

// Vetor com cinco maiores notas
console.log("As 5 maiores notas:", pw2.max(5)); 

// Vetor com todas as notas menores do que 5
console.log("Notas menores que 5.0:", pw2.lt(5)); 

// Vetor com todas as notas maiores do que 7
console.log("Notas maiores que 7.0:", pw2.gt(7)); 
