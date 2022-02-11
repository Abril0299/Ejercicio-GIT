Calcular = () => {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    
    SUMA= n1+n2;
    DIVISION= n1/n2;
    RESTA = n1-n2;


body=document.body;


 /*AGREGAR A HTML LOS RESULTADOS DE LAS OPERACIONES */
  


/*ETIQUETA CON TEXTO*/
cajita= tag = document.createElement('div');
etiqueta= document.createElement('h3'); 
texto_etiqueta = document.createTextNode("El resultado de la suma es:"); 
etiqueta.appendChild(texto_etiqueta); 
cajita.append(etiqueta);

/*RESULTADO DE LA SUMA*/
 p = document.createElement('p');
 resultado = document.createTextNode(SUMA);
 p.appendChild(resultado);  
 cajita.append(p);

 cajita.classList.add('suma') /*DEFINIR CLASE AL DIV PARA CSS*/
 body.append(cajita); 




 /*ETIQUETA CON TEXTO*/
 cajita= tag = document.createElement('div');
etiqueta= document.createElement('h3'); 
texto_etiqueta = document.createTextNode("El resultado de la división es:"); 
etiqueta.appendChild(texto_etiqueta); 
cajita.append(etiqueta);

/*RESULTADO DE LA DIVISION*/
 p = document.createElement('p');
 resultado = document.createTextNode(DIVISION);
 p.appendChild(resultado);  
 cajita.append(p);

 cajita.classList.add('division')/*DEFINIR CLASE AL DIV PARA CSS*/
body.append(cajita); 

 

 /*ETIQUETA CON TEXTO*/
 cajita= tag = document.createElement('div');
etiqueta= document.createElement('h3'); 
texto_etiqueta = document.createTextNode("El resultado de la resta es:"); 
etiqueta.appendChild(texto_etiqueta); 
cajita.append(etiqueta);

/*RESULTADO DE LA RESTA*/
 p = document.createElement('p');
 resultado = document.createTextNode(RESTA);
 p.appendChild(resultado);  
 cajita.append(p);

 cajita.classList.add('resta') /*DEFINIR CLASE AL DIV PARA CSS*/
 body.append(cajita); 

}


