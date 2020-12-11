function BoutonSuivant(){
    let AfficheDiv1=document.getElementsById("div1");
    let AfficheDiv2=document.getElementsById("div2");
    let AfficheDiv3=document.getElementsById("div3");


    if (AfficheDiv1.style.display=="inherit"){
        AfficheDiv1.style.display="none";
        AfficheDiv2.style.display="inherit";
        AfficheDiv3.style.display="none";
    }

    else if (AfficheDiv2.style.display=="inherit"){
            AfficheDiv1.style.display = "none";
            AfficheDiv2.style.display = "none";
            AfficheDiv3.style.display="inhert";
    }
    else {  AfficheDiv1.style.display="inhert";
            AfficheDiv2.style.display="none";
            AfficheDiv3.style.display="none";

    };



};