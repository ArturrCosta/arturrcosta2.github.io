let qtd = 0;

let myHeading = document.querySelector(".Clique");
document.getElementById("Clique").onclick = function() {
    qtd += 1;
    document.getElementById("num1").innerHTML = ' ' + qtd;
}
