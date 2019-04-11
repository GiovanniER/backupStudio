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
    console.log('Utente Già registrato.');
});
