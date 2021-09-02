

function cesarEntrada(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('')
}

function cesarSaida(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')
}    



    function nar(){
    let cod1 = document.getElementById("codificar").value.split("");
    let cod2 = document.getElementById("codificar2");
    let numbs = parseInt(document.getElementById("numbs").value)
    let escolha = document.getElementById("radio1").checked

    if(escolha){
        cod2.value = cesarEntrada(cod1,numbs)
    }else{
        cod2.value = cesarSaida(cod1,numbs)
    }} 
