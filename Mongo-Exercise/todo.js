const mongoose = require('mongoose');
const args=require('yargs').argv;

mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});
mongoose.set('userNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
/*mongoose.set("debug",true);*/


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
},{versionKey:false});


const Todo = mongoose.model('Todo',schemaTodo);
/*
const cosedafare=new Todo({titolo:"ciao",descrizione:"ciao",dataCreazione:new Date(),complete:true});

cosedafare.save(function(error, result) {
	console.log(error, result);
});

*/

Todo.findOne({ 'titolo': 'ciao' }, function (err, todo) {
    if (err) return handleError(err);
        console.log(todo);

});



Todo.find({complete:false}, function (err, todo) {
    if (err) return handleError(err);
    console.log(todo);
});



/*

Todo.remove({}, function (err, todo) {
    if (err) return handleError(err);
    console.log(todo);
});*/
