window.addEventListener("load", visSkaerm);


function visSkaerm() {
    console.log("widening");
    document.querySelector("#hr").classList.remove("hide");
    document.querySelector("#hr").classList.add("widening");



    document.querySelector("#hr").addEventListener("animationend", hop);
}

function hop() {
    document.querySelector("#br1").classList.add("hide");
    document.querySelector("#br2").classList.add("hide");

}
