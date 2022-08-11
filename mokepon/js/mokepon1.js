
let ataqueJugador  //variable global, se pone fuera de las funciones para ser leida por todo el programa
let ataqueEnemigo
let vidasJugador = 3 
let vidasEnemigo = 3

function iniciarJuego(){ //todo el código que se encuentra en la siguiente función es el que va a ejecutar cuando cargue el html, esta función es invocada con el método window.addEventListener('click', iniciarJuego), en las últimas líneas de este script.

    let botonMascotaJugador = document.getElementById('boton-mascota') //Se crea esta variable y le asignamos el valor por id del documento (boton-mascota)

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //Se llama el metodo de escucha para la variable para el evento click y llama la función seleccionarMascotaJugador que da unas instrucciones más adelante
    let botonFuego = document.getElementById('boton-fuego')//Variables y asignación de métodos de escucha 
    botonFuego.addEventListener('click', ataqueFuego)  //para los botones del tipo de ataque del 
    let botonAgua = document.getElementById('boton-agua') //evento click para invocar sus respectivas 
    botonAgua.addEventListener('click', ataqueAgua) //funciones.
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){ //Invocada por evento click botonMascotaJugador.
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
       crearMensaje("EMPATE") //se llama la función crear mensaje que cambia la variable resultado por
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
}

function crearMensaje(resultado){ //Invoc desde f. ataqueAleatorioEnemigo para cambiar mensaje texto del html con el método createElement
    let sectionMensajes = document.getElementById('mensajes') //Esta variable identifica la parte del html

    let parrafo = document.createElement('p') 
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado //Se agrega al texto entre comillas las variables globales con signo +. La variable resultado es creada al principio de la función (resultado) para ser invocada en el texto y traer los resultados del condicional de la función combate.

    sectionMensajes.appendChild(parrafo)
} 

function aleatorio(min, max) { //Invocada desde la función seleccionarMascotaEnemigo.
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) //A la ventana completa se le activa el metodo de escucha, cuando cargue la función iniciar juego
