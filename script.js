const cuentas = [
    {nombre:"Mali",saldo:200,password:"Mali123"},
    {nombre:"Gera",saldo:290,password:"Gera123"},
    {nombre:"Maui",saldo:67,password:"Maui123"}
]

let noUser = -1

function validar(){
    var user = document.getElementById("uname").value
    var pass = document.getElementById("upass").value
    window.location.href="acceso.html"
    for(var i = 0; i<cuentas.length; i++){
        if(cuentas[i].nombre==user && cuentas[i].password==pass){
            noUser=i
            window.location.href="acceso.html"
            
            
        }
    }
    if(noUser==-1){
        alert("Usuario y/o contraseña incorrectos, intenta de nuevo.")
    }
}

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
    //var mensaje= "Su saldo es: <br> "+cuentas[accesoCuenta].saldo
    //alert("tu saldo es "+getUsuarioActual())
    displayMensajes("Tu saldo actual es: "+noUser)
    displayPantalla("500")
}

/* function deposito(){
    habilitarIngresoMonto()
    var montoEntrante = document.getElementById("outputPantalla").innerHTML
    if((cuentas[accesoCuenta].saldo + monto)>990){
        displayMensajes("No se pueden tener más de $990 en la cuenta")
        displayPantalla("")
    }else{
        cuentas[accesoCuenta].saldo =cuentas[accesoCuenta].saldo + montoEntrante
        var mensaje = "El monto ingresado fue: "+montoEntrante+" <br> El nuevo saldo es:"
        var saldoFinal = cuentas[accesoCuenta].saldo
        
        displayMensajes(mensaje)
        displayPantalla(saldoFinal)
    }
}

function retiro(){
    habilitarIngresoMonto()
    var montoRetiro = document.getElementById("outputPantalla").innerHTML
    if((cuentas[accesoCuenta].saldo - montoRetiro)<10){
        var mensaje ="No puede haber menos de $10 en la cuenta"
        displayMensajes(mensaje)
        displayPantalla("")
    }else{
        cuentas[accesoCuenta].saldo =cuentas[accesoCuenta].saldo - montoRetiro
        var mensaje="Usted ha retirado: "+montoRetiro+"<br> El nuevo saldo es:"
        var saldoFinal = cuentas[accesoCuenta].saldo
        
        displayMensajes(mensaje)
        displayPantalla()
    }
}

function habilitarIngresoMonto(){
    document.getElementById("monto").disabled=false
}
function desahilitarIngresoMonto(){
    document.getElementById("monto").disabled=true
}
 */