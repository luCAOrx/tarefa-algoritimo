let nota = prompt('Informe sua nota');

nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) { alert('Nota inválida, repita o procedimento'); }
else if (nota < 3) { alert('Reprovado'); }
else if (nota < 7) { alert('Recuperação'); }
else { alert('Aprovado'); }

/*
let nota1 = parseFloat(promt('Digite a nota 1'));
let nota2 = parseFloat(promt('Digite a nota 2'));

let media = (nota1 + nota2) / 2;

let resposta = 'Reprovado';
if (isNaN(media) || media < 0 || media > 10) {
    resposta = 'Entrada inválida!';
} else if (media == 10) {
    resposta = 'Aprovado com Distinção';
} else if (media >= 7) {
    resposta = 'Aprovado';
}

alert(resposta);
*/