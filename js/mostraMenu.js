function mostrarMenu() {
    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");

if (getComputedStyle(menu).display == 'none') {
    menu.style.display = "flex";
    icone.ClassList.remove("fa-bars");
    icone.ClassList.add("fa-times");
    // mudando o class fa-times [ icone X ]
} else {
    menu.style.display = "none";
    icone.ClassList.remove("fa-times");
    icone.ClassList.add("fa-bars");
    // mudando o class fa-bars [ icone barras ]
}

} 