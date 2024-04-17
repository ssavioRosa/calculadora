function insert(num) {
    let mostra = document.getElementById('mostra');
    let numero = mostra.textContent.trim(); // Remova os espaços em branco do início e do fim

    // Verifique se o conteúdo atual é apenas "Calcule!"
    if (numero === "Calcule !") {
        mostra.innerHTML = num;
    } else {
        mostra.innerHTML += num;
    }
}