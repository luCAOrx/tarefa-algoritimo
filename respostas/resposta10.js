let turno = prompt('Em que turno você estuda? Matutino,Vespertino ou Noturno?');

turno = turno.toLowerCase(turno).trim(turno);

    if (turno == 'matutino') { alert('Bom dia!'); }
    else if (turno == 'vespertino') { alert('Boa tarde!'); }
    else if (turno == 'noturno') { alert('Boa noite!'); }
    else { alert('Valor Inválido!'); }