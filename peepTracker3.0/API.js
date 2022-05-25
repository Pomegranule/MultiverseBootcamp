'use strict';

const sqlite3 = require('sqlite3');

const express = require('express');

const serverDB = require('./server');

const userDatabase = require('./Database/userDatabase');

const iconDatabase = require('./Database/iconDatabase');

const app = serverDB.app;


//////////////GET/POST/DELETE for the user and their peeps///////////
function userAccountOptions() {
    app.get(userDatabase, (request, response) => {
        
    });

    // app.post(userDatabase, (request, response) => {
    //     console.log(request.body.userName);
    //     response.sendStatus(201);
    // });

    // app.delete(userDatabase, (request, response) => {
    //     const index = request.params.id;
    //     console.log("Deleting account." + index);
    // });
}
// 
// function userPeepsOptions() {
//  //    app.get(iconDatabase, (request, response) => {
//  //        const selectSql = "SELECT * FROM userPeeps;";
//  //        db.all(selectSql, (err, rows) => {
//  //            if (err) {
//                 return console.error(err.message);
//             } else {
//                 response.send(rows);
//             };
//         });
//     });

//     app.post(iconDatabase, (request, response) => {
//         console.log(request.body.peepIcon);
//         response.sendStatus(201);
//     });

//     app.delete(iconDatabase, (request, response) => {
//         const index = request.params.id;
//         console.log("Deleting peep.");
//     });

// };
//////////////GET/POST/DELETE for the user and their peeps///////////

