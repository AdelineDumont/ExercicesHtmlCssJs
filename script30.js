function convertirCenF(NombreCelsius){
    return (NombreCelsius* 9+(32*5))/5 ;
    };


function convertirFenC(NombreFahrenheit){
        return (5/9)*(NombreFahrenheit - 32);
      };




      Convertissement = prompt ('Si vous voulez convertir des degres Celsius en degres Fahrenheit, tapez "celsius", si vous voulez des Fahrenheit en Celsius,tapez "fahrenheit"')

if (Convertissement == "celsius"){
    NombreCelsius = prompt ("Donnez moi un chiffre ou un nombre Celsius");
    alert("Valeur en Fahrenheit : " + convertirCenF(NombreCelsius)+ "°F");
}else if(Convertissement == "fahrenheit"){
    NombreFahrenheit = prompt ("Donnez moi un chiffre ou un nombre Fahrenheit");
    alert("Valeur en Celsius : " +convertirFenC(NombreFahrenheit)+ "°C");
};





