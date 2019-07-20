document.getElementById('bouton').addEventListener('click', function () {
    let form = document.getElementById("formulaire");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

document.getElementById('association').addEventListener('mouseover', function () {
    let sousMenu = document.getElementsByClassName("sous-menu");
    for (let i = 0; i<sousMenu.length; i++){
    if (sousMenu[i].style.display === "none") {
        sousMenu[i].style.display = "block";
    } else {
        sousMenu[i].style.display = "none";
    }
}
});

document.getElementById('adoption').addEventListener('mouseover', function () {
    let SousMenu1 = document.getElementsByClassName("sous-menu1");
    for (let i = 0; i<SousMenu1.length; i++){
    if (SousMenu1[i].style.display === "none") {
        SousMenu1[i].style.display = "block";
    } else {
        SousMenu1[i].style.display = "none";
    }
}
});


document.getElementById('service').addEventListener('mouseover', function () {
    let sousMenu2 = document.getElementsByClassName("sous-menu2");
    for (let i = 0; i<sousMenu2.length; i++){
    if (sousMenu2[i].style.display === "none") {
        sousMenu2[i].style.display = "block";
    } else {
        sousMenu2[i].style.display = "none";
    }
}
});

document.getElementById('doc').addEventListener('mouseover', function () {
    let sousMenus3 = document.getElementsByClassName("sous-menu3");
    for (let i = 0; i<sousMenus3.length; i++){
    if (sousMenus3[i].style.display === "none") {
        sousMenus3[i].style.display = "block";
    } else {
        sousMenus3[i].style.display = "none";
    }
}
});

document.getElementById('forum').addEventListener('mouseover', function () {
    let sousMenu4 = document.getElementsByClassName("sous-menu4");
    for (let i = 0; i<sousMenu4.length; i++){
    if (sousMenu4[i].style.display === "none") {
        sousMenu4[i].style.display = "block";
    } else {
        sousMenu4[i].style.display = "none";
    }
}
});