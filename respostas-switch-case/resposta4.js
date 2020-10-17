let vogal = prompt('Digite uma vogal');

/*vogal = vogal.toLowerCase().trim();

    switch (!isNaN(vogal) || vogal) {
        case true:
            alert('Não pertence ao alfabeto');
            break;
        case 'a': case 'e': case 'i': case 'o': case 'u':
            alert('É uma vogal');
            break;
        default:
            alert('É uma consoante');
    }
*/

let codigoAsc = vogal.toLowerCase().trim().charCodeAt(0);

if (codigoAsc >= 97 && codigoAsc <= 122) {
    switch(codigoAsc) {
        case 97: case 101: case 105: case 111: case 117:
            alert('É uma vogal');
            break;
        default:
            alert('é uma consoante');
    }
} else {
    alert('Não é uma letra do alfabeto');
}