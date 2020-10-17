let caracter = prompt('Informe o sexo F ou M');

caracter = caracter.toLowerCase(caracter).trim(caracter); /*toLowerCase transforma em minusculo ,trim remove espaços desnecessarios*/

    if (caracter == 'F' || caracter == 'f') { alert('F - Feminina'); }
    else if (caracter == 'M' || caracter == 'm') { alert('M - Masculino'); }
    else { alert('Sexo inválido'); }
