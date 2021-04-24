function enviarForm() {
    var calculo = document.getElementById("calculoInput").value;
    var nome = document.getElementById("nomeInput").value;
    var email = document.getElementById("emailInput").value;
    var form = document.getElementById("form");

    if (nome != "" && calculo == op[operacaoVet] && email.indexOf('@') > -1) {
        alert("Enviando PDF")
        alert("sem site :(")
        form.setAttribute("action", "#")
    } else {
        alert("Você é um robo !")
    }
}

var valMax = Math.floor(Math.random() * (10 - 1) + 1);
var valMin = Math.floor(Math.random() * (10 - 1) + 1);
var operacaoVet = Math.floor(Math.random() * (3 - 0) + 0);
var op = [valMax + valMin, valMax - valMin, valMax * valMin]

function calculo() {
    var contaLabel = document.getElementById("calculoLabel");
    switch (operacaoVet) {
        case 0:
            contaLabel.innerHTML = `( ${valMax} + ${valMin} )`;
            break;
        case 1:
            contaLabel.innerHTML = `( ${valMax} - ${valMin} )`;
            break;
        case 2:
            contaLabel.innerHTML = `( ${valMax} * ${valMin} )`;
            break;
        default:
            alert("Vetor em erro")
    }
}