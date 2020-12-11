let ParentDiv1 = document.getElementById("Div1");
let NewNoeud1 = document.createElement("h1");
NewNoeud1.innerText = "Enfant numero 1";
ParentDiv1.appendChild(NewNoeud1);



let ParentDiv2 = document.getElementById("Div1");
let NewNoeud2 = document.createElement("p");
NewNoeud2.innerText = "Enfant numero 2";
ParentDiv2.appendChild(NewNoeud2);


function ParagrapheClick(PId) {
let ParentDiv3 = document.getElementById("Div2");
let NewNoeud3 = document.getElementById(PId);
ParentDiv3.removeChild(NewNoeud3);
}


ParentDiv1 = document.getElementById("Div1");
let CreationH2 = document.createElement("h2");
CreationH2.innerText = "Enfant numero 1";
ParentDiv1.replaceChild(CreationH2,ParentDiv1.firstChild);



/*let ParentDuH1 = document.getElementById("LaDivDuH1");
let CreationH2 = document.createElement("h2");
CreationH2.innerText = "Le Titre h2";
ParentDuH1.replaceChild(CreationH2,ParentDuH1.firstChild);*/

