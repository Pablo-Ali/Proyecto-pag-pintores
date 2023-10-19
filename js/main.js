function mostrar(){
    let nombre = "";
    let mail = "";
    let consulta = "";
    let nombreOk = false;
    let mailOk = false;
    let consultaOk = false;
    let arroba = false;
    let com = false;

    nombre = document.getElementById("nombre").value;
    if(nombre == " " || nombre == ""){
        alert("Debe ingresar su nombre");
    }else{
        nombreOk = true;
    }

    mail = document.getElementById("mail").value;
    if(mail.includes("@")){
        arroba = true;
    }
    if(mail.includes(".com")){
        com = true;
    }
    if(mail == " " || mail == "" || arroba == false || com == false){
        alert("Debe ingresar un mail valido");
    }else{
        mailOk = true;
    }

    consulta = document.getElementById("consulta").value;
    if(consulta == "" || consulta == " "){
        alert("Debe ingresar una consulta");
    }else{
        consultaOk = true
    }
    
    if(nombreOk == true && mailOk == true && consultaOk == true){
        alert("¡Hola, " + nombre + "!\nGraciar por comunicarte con nosotros. A la brevedad nos contactaremos para resolver tus dudas.");
    }
}

function presupuesto(){
    //a partir de los 50 litros habra un descuento del 10%, y a partir de los 100, del 15%
    //cada litro sale 3000
    let litros = document.getElementById("litros").value;
    let precio = NaN;
    let suma = litros * 3000;
    let verif10 = false;
    let verif15 = false;
    let verifNaN = false;

    parseFloat(litros);


    if(litros >= 100){
        precio = suma - (suma * 0.15);
        verif15 = true;
    }else if(litros >= 50){
        precio = suma - (suma * 0.10);
        verif10 = true;
    }else{
        precio = suma;
    }

    if(isNaN(precio)){
        alert("Debe ingresar un numero");
    }else if(verif15 == true){
        alert("Para " + litros + " litros, el costo será de: $" + precio + "\n Se ha aplicado el descuento del 15%");
    }else if(verif10 == true){
        alert("Para " + litros + " litros, el costo será de: $" + precio + "\n Se ha aplicado el descuento del 10%");
    }else{
        alert("Para " + litros + " litros, el costo será de: $" + precio);
    }
}



