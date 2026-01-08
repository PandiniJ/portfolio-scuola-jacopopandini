const lezioni = {
    'violenza': `
        <h2>La Violenza di Genere: Analisi e Contesto Normativo</h2>
        <hr>
        
        <h3>1. Definizione e Radici del Fenomeno</h3>
        <p>La violenza di genere è un <strong>fenomeno strutturale</strong> radicato in una storica disparità di potere tra uomini e donne. Non è un evento isolato, ma un atto basato sul genere della vittima che provoca danni fisici, sessuali o psicologici.</p>

        <h3>2. Le Forme della Violenza ("L'Iceberg")</h3>
        <p>La violenza fisica è solo la punta visibile. Altre forme includono:</p>
        <ul>
            <li><strong>Violenza Psicologica:</strong> Insulti, controllo ossessivo e isolamento sociale.</li>
            <li><strong>Violenza Economica:</strong> Impedire l'indipendenza finanziaria della vittima.</li>
            <li><strong>Violenza Assistita:</strong> Quando i minori sono testimoni delle violenze domestiche.</li>
        </ul>

        <h3>3. Il "Ciclo della Violenza" (Leonore Walker)</h3>
        <p>Descrive perché è difficile interrompere la relazione:</p>
        <ol>
            <li><strong>Accumulo della tensione:</strong> Clima teso e piccoli conflitti.</li>
            <li><strong>Esplosione:</strong> L'episodio di violenza acuta.</li>
            <li><strong>Luna di miele:</strong> Fase di scuse e false promesse che intrappola la vittima.</li>
        </ol>

        <h3>4. Contesto Storico e Internazionale</h3>
        <ul>
            <li><strong>Sorelle Mirabal (1960):</strong> Simboli della resistenza dominicana, la loro uccisione ha dato origine alla data simbolo.</li>
            <li><strong>25 Novembre:</strong> Giornata internazionale istituita dall'ONU nel 1999.</li>
            <li><strong>Convenzione di Istanbul (2011):</strong> Trattato UE fondamentale per la lotta alla violenza sulle donne.</li>
        </ul>

        <h3>5. Evoluzione Legislativa Italiana</h3>
        <p>Il quadro normativo è cambiato radicalmente:</p>
        <ul>
            <li><strong>Passato:</strong> Fino agli anni '70 lo stupro era reato contro la morale. Il "Matrimonio riparatore" e il "Delitto d'onore" sono stati aboliti solo nel <strong>1981</strong> (con la legge 442).</li>
            <li><strong>Codice Rosso (2019):</strong> Corsia preferenziale per le denunce, ascolto entro 3 giorni e nuovi reati come il <em>Revenge Porn</em>.</li>
            <li><strong>Aggiornamenti 2023:</strong> Rafforzamento del concetto di "non consenso" e misure cautelari più veloci.</li>
        </ul>

        <h3>6. Simboli e Conclusione</h3>
        <p>Le <strong>Panchine Rosse</strong> e le <strong>Scarpe Rosse</strong> sono simboli globali di riflessione. Il termine <strong>Femminicidio</strong> è stato coniato per sottolineare la specificità di questi crimini. La lotta è sia repressiva (numero <strong>1522</strong>) che culturale.</p>
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


