const cuentas = [
    {nombre:"Mali",saldo:200,password:"Mali123"},
    {nombre:"Gera",saldo:290,password:"Gera123"},
    {nombre:"Maui",saldo:67,password:"Maui123"}
]



//Obtener parametro id
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName("id")
//FIN obtener parametro id


function cleanDisplayMensajes(){
    document.getElementById("outputMensajes").innerHTML=""
}

function cleanDisplayPantalla(){
    document.getElementById("outputPantalla").innerHTML=""
}

function displayMensajes(value){
    cleanDisplayMensajes()
    document.getElementById("outputMensajes").innerHTML =value
}

function displayPantalla(value){
    cleanDisplayPantalla()
    document.getElementById("outputPantalla").innerHTML =value
}

function consultarSaldo(){
    let saldo = cuentas[id].saldo
    ocultarFormDeposito()
    ocultarFormRetiro()
    displayMensajes("Tu saldo actual es: ")
    displayPantalla(saldo)
}



function deposito(montoEntrante){
    if((cuentas[id].saldo + montoEntrante)>990){
        displayMensajes("No se pueden tener más de $990 en la cuenta")
        displayPantalla("")
    }else{
        cuentas[id].saldo =cuentas[id].saldo + montoEntrante
        var mensaje = "El monto ingresado fue: "+montoEntrante+" <br> El nuevo saldo es:"
        var saldoFinal = cuentas[id].saldo
        
        displayMensajes(mensaje)
        displayPantalla(saldoFinal)
    }
}

function retiro(montoRetiro){
    if((cuentas[id].saldo - montoRetiro)<10){
        var mensaje ="No puede haber menos de $10 en la cuenta, retire menos dinero."
        displayMensajes(mensaje)
        displayPantalla("")
    }else{
        cuentas[id].saldo =cuentas[id].saldo - montoRetiro
        var mensaje="Usted ha retirado: "+montoRetiro+"<br> El nuevo saldo es:"
        var saldoFinal = cuentas[id].saldo
        
        displayMensajes(mensaje)
        displayPantalla(saldoFinal)
    }
}

function mostrarDeposito(){
    let formulario = document.getElementById("formDeposito")
    formulario.style.display = "block";

    displayMensajes("Ingresa el monto que deseas depositar")
    cleanDisplayPantalla()

    //ocultar formulario de retirar monto
    ocultarFormRetiro()
}

function mostrarRetiro(){
    let formulario = document.getElementById("formRetiro")
    formulario.style.display = "block";

    displayMensajes("Ingresa el monto que deseas retirar")
    cleanDisplayPantalla()

    //ocultar formulario de depositar monto
    ocultarFormDeposito()
}

function ocultarFormDeposito(){
    var x = document.getElementById("formDeposito");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("formDeposito").reset()
    }
}

function ocultarFormRetiro(){
    var x = document.getElementById("formRetiro");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("formRetiro").reset()
    }
}

function aceptarDeposito(){

    var money = parseFloat(document.getElementById("cantidadDepositada").value)
    deposito(money)

    var x = document.getElementById("formDeposito");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("cantidadDepositada").reset

}

function aceptarRetiro(){
    var money = parseFloat(document.getElementById("cantidadRetirada").value)
    retiro(money)
    var x = document.getElementById("formRetiro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    
}