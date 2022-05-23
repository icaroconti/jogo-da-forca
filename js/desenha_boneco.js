desenhaForca();

function limpaBoneco(){
    pincel.clearRect(150,87.8,180,180);
}

function desenhaBoneco() {
    if (chances == 1) {//cabeça
        pincel.strokeStyle = '#0A3871';
        pincel.beginPath();
        pincel.arc(177, 110, 20, 0, 2 * 3.14);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 2) {//corpo
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 130);
        pincel.lineTo(177, 220);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 3) {//braço esquerdo
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 150);
        pincel.lineTo(160, 190);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 4) {//braço direito
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 150);
        pincel.lineTo(195, 190);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 5) {//perda esquerda
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 220);
        pincel.lineTo(160, 250);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 6) {//perna direita
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 220);
        pincel.lineTo(195, 250);
        pincel.lineWidth = 4;
        pincel.stroke();
    }
}

function desenhaForca() {
    //chão
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(10, 290);
    pincel.lineTo(290, 290);
    pincel.lineWidth = 4;
    pincel.stroke();
    //haste do lado
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(80, 290);
    pincel.lineTo(80, 50);
    pincel.lineWidth = 4;
    pincel.stroke();
    //haste de cima
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(78, 50);
    pincel.lineTo(179, 50);
    pincel.lineWidth = 4;
    pincel.stroke();
    //corda
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(177, 50);
    pincel.lineTo(177, 90);
    pincel.lineWidth = 4;
    pincel.stroke();
}
