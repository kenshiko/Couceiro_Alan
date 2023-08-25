/* RECOMENDACION: Probar la funcionalidad de la web antes de ver el codigo js, para mas placer! */


/* Esta es una funcion con una alerta. Buscando en el html veremos que dentro de la barra de navegacion, en uno de los links encontramos el evento onclick y luego la funcion inflacion. Esto sirve para que cuando dentro de la web pulsemos en dicho link, nos salga una alerta con el mensaje que ya predeterminamos. */
function inflacion(){
    alert("Debido a la inflacion y a los constantes cambios de precios nos vemos obligados a cerrar esta Seccion, pero descuide, puede llamarnos para saber el precio de las empanadas al momento!");
};


/* Un poco mas complejo que lo anterior. Mismo caso, un evento que trae un prompt (un cuadro que trae un mensaje que nosotros predeterminamos y el usuario que lo ve puede ingresar informacion). Lo que le agregamos fue un condicional a este prompt. El condicional simplemente nos dara opciones por asi decirlo, en base a lo que hagamos, se ejecutara una u otra cosa. */
function contactar(){
    let respuesta= prompt("Estas seguro de querer contactarme?");
        if(respuesta == "si"){
            const formulario = document.getElementById('formulario'); /* Creamos una constante que selecciona de nuestro html la etiqueta con su ID formulario. En caso de que en el prompt se responda si, se ejecutara el evento de scrollIntoView, que este desplazara la pagina hacia la posicion declarada en esta misma constante. Entrando a la web y probando es la mejor manera de entender el efecto! */
            formulario.scrollIntoView({ behavior: 'smooth' });
        } else if(respuesta == "no") {
            alert("Te crees muy listo niño? T.T"); /* Si responde no se dara una alerta con una respuesta predefinida. */
        } else {
            alert("Responda con si o no"); /* Si se responde otra cosa que no sea si/no tendra otra respuesta predefinida. */
        }
};


    /* Un pequeño contador. Lo que hacemos es seleccionar mediante su ID al logo de nuestra web dentro de una constante. Luego, seleccionamos un mensaje que contiene el numero 0 en nuestro HTML (su ID es contador). finalmente el contador en si dentro de una variable que sera 0*/
    const logo = document.getElementById("pulsar");
    let contadorEmpanada = document.getElementById("contador");
    let contador = 0;
  
    /* Ya mencionadas las const y variables, creamos un evento de click. En este evento, podemos ver que tenemos el contador++ dentro de la funcion. Esto lo que hace es que cada vez que activemos el evento de click, el contador predeterminado en 0 crezca en +1 por cada click. */
    logo.addEventListener("click", function() {
      contador++;
      contadorEmpanada.textContent = contador; /* Finalmente, aqui llamamos a la variable de contadorEmpanada y le asignamos la apropiedad textContent que nos permite modificar el texto del HTML. Al asignar contadorEmpanada = contador, lo que logramos es que cada vez que hagamos click en el logo de nuestra web, se active el evento de click por ende se activara contador++, aumentando en 1 el elemento del HTML que contiene la ID contador.
      Recomendado ir a la web y probarlo, se entendera mejor!! */


      /* Otro condicional. Cuando se cumpla dichas condiciones, en la web veremos alertas */
      if(contador == 10){
        alert("No crees que ya son demasiadas empanadas?")
      }
      else if(contador >= 18){
        alert("Vas a explotar, ya basta freezer!!")
      }
});


  
  