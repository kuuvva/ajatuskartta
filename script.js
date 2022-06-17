"use strict";
// Dynaamisesti luotu ajatuskartta menetetään sivulta poistuttaessa,
// joten kysytään varmistus.
// window.addEventListener("beforeunload", e => e.preventDefault());

/**
 * Luodaan solmuelementti annettuun sijaintiin
 * body-elementissä.
 * @param {number} posX - vasemman reunan x-koordinaatti bodyssa
 * @param {number} posY - yläreunan y-koordinaatti bodyssa
 * @returns {HTMLDivElement} luotu solmu
 */
function solmu(posX, posY) {

    const solmu = document.createElement("div");

    const solmuClass = "solmu";
    solmu.classList.add(solmuClass);

    document.body.appendChild(solmu);
    solmu.style.left = posX + "px";
    solmu.style.top = posY + "px";
    return solmu;
}