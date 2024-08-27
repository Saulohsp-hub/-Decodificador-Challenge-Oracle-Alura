var texto = document.getElementById("texto__digitado");
var textoSaida = document.getElementById('saida').innerHTML;

function encript() {  

    var resultado = texto.value

    if(texto.value.trim() !== ''){


    resultado = resultado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, "ai").replace(/o/g, 'ober').replace(/u/g, 'ufat');  
    
    
    document.getElementById('saida').innerHTML = 
'<textarea readonly id="texto2">' + resultado + '</textarea>' + '<div class="botoes2">' +
'<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '</div>';
    event.preventDefault();
    }
    else{
        alert("Insira um texto a ser codificado");
        event.preventDefault();
    }    
}

function decrip() { 
    var resultado = texto.value; 

    if(texto.value.trim() !== ''){

    resultado = resultado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, "a").replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('saida').innerHTML = 
'<textarea readonly id="texto2">' + resultado + '</textarea>' + '<div class="botoes2">' +
'<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '</div>';

    event.preventDefault();
    }
    else{
        alert("Insira um texto a ser decodificado");
        event.preventDefault();
    }
}

function limpar() {
    document.getElementById('saida').innerHTML = textoSaida;
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById('texto2').value);

    alert("copiado");
}
