var menuprincipal = document.querySelector(".menu-principal");
var btniniciarjogo = document.querySelector(".iniciar-jogo");
var palavra = document.querySelector(".add-palavra");

var menuforca = document.querySelector(".menu-forca");
var novojogo = document.querySelector(".novo-jogo");
var desistir = document.querySelector(".desistir");

var menupalavra = document.querySelector(".menu-palavras");
var salvarpalavra = document.querySelector(".salvar");
var voltar = document.querySelector(".voltar");

var texto = document.querySelector(".txt-palavra");

function iniciarJogo(){
    final.innerHTML = "";
    linhas.innerHTML = "";
    letraErrada.innerHTML = "";
    letrasCorretas = [];
    letrasErradas = [];
    chances = 0;
    aleatorio();
    mostarLetras();
    addEventoKeydown();
    limpaBoneco();
}

function sairJogo(){
    final.innerHTML = "";
    linhas.innerHTML = "";
    letrasCorretas = [];
    letrasErradas = [];
    chances = 0;
    limpaBoneco();
    removeEventoKeydown();
}

function salvar() {
    palavras.push(texto.value);
    texto.blur();
    texto.value = ("");
}


function addEventoKeydown() {
    console.log("TECLADO FUNCINANDO")
    document.addEventListener('keydown', tecladoDigitar);
}

function removeEventoKeydown() {
    console.log("PAROU O TECLADO")
    document.removeEventListener('keydown', tecladoDigitar);
}

btniniciarjogo.addEventListener("click", function(){
    menuforca.classList.remove("invisivel");
    menuprincipal.classList.add("invisivel");
    iniciarJogo();
})

palavra.addEventListener("click", function(){
    menupalavra.classList.remove("invisivel");
    menuprincipal.classList.add("invisivel");
})

voltar.addEventListener("click", function(){
    menuprincipal.classList.remove("invisivel");
    menupalavra.classList.add("invisivel");
})

desistir.addEventListener("click", function(){
    menuprincipal.classList.remove("invisivel");
    menuforca.classList.add("invisivel");
    sairJogo();
})

salvarpalavra.addEventListener("click", function(){
    menuforca.classList.remove("invisivel");
    menupalavra.classList.add("invisivel");
    iniciarJogo();
    desenhaForca();
})
