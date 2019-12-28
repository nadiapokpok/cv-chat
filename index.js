
const identite = document.querySelector("#identity");

//creation de l' objet identity

const identity=  {

    nom: "Pompon",
    age : 4,
    genre : "mâle"
}

identite.textContent = `Nom : ${identity.nom}  Sexe : ${identity.genre} Age : ${identity.age} ans`

//creation et affichage de la date du jour

const myDate = document.querySelector("#date");
myDate.innerHTML = "(" + new Date().toLocaleDateString() +")"



