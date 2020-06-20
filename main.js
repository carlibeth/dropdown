document.querySelectorAll(".enlace").forEach(el => {
    el.addEventListener('mouseover', function(evento){
        document.getElementById("lista").classList.remove("hide");
        document.getElementById("lista").classList.add("show");
    });
    
});

document.querySelector("#lista > a").addEventListener('click', function(evento){
    document.getElementById("lista").classList.remove("show");
    document.getElementById("lista").classList.add("hide");
});