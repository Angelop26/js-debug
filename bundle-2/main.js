/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//1. dovrebbe stampare tutti i numeri che vanno da 0 a 4
//2. dovrebbe essere minore di 5 se no non inizia il ciclo

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
//1. se il numero è pari somma 5 e fare return
//2. dovrebbe essere un triplo uguale nell'if
//3. il secondo return deve essere incluso in un else e non è stata richiamata

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
//1. cicla da 0 a 4
//2. servono i punti e virgola e non le virgole
//3.non è stata richiamata

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]
//1.stampa un array di numeri pari
//2.sia numbers che evenNumbers devono essere dichiarati come const, non serve il punto e virgola dopo i++ e dopo la condizione dell'if, return deve essere fuori il ciclo for 
//3. i deve essere minore solo di numbers.length senza il (-1), nell'if è numbers[i] e non solo numbers, serve il triplo uguale nell'if, non bisogna pushare i ma numbers[i] 