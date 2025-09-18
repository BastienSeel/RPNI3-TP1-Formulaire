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
const itemNav = document.querySelectorAll('.navigation__etape');
const liNavigation = document.querySelectorAll('.navigation__etape--item');
const boutonNavigation = document.querySelectorAll('a');
/* Initialisation */
function initialiser() {
    console.log("Initialisation du formulaire");
    boutonSuivant?.addEventListener("click", naviguerEtapes);
    boutonPrecedent?.addEventListener("click", naviguerEtapes);
    boutonDon?.addEventListener("click", naviguerEtapes);
    boutonNavigation.forEach(bouton => {
        bouton.addEventListener("click", naviguerNavigation);
    });
    boutonPrecedent?.classList.add("cacher");
    boutonDon?.classList.add("cacher");
    section.forEach(element => { element.classList.add("cacher"); });
    section[0].classList.remove("cacher");
}
/*Afficher les sections */
function afficherSection(event) {
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
function changementNavEtape() {
    for (let i = 0; i < liNavigation.length; i++) {
        const li = liNavigation[i];
        const lien = li.querySelector("a");
        if (i <= etape) {
            li.setAttribute("aria-current", "step");
            lien?.classList.remove("navigation__etape--inactive");
            lien?.classList.add("navigation__etape--active");
            lien?.removeAttribute("aria-disabled");
        }
        else {
            lien?.classList.remove("navigation__etape--active");
            lien?.classList.add("navigation__etape--inactive");
        }
    }
}
/* Permet la navigation avec les liens */
function naviguerNavigation(event) {
    const indexEtape = parseInt(event.currentTarget.dataset.etape);
    if (indexEtape <= etape) {
        etape = indexEtape;
        afficherSection(etape);
        changementNavEtape();
        boutonEtape();
    }
    console.log(etape);
}
/* Permet de naviguer entre les étapes du formulaire */
function naviguerEtapes(event) {
    console.log(etape);
    switch (event.currentTarget.id) {
        case "bouton_suivant":
            if (etape < section.length - 1) {
                etape++;
                afficherSection(etape);
                changementNavEtape();
            }
            else {
                etape === section.length - 1;
            }
            break;
        case "bouton_precedent":
            if (etape > 0) {
                etape--;
                afficherSection(etape);
                changementNavEtape();
            }
            break;
    }
    boutonEtape();
}
/* Gestion de l'affichage des boutons*/
function boutonEtape() {
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
