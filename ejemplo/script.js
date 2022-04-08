//--------boton ver interes-----------
boton = document.getElementById('boton-inter');
boton.addEventListener('keypress',function capturarEnter(event) {
    if (event.which == 13 || event.keyCode == 13) { 
       interes();  
    }
});
function interes(){
    document.getElementById('inter-tab').innerHTML = '<table class="table"><thead class="thead-inverse"><tr><th>Banco</th><th>interes</th></tr></thead><tbody><tr><td>Santander</td><td>120%</td></tr><tr><td>Macro</td><td>130%</td></tr><tr><td>Provincia</td><td>170%</td></tr><tr><td>Nacion</td><td>150%</td></tr><tr><td>Galicia</td><td>220%</td></tr></tbody></table>'
}

//----------Validacion de input----------------
let cred = document.getElementById("credito")
let ban = document.getElementById("banco")
let cuo = document.getElementById("cuotas")

 cred.addEventListener("blur", validarCampo);
 ban.addEventListener("blur", validarCampo);
 cuo.addEventListener("blur", validarCampo);
 
 function validarCampo(event){
 
     let valor = event.target.value;
 
     if (valor == ""){
         event.target.className = "form-control is-invalid"
     } else {
         event.target.className = "form-control"
     }
 
}

//------------obtencion de datos-------------
function capturar(){
    //console.log("capturado")
    function Banco (credito, banco,cuota,cuotas){
        this.credito = credito;
        this.banco = banco;
        this.cuota = cuota;
        this.cuotas = cuotas;
    }
     creditoCapturar = document.getElementById("credito").value;
    //console.log(creditoCapturar);
     bancoCapturar = document.getElementById("banco").value;
    //console.log(bancoCapturar);
     cuotaCapturar = document.getElementById("cuotas").value;
    //console.log(cuotaCapturar);
    cuotas = calcularPrestamo(bancoCapturar, creditoCapturar) / cuotaCapturar;
    
    nuevoCredito = new Banco(creditoCapturar, bancoCapturar,cuotaCapturar, cuotas);
    //console.log(nuevoCredito);

     
    agregar();
}

//------------- recoje los datos y los publica en la tabla---------
let baseDatos = [];

function agregar(){
    baseDatos.push(nuevoCredito);
    console.log(baseDatos);
    
    document.getElementById("tabla").innerHTML += '<tbody id="cuerpo"><td>'+nuevoCredito.credito+'</td><td>'+nuevoCredito.banco+'</td><td>'+nuevoCredito.cuota+'</td><td>'+cuotas+'</td></tbody>';
};

//------------ Calcula interes segun banco--------------

function  calcularPrestamo (banco, credito) {
    let interes; 

    switch (banco) {
        case "santander":
            interes = 1.20;
            break;
        case "macro":
            interes = 1.30;
            break;
        case "provincia":
            interes = 1.70;
            break;
        case "nacion":
            interes = 1.50;
            break;
        case "galicia":
            interes = 2.20;
            break;
        default:
            console.log("banco no esta");
    }

    return credito * interes;
}

//----------Borra la primer consulta dejando la ultima o borra todo--------
let botonRemover = document.getElementById("boton-remover");

botonRemover.addEventListener('click', remover);

function remover(){

   borrar = document.getElementById('cuerpo');
   borrar.remove();
}

//-------- muestra la ultima consulta o ultimos datos------

document.getElementById('boton-mostrar').onclick = mostrarUl;

function mostrarUl (){

    document.getElementById("tabla").innerHTML += '<tbody id="cuerpo"><td>'+nuevoCredito.credito+'</td><td>'+nuevoCredito.banco+'</td><td>'+nuevoCredito.cuota+'</td><td>'+cuotas+'</td></tbody>';
   
}