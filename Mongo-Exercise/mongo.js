const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});

/*Si vuole creare un’applicazione che permetta di salvare e recuperare una lista di cose da fare. (Todo)

Un Todo deve contenere un titolo unico, una descrizione opzionale, la data di creazione e un valore per indicare se l’attività è stata completata.

Creare lo schema per questo tipo di dati
Creare un Model 

const schemaTodo = new mongoose.Schema({
    titolo:{
        type:String,
        unique:true
    },
    descrizione:{
        type:String,
        required:false
    },
    dataCreazione:Date,
    complete:Boolean
});


const Todo = mongoose.model('Todo',schemaTodo);*/


const Pollo=require('./user.js');
const user=new Pollo({username:"gioV",name:"giovanni",age:23});

user.save(function(error, result) {
	console.log(error, result);
});

