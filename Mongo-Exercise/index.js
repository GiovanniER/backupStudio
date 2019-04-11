const mongoose = require('mongoose');
const args=require('yargs').argv;

mongoose.connect('mongodb://localhost/ERAccademy',{useNewUrlParser:true});
mongoose.set('userNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.Promise=Promise;

const utente=require('./utenti.js');
const review=require('./review.js');
const command=args.command;

if(command=="register"){
    const promise = new Promise((resolve, reject) => {
        utente.findOne({username:args.username,password:args.password, "details.name": args.name}, function (err, utente) {
            if (err){
                return handleError(err);
            }else{
                const request = utente;
                if (request == undefined) {
                    console.log("creazione utente in corso");
                    resolve(request); 
                } else {
                    reject(Error("error"));
                }
            }
        });
    });
    promise.then((data) => {
        const provaUtente=new utente({username:args.username,password:args.password,"details.name":args.name});
        provaUtente.save(function(error, result) {
            console.log(error, result);
        });
    }, (error) => {
        console.log('User already exists');
    });
}else if(command=="login"){
    utente.findOne({username:args.username,password:args.password}, function (err, utente) {
        if (err){
            return handleError(err);
        }
        if(utente!=undefined){
            console.log("Bentornato! "+args.username);
        }else{
            console.log("Invalid credentials");
        }
    });
}else if(command=="listUser"){
    utente.find({}, function (err, utente) {
        if (err) return handleError(err);
        console.log(utente);
    });     
}else if(command=="updateUser"){
    /*fatto senza promises e poi con promises(inutili, ma per esercizio)*/

    
    utente.updateOne({_id:args._id},
        {$set:{username:args.username,password:args.password,"details.name":args.name,"details.age":args.age,"details.address":args.address}}, function (err, utente) {
        if (err){
            console.log("user not exist");
        }else{
            console.log("creation");
        }
    });
/*
    const promise = new Promise((resolve, reject) => {
        utente.findOne({_id:args._id}, function (err, utente) {
            if (err){
                return handleError(err);
            }else{
                const request = utente;
                if (request !== null) {
                    console.log("modifica in corso");
                    resolve(request); 
                } else {
                    reject(Error("error"));
                }
            }
        });
    });
    promise.then((data) => {
         utente.updateOne({_id:args._id},
        {$set:{username:args.username,password:args.password,"details.name":args.name,"details.age":args.age,"details.address":args.address}}, function (err, utente) {
            if (err) return handleError(err);
        });
    }, (error) => {
        console.log('User not exists');
    }); */
}else if(command=="addReview"){
    review.find({}).populate('utenti').exec();
/**  const provaReview=new review({"user.from":args._id,"user.to":args._id,vote:args.vote});
        provaReview.save(function(error, result) {
            console.log(error, result);
        });*/
   
}else{
    console.log("comando errato");
}