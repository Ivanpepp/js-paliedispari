/* 
Ciao ragazze/i!!
Esercizio di oggi:
nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */


//ESERCIZIO PALINDROMO

/* const parola = prompt('inserisci parola da verificare');
if (parola == reverseString(parola)){
    console.log('la parola e` palindroma')
}else{
    console.log('la parola non e` palindroma');
}

function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 */
// ESERCIZIO PARI O DISPARI

let bottone = document.getElementById('bottone');
bottone.addEventListener('click',
    function(){
        let pari = document.getElementById('pari');
        let dispari = document.getElementById('dispari');
       
            let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
            if(numeroUtente <1 || numeroUtente > 5){
                alert('non hai inserito un numero da 1 a 5, pertanto verra` scelto casualmente, sempre da 1 a 5')
                numeroUtente = getRandomInt(1,5);
            }
            let numeroPc = getRandomInt(1,5);
            let somma = 0;
            somma = numeroUtente + numeroPc;
            if (parioDispari(somma)){
                alert('hai vinto!')
            }else{
                alert('hai perso')
            }
            function parioDispari(numero){
                let risultato = true;
                if (numero % 2 != 0){
                    risutato = false;
                }
                return risultato;
            }
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            console.log('il numero scelto dal pc e` ' + numeroPc);
            console.log('mentre tu hai scelto il numero ' + numeroUtente);
            console.log('la somma e` ' + somma);
    })

