function inflacion(){
    alert("Debido a la inflacion y a los constantes cambios de precios nos vemos obligados a cerrar esta Seccion, pero descuide, puede llamarnos para saber el precio de las empanadas al momento!");
};

function contactar(){
    let respuesta= prompt("Estas seguro de querer contactarme?");
        if(respuesta == "si"){
            const formulario = document.getElementById('formulario');
            formulario.scrollIntoView({ behavior: 'smooth' });
        } else if(respuesta == "no") {
            alert("Te crees muy listo niño? T.T");
        } else {
            alert("Responda con si o no");
        }
};


    const logo = document.getElementById("pulsar");
    const contadorEmpanada = document.getElementById("contador");
    let contador = 0;
  
    logo.addEventListener("click", function() {
      contador++;
      contadorEmpanada.textContent = contador;

      if(contador == 10){
        alert("No crees que ya son demasiadas empanadas?")
      }
      else if(contador >= 18){
        alert("Vas a explotar, ya basta freezer!!")
      }
});


  
  
  
  