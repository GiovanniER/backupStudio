const mongoose = require('mongoose');
const args=require('yargs').argv;

mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});
mongoose.set('userNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);

const detailsSchema= new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        age:Number,
        address:String
});

const schemaUtenti = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    },
    creationDate:Date,
    lastUpdateDate:Date,
    details:{
        type:detailsSchema,
        required:true
    }
},{versionKey:false});

const utenti = mongoose.model('utenti',schemaUtenti);
module.exports=mongoose.model('utenti',schemaUtenti);
