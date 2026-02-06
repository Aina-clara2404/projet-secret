function repondreOui() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("formulaire").classList.remove("hidden");
    document.getElementById("message").innerText =
        "Excellent choix 😍 Maintenant, dis-moi tout…";
}

function repondreNon() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("formulaire").classList.remove("hidden");
    document.getElementById("message").innerText =
        "Mauvaise réponse 😏 mais on continue quand même…";
}
