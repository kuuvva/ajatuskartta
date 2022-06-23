"use strict";
// Dynaamisesti luotu ajatuskartta menetetään sivulta poistuttaessa,
// joten kysytään varmistus.
// window.addEventListener("beforeunload", e => e.preventDefault());
const idType = "id";
window.onload = function(e) {
    solmu(100, 100);
    // solmu(0, 0)
    document.body.addEventListener("dragover", function(e) {
        e.dataTransfer.dropEffect="move";
        e.preventDefault();
    });
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
    solmu.id = teeId();
    solmu.classList.add(solmuClass);
    solmu.style.left = posX + "px";
    solmu.style.top = posY + "px";

    // Solmu raahaus
    solmu.setAttribute("draggable", true);
    solmu.addEventListener("dragstart", function(e) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData(idType, solmu.id);
        e.dataTransfer.setData("x", e.offsetX);
        e.dataTransfer.setData("y", e.offsetY);
    });
    solmu.addEventListener("dragend", function(e) {
        if (e.dataTransfer.dropEffect === "move") {
            const alkux = parseInt(e.dataTransfer.getData("x"));
            const alkuy = parseInt(e.dataTransfer.getData("y"));
            solmu.style.left = e.pageX-alkux+"px";
            solmu.style.top = e.pageY-alkuy+"px";
        }
    });


    // Solmun teksti
    const p = document.createElement("p");
    p.setAttribute("contenteditable", true);
    solmu.tekstiElem = p;
    solmu.appendChild(p);
    document.body.appendChild(solmu);
    return solmu;
}

function teeId() {
    /**
     * TODO
     * Ei välttämättä toimi eri aikavyöhykkeillä.
     */
    return "id-"+Date.now(); 
}