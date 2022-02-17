const cuentas = [
    {nombre:"Mali",saldo:200,password:"Mali123"},
    {nombre:"Gera",saldo:290,password:"Gera123"},
    {nombre:"Maui",saldo:67,password:"Maui123"}
]


var login=false
function validar(){
    
    var user = document.getElementById("uname").value
    var pass = document.getElementById("upass").value
    for(var i = 0; i<cuentas.length; i++){
        if(cuentas[i].nombre==user && cuentas[i].password==pass){
            login=true
            let ruta = "acceso.html?id="+i
            window.location.href= ruta
                    
        }
    }
    if(login==false){
        alert("Usuario y/o contraseña incorrectos, intenta de nuevo.")
    }
}

