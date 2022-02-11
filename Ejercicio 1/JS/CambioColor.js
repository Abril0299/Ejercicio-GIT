boton = document.getElementById('boton');
body = document.getElementById('body');

boton.addEventListener("click", CambiarColor);

function CambiarColor(){
    if(body.style.backgroundColor == 'bisque'){
        body.style.backgroundColor = 'plum';
    }else{
        body.style.backgroundColor = 'bisque';
    }
}

boton1 = document.getElementById('boton1');
boton2 = document.getElementById('boton2');
boton3 = document.getElementById('boton3');

if(boton1.disabled == false){
    boton2.disabled = true;
    boton2.textContent = 'Apagado';
    boton3.disabled = true;
    boton3.textContent = 'Apagado';
    
    
}

boton1.addEventListener("click", boton1apagado);


function boton1apagado(){
    boton1.textContent = 'Apagado';
    boton1.style.background="white";
    boton2.style.background="violet";
    boton1.disabled = true;
    boton2.disabled = false;
    boton2.textContent = 'Click me';
}

boton2.addEventListener("click", boton2apagado);

function boton2apagado(){
    boton2.textContent = 'Apagado';
    boton2.style.background="white";
    boton3.style.background="violet";
    boton2.disabled = true;
    boton3.textContent = 'Click me';
    boton3.disabled = false;
}

boton3.addEventListener("click", boton3apagado);

function boton3apagado(){
    boton3.textContent = 'Apagado';
    boton3.style.background="white";
    boton1.style.background="violet";
    boton3.disabled = true;
    boton1.textContent = 'Click me';
    boton1.disabled = false;
}

