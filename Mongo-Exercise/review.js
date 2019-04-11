const mongoose = require('mongoose');
const args=require('yargs').argv;

mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});
mongoose.set('userNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);

const schemareview = new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"utenti"
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"utenti"
    },
    vote:{
        type:Number,
        min:1,
        max:5
    },
    message:{
        type:String,
        required:false
    },
    creationDate:{
        type:Date,
        required:false
    }
},{versionKey:false});

const review = mongoose.model('review',schemareview);
module.exports=mongoose.model('review',schemareview);