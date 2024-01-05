var setaDireita = window.document.getElementById("setaDireita")
var lawyer1 = window.document.getElementById("lawyer1")
var lawyer2 = window.document.getElementById("lawyer2")
var lawyer3 = window.document.getElementById("lawyer3")
var lawyer4 = window.document.getElementById("lawyer4")
var lawyer5 = window.document.getElementById("lawyer5")
var lawyer6 = window.document.getElementById("lawyer6")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function RolarParaDireita() {
    lawyer1.style = "display: none";
    lawyer2.style = "display: none";
    lawyer3.style = "display: none";
    lawyer4.style = "display: flex";
    lawyer5.style = "display: flex";
    lawyer6.style = "display: flex";
}

function RolarParaEsquerda() {
    lawyer1.style = "display: flex";
    lawyer2.style = "display: flex";
    lawyer3.style = "display: flex";
    lawyer4.style = "display: none";
    lawyer5.style = "display: none";
    lawyer6.style = "display: none";
}




    