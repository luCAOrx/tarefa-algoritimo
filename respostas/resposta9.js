let valorA = parseInt(prompt('Informe o número 1'));
let valorB = parseInt(prompt('Informe o número 2'));
let valorC = parseInt(prompt('Informe o número 3'));

let auxiliar = 0;

if (valorA > valorB) {
    auxiliar = valorA;
    valorA = valorB;
    valorB = auxiliar;
}

if (valorB > valorC) {
    auxiliar = valorB;
    valorB = valorC;
    valorC = auxiliar;
}

if (valorA > valorB) {
    auxiliar = valorA;
    valorA = valorB;
    valorB = auxiliar;
}

alert(valorC + '>' + valorB + '>' + valorA);