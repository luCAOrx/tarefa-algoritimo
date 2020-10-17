let letra = prompt('Digite F ou M');

letra = letra.toUpperCase().trim();

    switch (letra) {
        case 'F':
            alert('F - Feminino');
            break;
        case 'M':
            alert('M - Masculino');
            break;
        default:
            alert('Sexo Inválido!!!');
    }