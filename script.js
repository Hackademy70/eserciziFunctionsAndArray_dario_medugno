/* 

Esercizio 1

Scrivi una funzione che, dato un numero, let numberOfShots, simuli un gioco di dadi tra due utenti.
    - Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
    - ogni dado ha 6 facce
    - ogni giocatore tirerà il dado n volte
      Per ogni giocatore:
    - generare un numero casuale per ogni tiro che effettuera’,
    - ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
        Suggerimento:
        - Usiamo questa formula per generare un numero random
    Math.floor(Math.random() * (6 - 1) + 1); */
    
     let numbersOfShots = 6;
    
    function giocoDadi(shots) {
        let player1 = 0;
        let player2 = 0;
        
         // START GAME
        for(let i = 0; i <= shots; i++) {
         player1 = player1 + Math.floor(Math.random() * (6 - 1) + 1);
         player2 = player2 + Math.floor(Math.random() * (6 - 1) + 1);
       }

       if(player1> player2){
        return `Il player1 ha vinto con ${player1} punti.`;
    } else if (player2 > player1){
        return `Il player2 ha vinto con ${player2} punti.`;
    } else {
        return `Hanno pareggiato con ${player1} punti;`;
    }
    }
    
    // invocare la funzione

    console.log(giocoDadi(6));

    
     
    /* ES.2 Scrivere una funzione che permetta di stampare in console tutti i numeri da 1 a N:
    - N dovra’ rappresentare il parametro formale della funzione
    - tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
    - tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
    - e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'  */
     

       function fizzBuzz(N){
       for (let i = 1; i <= N; i++){
          if(i % 15 == 0) {
            console.log("fizz");
          } 
          else if(i % 5 == 0){
            console.log("Buzz");
          } 
          else if(i % 3 == 0){
             console.log("fizzBuzz");
          } else {
            console.log(i);
          }
        }
        return;
     }
      
       // invocare la funzione
     console.log(fizzBuzz(50));
     console.log(fizzBuzz(100));



/* - ES3:  Scrivi due funzioni:
    - dato un array: let numbers = [10, 12, 78, -4, -20, 11];
    - una che prenda in input un array di numeri
    - e restituisca il maggiore
    - l'altra che restituisca il minore.
    - Suggerimento utilizzare Math.max() e Math.min(); consultare per bene la documentazione(ATTENZIONE!):cohttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=it#examples
*/
     let numbers =[10, 12, 78, -4, -20, 11];

     function findMax(arr){
        return Math.max(...arr);
     }

     function findMin(arr){
        return Math.min(...arr);
     }

     console.log(findMax(numbers));   // 78
     console.log(findMin(numbers));   // -20
    




     /* - ES4: Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
    - Esempio:
            Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
            Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
    - Variante:
       Prova ad ordinali in modo crescente. */
        
       //ordine decrescente
       let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
       array.sort(function(a, b) {
        return b - a; 
       });
       
       console.log(array); 

       
       //ordine crescente
       let array2 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
       array.sort(function(a, b) {
        return a - b ;
       });

       console.log(array2);


     /*- ES5: Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
    - Esempi:
        Input : 9
        Output :  1 cifra

        Input : 99
        Output :  2 cifre
    - Suggerimento: cercare su internet come contare i caratteri di un dato di tipo number. */


    function counter(num){
      if(num < 10) {
        return "1 cifra";
      } else if (num < 100){
        return "2 cifre";
      } else if (num < 1000) {
        return "3 cifre";
      } else if (num < 10000){
        return "4 cifre";
      } else {
        return "numero troppo grande";
      }

      }

      console.log(counter(9));      // output 1 cifra
      
      console.log(counter(99));     // output 2 cifre
      
      console.log(counter(500));    // output 3 cifre
      
      console.log(counter(4999));   // output 4 cifre
      
      console.log(counter(9999));   // output 5 cifre