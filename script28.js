nombre = prompt ("Donnez moi un nombre entre 10 et 20 :")

while(10>nombre || 20<nombre){

    
    if (nombre > 20 ){
        alert("Plus petit!");
    }else if (nombre < 10){ 
     alert("Plus grand !");
    }
    nombre = prompt ("Donnez moi un nombre entre 10 et 20 :")
}
alert("Nombre correct !!")