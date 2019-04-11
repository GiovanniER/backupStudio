/*Esercizio 11

Creare un modulo che esporti le seguenti funzioni:
Sommare 2 numeri
Sottrarre 2 numeri
Moltiplicare 2 numeri
Dividere 2 numeri
Calcolare il fattoriale di un numero
Verificare in ogni metodo che i parametri siano effettivamente numeri. Non lo fossero le funzioni dovranno ritornare null.

Creare un modulo che usi il modulo precedente.
*/

function somma(a,b){
    if(isNaN(a)|| isNaN(b)){
        return null;
    }else{
        return a+b;
    }
}
function sottrazione(a,b){
    if(isNaN(a)|| isNaN(b)){
        return null;
    }else{
        return a-b; 
    }
}
function moltiplicazione(a,b){
    if(isNaN(a)|| isNaN(b)){
        return null;
    }else{
        return a*b;
    }
}
function divisione(a,b){
    if(isNaN(a)|| isNaN(b)){
        return null;
    }else{
        return a/b;
    }
   
}
function fattoriale(a){
    if(isNaN(a)){
        return null;
    }else{
        let i,f=1;
        for(i=a;i>1;i--){
            f=f*i;
        }
        return f;
    }   
}


module.exports={
    somma:somma,
    sottrazione:sottrazione,
    moltiplicazione:moltiplicazione,
    divisione:divisione,
    fattoriale:fattoriale
}