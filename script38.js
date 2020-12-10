function BoutonSuivant(){
    let Changement1 = document.getElementById("Image1");
    let Changement2 = document.getElementById("Image2");
    let Changement3 = document.getElementById("Image3");

    if (Changement1.style.display == 'inherit') {
        Changement1.classList.add("ImageN1")
    }
    else if (Changement2.style.display == 'inherit'){
        Changement2.classList.toggle("ImageN2")
    }

    else {Changement3.classList.toggle("ImageN3")
    };
    


};