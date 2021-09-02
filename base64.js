function bas(){
    let cod1 = document.getElementById("codificar").value;
    let cod2 = document.getElementById("codificar2");
    let escolha = document.getElementById("radio1").checked
    cod2.value = base64Logic(cod1, escolha) 
}

function base64Logic(cod1,escolha){
    return (escolha)? btoa(cod1) : atob(cod1) 
}
        
