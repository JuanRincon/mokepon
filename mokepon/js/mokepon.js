
let ataqueJugador  //variable global, se pone fuera de las funciones para ser leida por todo el programa
let ataqueEnemigo
let vidasJugador = 3 
let vidasEnemigo = 3

function iniciarJuego(){ //Invocada por el evento cargar ventana al cargar html al final del código.

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque') //Asigna leer por id en html 
    sectionSeleccionarAtaque.style.display = 'none' //con este método dejamos de mostrar algo en pantalla.

    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') //Se crea esta variable y le asignamos el valor por id del documento (boton-mascota)
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //Se llama el metodo de escucha para la variable para el evento click y llama la función seleccionarMascotaJugador
    
    let botonFuego = document.getElementById('boton-fuego')//Variables y asignación de métodos de escucha 
    botonFuego.addEventListener('click', ataqueFuego)  //para los botones del tipo de ataque del 
    let botonAgua = document.getElementById('boton-agua') //evento click para invocar sus respectivas 
    botonAgua.addEventListener('click', ataqueAgua) //funciones.
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){ //Invocada por evento click botonMascotaJugador.

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque') //Asigna por id,
    sectionSeleccionarAtaque.style.display = 'flex' //metodo que bloquea algo que estaba ocultando en pantalla
    
    let inputHipodogue = document.getElementById('hipodoge') //Asigna a la variable el id del elemento
    let inputCapipepo = document.getElementById('capipepo') //del documento 'hipodoge','capipepo',
    let inputRatigueya = document.getElementById('ratigueya') //'ratigueya', que seleccionará el usuario
    let inputJugador = document.getElementById('mascota-jugador') //en el radio del html.
    if (inputHipodogue.checked){ //Valida la seleccion de cada opción mascota para jugador.
        inputJugador.innerHTML="Hipodoge"
    }else if (inputCapipepo.checked){
        inputJugador.innerHTML="Capipepo"
    }else if (inputRatigueya.checked){
        inputJugador.innerHTML="Ratigueya"
    }else{
        alert("Selecciona un Jugador") //En caso de no seleccionar ninguno sale el alert.
    }

    seleccionarMascotaEnemigo() //Se invoca esta función.
}


function seleccionarMascotaEnemigo(){ //Invocada desde función seleccionarMascotaJugador.
    let mascotaAleatoria = aleatorio(1,3) //Invoca función aleatorio y asigna rango de valores.
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota') //Asigna leer por id 
    sectionSeleccionarMascota.style.display = 'none' //con este método dejamos de mostrar algo en pantalla.

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo") //Variable para asignar y poner en pantalla el nombre del enemigo elegido de manera aleatoria.

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML="Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML="Ratigueya"
    }
}

function ataqueFuego(){ //Invocadas desde el evento click, en los botones para seleccionar ataque.
    ataqueJugador = 'FUEGO' 
    ataqueAleatorioEnemigo()
} 

function ataqueAgua(){ 
    ataqueJugador = 'AGUA' 
    ataqueAleatorioEnemigo()
} 

function ataqueTierra(){ 
    ataqueJugador = 'TIERRA' 
    ataqueAleatorioEnemigo()
} 

function ataqueAleatorioEnemigo(){ //Invoc desde las funciones de ataqueTierra, ataqueAgua, ataqueFuego.
    let ataqueAleatorio = aleatorio(1,3) //Reutilizamos función aleatorio con valores 1 y 3.
    
    if (ataqueAleatorio == 1){ //Por medio de condicionales se asigna un valor a cada ataque.
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA' 
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){ //Invoc desde f.ataqueAleatorioEnemigo. Creada para mostrar el resultado del juego. 
  let spanVidasJugador = document.getElementById('vidas-jugador') //Se asigna el id del span en el documento html
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')

  if (ataqueEnemigo == ataqueJugador) {
   crearMensaje("EMPATE") //se llama la función crearMensaje que cambia la variable resultado por
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') { //el valor ingresado en cada
     crearMensaje("GANASTE")                                          //condicional
     vidasEnemigo--
     spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
     crearMensaje("GANASTE")
     vidasEnemigo--
     spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
     crearMensaje("GANASTE")
     vidasEnemigo--
     spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
     crearMensaje("PERDISTE")
     vidasJugador-- //Disminuye en uno el valor de la variable vidasJugador
     spanVidasJugador.innerHTML = vidasJugador //Imprime en el html en el lugar de 'vidas-jugador' el valor que tome la variable vidasJugador
  }
  revisarVidas()
}

function revisarVidas(){ //Invocada desde f. combate, para enviar mensaje de ganar o perder juego.
  if (vidasEnemigo == 0){
    crearMensajeFinal("FELICITACIONES HAS GANADO EL JUEGO :) ") 
    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'block'
  }else if (vidasJugador == 0){
    crearMensajeFinal("HAS PERDIDO EL JUEGO :( ") 
    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'block'
  }
}

function crearMensaje(resultado){ //Invoc desde f. ataqueAleatorioEnemigo para cambiar mensaje texto del html con el método createElement
    let sectionMensajes = document.getElementById('resultado')//Esta variable identifica la parte del html
    let ataquesDelJugador = document.getElementById('ataque-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p') 

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
} 
function crearMensajeFinal(resultadoFinal){ //Invocado desde f. revisarVidas, para enviar mensaje a html.
    let sectionMensajes = document.getElementById('mensajes') 

    let parrafo = document.createElement('p') 
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo) 

    let botonFuego = document.getElementById('boton-fuego') //Se asigna el método disabled a estos botones
    botonFuego.disabled = true                              //en esta f crearMensajeFinal, para deshabil
    let botonAgua = document.getElementById('boton-agua')   //los botones de ataque cuando se gane o 
    botonAgua.disabled = true                               //se pierda el juego.
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
 
}

function reiniciarJuego(){ //Invocada desde la f. iniciarJuego, para habilitar el botor reiniciar.
    location.reload()
}

function aleatorio(min, max) { //Invocada desde la función seleccionarMascotaEnemigo.
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) //A la ventana completa se le activa el metodo de escucha, cuando cargue la función iniciar juego
