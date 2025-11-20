ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    assenze = n * 6;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti) / ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}


let displayValue = "";

// Funzione per aggiungere numeri o operatori al display
function appendCalc(val) {
    displayValue += val;
    document.getElementById("displayCalc").value = displayValue;
}

// Funzione per pulire tutto (Tasto C)
function clearCalc() {
    displayValue = "";
    document.getElementById("displayCalc").value = "";
}

// Funzione per calcolare il risultato (Tasto =)
function calculate() {
    try {
        // eval() esegue l'operazione matematica scritta come stringa (es: "2+2")
        // Nota: eval è potente ma va usato con cautela. Per una calcolatrice semplice va bene.
        let result = eval(displayValue); 
        
        document.getElementById("displayCalc").value = result;
        displayValue = result.toString(); // Salva il risultato per continuare i calcoli
    } catch (error) {
        document.getElementById("displayCalc").value = "Errore";
        displayValue = "";
    }
}