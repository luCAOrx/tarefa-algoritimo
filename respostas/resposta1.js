let numero1 = prompt('Digite o primeiro número');
let numero2 = prompt('Digite o segundo número');

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (numero1 > numero2) { alert(numero1 + ' é maior que ' + numero2); }
    else { alert('Você não digitou um número'); }