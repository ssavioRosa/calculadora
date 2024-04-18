function clearDisplay() {

    
    let mostra = document.getElementById('mostra')


        mostra.innerHTML = 'Calcule !'
    
    
}
function back() {
    let mostra = document.getElementById('mostra')
    let conteudo = mostra.innerHTML;
    mostra.innerHTML = conteudo.slice(0, -1);
}

function insert(num) {

        let mostra = document.getElementById('mostra')
        let numero = mostra.textContent.trim()

        if (numero.length >= 16) {
            return; 
        }

        
        if (numero === "Calcule !" ) {
            mostra.innerHTML = num
        } else {
            mostra.innerHTML += num
        }




}

function calcula() {
    let mostra = document.getElementById('mostra');
    let conteudo = mostra.innerHTML;

    if (conteudo) {
        let resultado = eval(conteudo);
        if (!isNaN(resultado) && Number.isFinite(resultado)) {
            if (Number.isInteger(resultado)) {
                mostra.innerHTML = resultado;
            } else {
                mostra.innerHTML = resultado.toFixed(10);
            }
        } else {
            mostra.innerHTML = resultado;
        }
    }
    
}