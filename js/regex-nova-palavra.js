var texto = document.querySelector(".txt-palavras");
var botaoSalvar = document.querySelector(".salvar");
botaoSalvar.disabled = true;

texto.addEventListener('input', function(){
    
    if(this.value.length > 0){
        var array = [];
        var textoescrito = texto.value;
        array.push(textoescrito);

        var erro = document.querySelector("#mensagem-erro");
        var filtro = /^[a-zA-Z]*$/;
        var resultado = filtro.test(textoescrito);

        if (!resultado) {
            erro.textContent = "Use somente letras sem acentuação!";
            botaoSalvar.disabled = true;
        }else{
            erro.textContent = "";
            botaoSalvar.disabled = false;
        }

        } else {
            botaoSalvar.disabled = true;
        }
    }




    
);