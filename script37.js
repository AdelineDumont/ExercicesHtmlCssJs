function BoutonSuivant(){
    let Changement1 = document.getElementById("Div1");
    let Changement2 = document.getElementById("Div2");
    let Changement3 = document.getElementById("Div3");
    if (Changement1.style.display == 'inherit') {
        Changement1.style.display = 'none';
        Changement2.style.display = 'inherit';
        Changement3.style.display = 'none';

    }
    else if (Changement2.style.display == 'inherit'){
        Changement2.style.display = 'none';
        Changement1.style.display = 'none';
        Changement3.style.display = 'inherit';
    }
    else {
        Changement1.style.display = 'inherit';
        Changement2.style.display = 'none';
        Changement3.style.display = 'none';
    };
};

