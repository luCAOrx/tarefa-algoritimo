let numero1 = prompt('Digite o primeiro número');
let numero2 = prompt('Digite o segundo número');
let numero3 = prompt('Digite o terceiro número');

    if (numero1 > numero2 && numero1 > numero3) { alert('O primeiro número é o maior'); }
    else if (numero2 > numero3 && numero2 > numero1) { alert('O segundo número é o maior'); }
    else if (numero3 > numero1 && numero3 > numero2) { alert('O terceiro número é o maior'); }
    else { alert('Você não digitou um número'); }

/*
let numero1 = parseFloat(prompt('Informe o numero 1'));
let maior = numero1;

let numero2 = parseFloat(prompt('Informe o numero 2'));
maior = numero2 > maior ? numero2 : maior;

let numero3 = parseFloat(prompt('Informe o numero 3'));
maior = numero3 > maior ? numero3 : maior;

alert(maior)
*/