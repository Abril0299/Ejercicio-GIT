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

