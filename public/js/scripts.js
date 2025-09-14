"use strict";
//Déclaration des variables
//Récupération des sections
const section = document.querySelectorAll(".section_etape");
//Déclaration de l'étape courante
let etape = 0;
//Récupération des boutons
let boutonSuivant = document.getElementById("bouton_suivant");
let boutonPrecedent = document.getElementById("bouton_precedent");
let boutonDon = document.getElementById("bouton_don");
//Récupération des élements de là navigation
const liNavigation = document.querySelectorAll('li');
/* Initialisation */
function initialiser() {
    console.log("Initialisation du formulaire");
    boutonSuivant?.addEventListener("click", naviguerEtapes);
    boutonPrecedent?.addEventListener("click", naviguerEtapes);
    boutonDon?.addEventListener("click", naviguerEtapes);
    boutonPrecedent?.classList.add("cacher");
    boutonDon?.classList.add("cacher");
    section.forEach(element => { element.classList.add("cacher"); });
    section[0].classList.remove("cacher");
}
/*Afficher les sections */
function afficherSection() {
    const etapeActuelle = document.querySelectorAll(".section_etape");
    cacherSection();
    if (etape >= 0 && etape < etapeActuelle.length) {
        etapeActuelle[etape].classList.remove("cacher");
    }
}
/*Cacher les sections */
function cacherSection() {
    const section = document.querySelectorAll(".section_etape");
    section.forEach(section => { section.classList.add("cacher"); });
}
/*Changement navigation d'étapes*/
/*function changementNavEtape(){
    const valeur = liNavigation.dataset.etape
    const creationA = document.createElement('a');

    valeur.appendChild(creationA);
    

    
} */
/* Permet de naviguer entre les étapes du formulaire */
function naviguerEtapes(event) {
    console.log(etape);
    switch (event.currentTarget.id) {
        case "bouton_suivant":
            if (etape < section.length - 1) {
                etape++;
                afficherSection();
                //changementNavEtape();
            }
            else {
                etape === section.length - 1;
            }
            break;
        case "bouton_precedent":
            if (etape > 0) {
                etape--;
                afficherSection();
            }
            break;
    }
    /* Gestion de l'affichage des boutons */
    if (etape === 0) {
        boutonPrecedent?.classList.add("cacher");
    }
    else {
        boutonPrecedent?.classList.remove("cacher");
    }
    if (etape === section.length - 1) {
        boutonSuivant?.classList.add("cacher");
    }
    else {
        boutonSuivant?.classList.remove("cacher");
    }
    if (etape === 3) {
        boutonDon?.classList.remove("cacher");
    }
    else {
        boutonDon?.classList.add("cacher");
    }
}
//Permet de lancer l'initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", initialiser);
