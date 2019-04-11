/* primo esercizio file ppt*/


/*let x;
x=15;

if(x%3==0 && x%5==0){
    console.log("FizzBuzz");
}else if(x%3==0){
    console.log("Fizz");
}else if(x%5==0){
    console.log("Buzz");
}else{
    console.log(x);
}*/


/*Secondo esercizio pptx 
Scrivere un programma che accetti come parametro una delle seguenti azioni:
N: se il parametro è un numero, stampare il suo quadrato
“help”: spiega cosa può fare il programma
“version”: stampa la versione
Altrimenti, stampare un errore
*/ 

/*

console.log(process.argv[2]);
let x=process.argv[2];

if(!isNaN(x)){
    console.log(x*x);
}else if(x=="help"){
    console.log("il programma deve blablabla");
}else if(x=="version"){
    console.log("");
}else{
    console.log("err");
}*/


/*terzo esercizio pptx : 
Scrivere un programma che accetti come parametro un numero N e stampi la somma di tutti i numeri pari compresi tra 0 e N.

Gestire il caso in cui manchi l’input.
Gestire il caso in cui l’input non sia effettivamente un numero.
Gestire il caso in cui il numero sia negativo.*/


/*
let x=process.argv[2];
let sum=0;
let i=0;

while(i<=x){
    if(i%2==0){
        sum=sum+i;
    }
    i++;
}
if(sum!=0){
    console.log(sum);
}
if(x==null){
    console.log("manca il parametro");
}
if(isNaN(x)){
    console.log("not a number");
}

if(x<=0){
    console.log("number negative");
}*/


/*Quarto esercizio : Modificare l’esercizio 3 in modo che:
Il check della validità dell’input sia fatto in una function. Se questa function ritorna true l’esecuzione prosegue, altrimenti si interrompe.
Il calcolo del totale sia fatto in una function.*/

/*
let x=process.argv[2];
function somma(x){
    let sum=0;
    let i=0;
    while(i<=x){
        if(i%2==0){
            sum=sum+i;
        }
        i++;
    }
    if(sum!=0){
        console.log(sum);
    }
}
function check(x){
    if(x==null){
        console.log("manca il parametro");
    }
    if(isNaN(x)){
        console.log("not a number");
    }
    if(x<=0){
        console.log("number negative");
    }
}
somma(x);
check(x);
*/


/* Quinto esercizio : Scrivere una function che accetti come parametri un numero “N” e una function “filter”. 
“filter”, dato un numero, ritorna true o false a seconda che tale numero soddisfi una certa condizione.
La function stampa tutti i numeri da 1 a N per i quali “filter” ritorna true.

Creare diverse implementazioni di filter:
Numeri pari
Numeri dispari
Numeri divisibili per 17*/

/*const x=process.argv[2];
function filter(passo){
    if(passo%2==0){
        return true;
    }else{
        return false;
    }
}
let i=1;
function one(n,filtro){
    while(i<=n){
        if(filter(i)==true){
            console.log(i);   
        }
        i++;
    }
}
one(x,filter(x));*/ 

/*Esercizio 6 pptx : 
Modificare l’esercizio 5 in modo da usare un’unica anonymous function come filter, che ritorna true solo se il numero è maggiore di 20.
*/


/*const x=process.argv[2];
let i=1;
let sum=0;
const esercizio = function (x, filter){
    while(i<=x){
        if(filter(i)==true){
            sum+=i;
        }
        i++;
    }

    console.log(sum);   
}

esercizio(x, function (x) {
    return (x>20)?true:false;
}); 
*/

/*Esercizio 7 :
Dato un array di piloti: [“Sebastian Vettel”, “Lewis Hamilton”, “Fernando Alonso”, “Max Verstappen”], stampare il nome di ogni pilota cui cognome è al più di 7 caratteri.

tip: una stringa può essere scomposta in un array di stringhe usando il metodo split:
“Hello world”.split(“ ”); // [“Hello”, “world”]
*/

/*
let piloti=["Sebastian Vettel", "Lewis Hamilton", "Fernando Alonso", "Max Verstappen"];
piloti.forEach(function (nomi){
    let name=nomi.split(" ");
    
    if(name[1].length>7){
        console.log(name[0]);
    }
});*/


/*Esercizio 8 : 

Dall’ array di stringhe definito nell’esercizio 7, creare un array di oggetti che abbiano come proprietà name e surname dei piloti.
*/ 

/*
let piloti=["Sebastian Vettel", "Lewis Hamilton", "Fernando Alonso", "Max Verstappen"];
let arr=[];

piloti.forEach(function(nomi){
    let nome=nomi.split(" ");
    arr.nome=nome[0];
    arr.cognome=nome[1];
    console.log(arr);
});*/

/*Esercizio 9 : 

Creare una classe Driver, che abbia come proprietà:
Nome
Cognome
Team

E come metodi:
drive: stampa qualcosa che faccia capire che il pilota sta guidando
transfer: un metodo che permetta di cambiare il team del pilota
*/

/*
class Driver {
	constructor(name, surname, team) {
        this.name = name;
        this.surname = surname;
        this.team=team;
	}
    drive(){
        console.log("WROOM");
    }
    transfer(newTeam){
        console.log("L'utente ha cambiato scuderia da : "+this.team+ " a : "+newTeam);
        Driver.team=newTeam;
    }
}

const user = new Driver("Michael", "shumacker", "ferrari");
user.drive();
user.transfer("suzuki");*/

/*Esercizio 10 : 

Creare una classe Human che modelli una persona. Nel costruttore vengono passati nome e cognome. La classe deve inoltre avere un metodo sayHi che stampa un saluto.

Creare una classe Driver che estenda Human e aggiunga una property team ed un metodo drive.

Verificare cosa succede tentando di invocare il metodo drive  su un’istanza di Human.

*/


/*class Human {
	constructor(name, surname) {
        this.name = name;
        this.surname = surname;
	}
    sayHi(){
        console.log("Ciao il mio nome è : "+this.name+" e il mio cognome è: "+this.surname);
    }
}

class Driver extends Human{
    constructor (team){
     super(team);
    }
    drive(){
        console.log("WROMG");
    }
    sayHi(){
        console.log("Ciao il mio nome è : "+this.name+" e il mio cognome è: "+this.surname);
    }
}

const x=new Human("piero","lollo");
x.sayHi();
const h=new Driver("lollo","piero");
h.sayHi();
h.drive();*/



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

/*
const lib=require("./esercizio11-exportmodule.js");

let x,y;
x=6;
y=5;

ris=lib.somma(x,y);
console.log("somma : "+ris);

ris=lib.sottrazione(x,y);
console.log("sottra : "+ris);

ris=lib.moltiplicazione(x,y);
console.log("molti "+ris);

ris=lib.divisione(x,y);
console.log("div :"+ris);


ris=lib.fattoriale(x);
console.log("fatt : "+ris);

*/


/*Esercizio 12:
Creare un programma che legga il contenuto di un file.
Se il file non dovesse esistere, lo crei con un contenuto a piacere

const fs=require("fs");
const file_name ="file.txt";
fs.readFile(file_name,"utf8",function(err,data){
    if(err!==null){
        console.log("something wrong happened,no file detected, I'm gonna create one");
        return ;
    }
    console.log(data);
});
fs.writeFile(file_name,"Ciao a tutti",function(err){
    if(err!==null){
        console.log("something went wrong creating the file");
        return;
    }
})*/

/*Esercizio 13: 
Dato il file data.json, stampare un JSON contenente un array di tutte le scuderie di piloti ancora in attività.


const x={
    "name":"Giovanni",
    "surname":"libralesso",
    "age": 23,
    "in_activity":true,

    "name":"aaa",
    "surname":"dd",
    "age": 24,
    "in_activity":false,


    "name":"qqq",
    "surname":"zzz",
    "age": 25,
    "in_activity":true,


    "name":"wwww",
    "surname":"ff",
    "age": 6,
    "in_activity":false
};

for(var k in x) {
   console.log(k, result[k]);
}
*/


/*Esercizio 14

chalk è una libreria per colorare l’output nel terminale. Permette quindi di stampare una certa stringa in un certo colore.

Installare la libreria e modificare l’esercizio 1 in modo che “Fizz” venga sempre stampato in blu, “Buzz” in rosso e i numeri in verde.

const c=require('chalk');
let x;
x=21;

if(x%3==0 && x%5==0){
    console.log(c.blue("Fizz")+c.red("Buzz"));
}else if(x%3==0){
    console.log(c.blue("Fizz"));
}else if(x%5==0){
    console.log(c.red("Buzz"));
}else{
    console.log(c.green(x));
}
*/