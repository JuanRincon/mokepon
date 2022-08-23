const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque') 
const sectionReiniciar = document.getElementById('boton-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota') 
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua') 
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const inputHipodogue = document.getElementById('hipodoge') 
const inputCapipepo = document.getElementById('capipepo') 
const inputRatigueya = document.getElementById('ratigueya') 
const inputJugador = document.getElementById('mascota-jugador') 
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota') 
const spanMascotaEnemigo = document.getElementById("mascota-enemigo") 
const spanVidasJugador = document.getElementById('vidas-jugador') 
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')

let mokepones = [] //creamos este arreglo, y recibimos las variables por el método push
let ataqueJugador  
let ataqueEnemigo
let vidasJugador = 3 
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) { //aquí asignamos las propiedades.
        this.nombre = nombre  //aquí estamos asignando a la clase los valores de sus propiedades.
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge_attack.png', 5)//creamos los objetos de la clase
let capipepo = new Mokepon('Capipepo', './assets/capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya_attack.png', 5)

hipodoge.ataques.push(   //empujamos los siguientes elementos al arreglo ataques en el objeto hipodoge
    { nombre: '💦', id: 'boton-agua' }, //ataques es una propiedad del objeto hipodoge
    { nombre: '💦', id: 'boton-agua' }, //Esto que va entre las llaves son unos nuevos objetos, que
    { nombre: '💦', id: 'boton-agua' }, //se llaman objetos literales, y son objetos que se crean
    { nombre: '🔥', id: 'boton-fuego' }, //desde cero, a diferencia de los instanciados que ya vienen
    { nombre: '🌱', id: 'boton-tierra' }, //desde la clase.
)
    
capipepo.ataques.push( 
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push( 
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge, capipepo, ratigueya) //Envia las variables que agregemos a la variable mokepones

function iniciarJuego(){ 
    sectionSeleccionarAtaque.style.display = 'none' 
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) 
    botonFuego.addEventListener('click', ataqueFuego)  
    botonAgua.addEventListener('click', ataqueAgua) 
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){ 

    sectionSeleccionarAtaque.style.display = 'flex' 
    
    if (inputHipodogue.checked){ 
        inputJugador.innerHTML="Hipodoge"
    }else if (inputCapipepo.checked){
        inputJugador.innerHTML="Capipepo"
    }else if (inputRatigueya.checked){
        inputJugador.innerHTML="Ratigueya"
    }else{
        alert("Selecciona un Jugador") 
    }

    seleccionarMascotaEnemigo() 
}


function seleccionarMascotaEnemigo(){ 
    let mascotaAleatoria = aleatorio(1,3) 
    sectionSeleccionarMascota.style.display = 'none' 

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML="Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML="Ratigueya"
    }
}

function ataqueFuego(){ 
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

function ataqueAleatorioEnemigo(){ 
    let ataqueAleatorio = aleatorio(1,3) 
    
    if (ataqueAleatorio == 1){ 
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA' 
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){ 
  if (ataqueEnemigo == ataqueJugador) {
   crearMensaje("EMPATE") 
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') { 
     crearMensaje("GANASTE")                                          
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
     vidasJugador-- 
     spanVidasJugador.innerHTML = vidasJugador 
  }
  revisarVidas()
}

function revisarVidas(){ 
  if (vidasEnemigo == 0){
    crearMensajeFinal("FELICITACIONES HAS GANADO EL JUEGO :) ") 
    sectionReiniciar.style.display = 'block'
  }else if (vidasJugador == 0){
    crearMensajeFinal("HAS PERDIDO EL JUEGO :( ") 
    sectionReiniciar.style.display = 'block'
  }
}

function crearMensaje(resultado){ 
    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p') 

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
} 

function crearMensajeFinal(resultadoFinal){ 
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true                              
    botonAgua.disabled = true                               
    botonTierra.disabled = true
}

function reiniciarJuego(){ 
    location.reload()
}

function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) 
