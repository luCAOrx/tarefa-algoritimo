/*
let turno = prompt('Informe o turno em que estuda');
    switch (turno) {
        case 'M': case 'Matutino':
            alert('Bom dia!!!');
            break;
        case 'V': case 'Vespertino':
            alert('Boa tarde!!!');
            break;
        case 'N': case 'Noturno':
            alert('Boa noite!!!');
            break;
    }
*/

let turno = prompt('Informe o turno');

turno = turno.trim().charAt(0).toLowerCase();

switch(turno) {
    case 'm':
        alert('Bom dia!');
    break;
    case 'v':
        alert('Boa tarde!');
    break;
    case 'n':
        alert('Boa noite!');
    break;
    default:
        alert('Opção inválida!')
}