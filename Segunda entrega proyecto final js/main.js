


/*---------------------Reglas simples-----------------------------*/


// ESTE SERIA EL DESAFIO COMPLEMENTARIO, AGREGRO UNA LISTA AL HTML MEDIANTE UN ARRAY, EN ESTE CASO SERIA UNAS REGLAS DE COMO JUGAR


const pasos = [ "Escoge tu color", "Lanza los dados","Avanza","Llega a la meta", "Gana", "Diviertete"]; 

let lista = document.querySelector(".jugar")
  for ( let listas of pasos) {

    lista.innerHTML +=
    `<li> ${listas}</li>`;

    
}

/*---------------------Ingreso de los colores-----------------------------*/

let boton = document.getElementById('boton');
let seleccion = document.getElementById('lista');
let checks = document.querySelectorAll(".valores");

boton.addEventListener('click', function(){
  seleccion.innerHTML= '';
  checks.forEach((e) =>{
    if (e.checked == true){
      let elemento = document.createElement('li');
      elemento.className = 'list-group-item';
      elemento.innerHTML= e.value;
      seleccion.appendChild(elemento);
      
    
    }
  });

});

/*---------------Movimiento del dado---------------*/

let dados = document.querySelector("#botonDados");
let numero = document.querySelector(".dados");

dados.addEventListener('click', numeroRamdom)

function numeroRamdom () { 
    
  let numeroDados = (Math.ceil(Math.random() * 6));
  let numeroIngresado = document.createElement ("li");
  numeroIngresado.innerHTML = numeroDados;
  numero.appendChild(numeroIngresado);
  
}
 

/*---------------------Movimiento de fichas por el tablero-----------------------*/
 
movimiento = function(div){

    difX=0;
    difY=0;
    div.addEventListener('mousedown',inicio);

  function inicio(e){
    let eX=e.pageX;
    let eY=e.pageY;
    let oX=parseInt(div.style.left);
    let oY=parseInt(div.style.top);
    difX=oX-eX;
    difY=oY-eY;
    document.addEventListener('mousemove',mover);
    document.addEventListener('mouseup',soltar);
  
  }
 
  function mover(e) {
    let tY=e.pageY+difY+'px';
    let tX=e.pageX+difX+'px';
    div.style.top=tY;
    div.style.left=tX;
   
  }
 
  function soltar(e){
    document.removeEventListener('mousemove',mover);
    document.removeEventListener('mouseup',soltar);    
  }
}
 
let mover1= new movimiento (document.getElementById("arrastrar"));
let mover12= new movimiento (document.getElementById("arrastrarDos"));
let mover13= new movimiento (document.getElementById("arrastrarTres"));
let mover14= new movimiento (document.getElementById("arrastrarCuatro"));
let mover2= new movimiento (document.getElementById("arrastrar2"));
let mover25= new movimiento (document.getElementById("arrastrarCinco"));
let mover26= new movimiento (document.getElementById("arrastrarSeis"));
let mover27= new movimiento (document.getElementById("arrastrarSiete"));
let mover3= new movimiento (document.getElementById("arrastrar3"));
let mover38= new movimiento (document.getElementById("arrastrarOcho"));
let mover39= new movimiento (document.getElementById("arrastrarNueve"));
let mover310= new movimiento (document.getElementById("arrastrarDiez"));
let mover4= new movimiento (document.getElementById("arrastrar4"));
let mover411= new movimiento (document.getElementById("arrastrarOnce"));
let mover412= new movimiento (document.getElementById("arrastrarDoce"));
let mover413= new movimiento (document.getElementById("arrastrarTrece"));




/*----Uso de Storage y JSON para guardar los datos y obtenerlos-------*/


const premioGanador = { primero: "50000", segundo:"10000" }
localStorage.setItem ('premio', JSON.stringify(premioGanador));

const premioGuardado = localStorage.getItem('premio');
console.log ('premioObtenido: ', JSON.parse(premioGuardado));