
/*-----Declaracion de objetos---------*/


class Jugadores {

    constructor(players, color) {

        this.pasos = players;
        this.color = color;
        

    }

}

const jugadores = [];
jugadores1 = (new Jugadores(58, ingresarColor())); 
jugadores2 = (new Jugadores(58, ingresarColor()));


/*-----Funcion creada para ingresar el color de los jugadores-----*/


function ingresarColor() {
    let color;
    let valido;
    while (!valido) {
        let color = prompt(`Ingresa color: Rojo, Verde, Amarillo o Azul`).toLowerCase();
        if (color == "rojo" || color == "verde" || color == "azul" || color == "amarillo") {
            valido = true;
            console.log (`Seleccionaste ${color}`)
    
    return color

        } else {
            valido = false;
            console.log(`ingresa el color de nuevo`)
        }
    }
    return color;
}

/*-----Seccion que detalla la logica del juego------*/

let ronda = 0;

const Juego = setInterval(function () {
    ronda += 1
    console.log(`ronda ${ronda}`);

    let tiradaJugador1 = (Math.ceil(Math.random() * 6));
    console.log(`sacaste ${tiradaJugador1} en el dado`);
    let tiradaJugador2 = (Math.ceil(Math.random() * 6));
    console.log(`sacaste ${tiradaJugador2} en el dado`);

    if (tiradaJugador1 !== tiradaJugador2) {
        jugadores1.pasos -= tiradaJugador1
        jugadores2.pasos -= tiradaJugador2
        console.log(`JUGADOR UNO te quedan ${jugadores1.pasos} pasos para llegar`)
        console.log(`JUGADOR DOS te quedan ${jugadores2.pasos} pasos para llegar`)


    } else {
        tiradaJugador1 == tiradaJugador2
        console.log(`Vuelven a tirar los dados`)
    }


    if (jugadores1.pasos <= 0 || jugadores2.pasos <= 0) {
        clearInterval(Juego);
        seguirJuego();
    }
}, 0)


/*-----Funcion creada para declarar el color de los jugadores que ganan-----*/

function seguirJuego() {

console.log(`Jugador uno, pasos hacia la meta ${jugadores1.pasos}`)
console.log(`Jugador dos, Pasos hacia la meta ${jugadores2.pasos}`)

    if (jugadores1.pasos <= 0) {
        let ganar = document.querySelector(".ganador")      // AQUI INTENTO LA INTERACCION CON EL DOM; PARA RESALTAR QUIEN GANÓ
        ganar.innerHTML =
        `<p> El jugador de color ${jugadores1.color}<p>`;
        
    } else {
         let ganar = document.querySelector(".ganador")      // AQUI lO MISMO
        ganar.innerHTML =
        `<p> El jugador de color ${jugadores2.color}<p>`;
    }
}


/*-----------------Interaccion con el DOM------------------*/

document.querySelectorAll("p")[0].style.fontWeight="bold";    //ACA UN POCO DE ESTILO A LOS PARRAFOS
document.querySelectorAll("p")[0].style.color= "Blue"
document.querySelectorAll("p")[1].style.fontWeight="bold";
document.querySelectorAll("p")[1].style.color= "Blue"



const pasos = [ "Escoge tu color", "Lanza los dados","Avanza","Llega a la meta", "Gana", "Diviertete"];  // ACA AGREGO LISTAS A UNA SECCION DEL HTML

let lista = document.querySelector(".jugar")
  for ( let listas of pasos) {

    lista.innerHTML +=
    `<li> ${listas}</li>`;
}

