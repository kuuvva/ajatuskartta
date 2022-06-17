"use strict";
// Dynaamisesti luotu ajatuskartta menetetään sivulta poistuttaessa,
// joten kysytään varmistus.
// window.addEventListener("beforeunload", e => e.preventDefault());

window.onload = function(e) {
    solmu(100, 100);
    solmu(0, 0)
}

/**
 * Luodaan solmuelementti annettuun sijaintiin
 * body-elementissä. Solmuelementillä on teksti ja
 * visuaaliset yhteydet muihin solmuihin.
 * @param {number} posX - vasemman reunan x-koordinaatti bodyssa
 * @param {number} posY - yläreunan y-koordinaatti bodyssa
 * @returns {HTMLDivElement} luotu solmu
 */
function solmu(posX, posY) {

    const solmu = document.createElement("div");

    const solmuClass = "solmu";
    solmu.classList.add(solmuClass);
    solmu.style.left = posX + "px";
    solmu.style.top = posY + "px";

    const p = document.createElement("p");
    p.setAttribute("contenteditable", true);
    solmu.tekstiElem = p;
    solmu.appendChild(p);
    document.body.appendChild(solmu);
    return solmu;
}