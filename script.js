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

document.getElementById("valentineForm1").addEventListener("submit", function(e) {
    e.preventDefault();

    const resto = this.resto.value;
    const tenue = this.tenue.value;
    const activite = this.activite.value;

    const message =
`💘 Réponses officielles de ton Valentin 💘

🍝 Resto : ${resto}
👗 Tenue : ${tenue}
🎬 Activité : ${activite}

Je t’aime ❤️`;

    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/?text=${encoded}`, "_blank");
});
