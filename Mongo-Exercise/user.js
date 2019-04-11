const mongoose = require('mongoose');
const args=require('yargs').argv;

mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});
mongoose.set('userNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.set("debug",true);

/*Definizione dello schema (utente con username,nome,età)*/ 
const schema = new mongoose.Schema({
                    username: {
                        type: String,
                        unique: true,
                        required: true
                    },
                    name: String,
                    age: Number
});
const Pollo = mongoose.model('pollo', schema);

module.exports=mongoose.model('Pollo',schema);