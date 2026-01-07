const lezioni = {
    'violenza': `
        <h2>La Violenza di Genere: Un’Analisi Multidimensionale</h2>
        <hr>
        
        <h3>1. Definizione e Radici del Fenomeno</h3>
        <p>La violenza di genere non è un evento isolato o uno "scatto d'ira", ma un <strong>fenomeno strutturale</strong> che affonda le sue radici in una disparità storica di potere tra uomini e donne. Secondo la <em>Convenzione di Istanbul</em>, si definisce come qualsiasi atto di violenza che provochi un danno fisico, sessuale o psicologico, basato sul genere della vittima.</p>

        <h3>2. Le Forme della Violenza</h3>
        <p>Il fenomeno è spesso paragonato a un iceberg, dove la violenza fisica è solo la punta visibile:</p>
        <ul>
            <li><strong>Violenza Psicologica:</strong> La più difficile da denunciare. Include insulti, svalutazione costante, controllo ossessivo dei contatti e isolamento dagli affetti.</li>
            <li><strong>Violenza Economica:</strong> Impedire alla donna di lavorare o controllare ogni sua spesa per renderla totalmente dipendente.</li>
            <li><strong>Violenza Assistita:</strong> Quando i figli assistono alle violenze in casa; è una forma di maltrattamento infantile con traumi profondi.</li>
        </ul>

        <h3>3. Il "Ciclo della Violenza"</h3>
        <p>Identificato dalla sociologa Leonore Walker, si divide in tre fasi che spiegano perché è difficile uscire dal legame:</p>
        <ol>
            <li><strong>Accumulo della tensione:</strong> Piccoli conflitti e clima pesante.</li>
            <li><strong>Esplosione:</strong> L'episodio violento vero e proprio.</li>
            <li><strong>Luna di miele:</strong> Il maltrattante chiede scusa e promette di cambiare, dando alla vittima la falsa speranza di un cambiamento.</li>
        </ol>

        <h3>4. Il Quadro Normativo: Il Codice Rosso</h3>
        <p>In Italia, la <strong>Legge 69/2019</strong> ha introdotto una "corsia preferenziale" per le denunce:</p>
        <ul>
            <li>Obbligo per la polizia di comunicare subito la notizia di reato al magistrato.</li>
            <li>Ascolto della vittima entro 3 giorni dalla denuncia.</li>
            <li>Nuovi reati: Revenge Porn e lesioni permanenti al viso.</li>
        </ul>

        <h3>5. Conclusione e Riflessione</h3>
        <p>La lotta si combatte su due fronti: quello <strong>repressivo</strong> (leggi severe e numero 1522) e quello <strong>culturale</strong>, educando al rispetto nelle scuole per scardinare l'idea della donna come "proprietà".</p>
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

