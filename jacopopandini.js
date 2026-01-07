const lezioni = {
    'violenza': `
        <h2>La Violenza di Genere</h2>
        <hr>
        <p><strong>Cos'è:</strong> Qualsiasi atto di violenza (fisica, sessuale, psicologica o economica) diretto contro una persona in quanto donna o che colpisce le donne in modo sproporzionato.</p>
        
        <ul>
            <li><strong>Violenza Psicologica:</strong> Insulti, controllo, isolamento sociale e minacce. Spesso precede la violenza fisica.</li>
            <li><strong>Violenza Economica:</strong> Impedire alla persona di lavorare o gestire il proprio denaro per renderla dipendente.</li>
            <li><strong>Il Ciclo della Violenza:</strong> Un meccanismo che alterna fasi di tensione, esplosione della violenza e "luna di miele" (false scuse).</li>
        </ul>

        <p><strong>Quadro Normativo:</strong> In Italia esiste il <em>Codice Rosso</em> (Legge 69/2019) che velocizza le indagini e protegge le vittime. A livello internazionale, il punto di riferimento è la <em>Convenzione di Istanbul</em>.</p>
        
        <p><strong>Come aiutare:</strong> Il numero nazionale gratuito è il <strong>1522</strong>, attivo 24h su 24.</p>
    `
};

function apriLezione(id) {
    document.getElementById('contenuto-lezione').innerHTML = lezioni[id];
    document.getElementById('modal').style.display = 'flex';
}

function chiudiLezione() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) chiudiLezione();
}