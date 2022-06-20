'use strict';

const userDatabase = require('./Database/userDatabase');

//////////////////////////////// Express Server////////////////////////////

const express = require('express')

const app = express();

const port = 6969;
//////////////////////////////// Express Server////////////////////////////


////////////////////// Connecting Server to Database///////////////////////
const sqlite3 = require('sqlite3');
const { GetAllUsers } = require('./Database/userDatabase');


const db = new sqlite3.Database("./Database/database.db", sqlite3.OPEN_READWRITE, (err) => { // Creating a new database that we can read and write to.

    if (err) {

        return console.error(err.message);

    } else {

        console.log("Successfully connected to database.");

    }

});



app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



app.listen(port, () => {

    console.log(`Server listening at http://localhost:${port}`);

});



////////////////////// Connecting Server to Database///////////////////////

// app.get("/users", async (request, response) => {

//     let result = await userDatabase.GetAllUsers()

//     response.send(result);

// });

//If userName and userPin with the same ID match, then send response; 



app.get("/users", async (request, response) => {

    let retrieveUsers = await GetAllUsers()

    .then(response => JSON.stringify(response))

    .then(data => { return JSON.parse(data) });

    console.log(await GetAllUsers());

    response.send(await GetAllUsers());

});




app.post("/checkUser", async (request, response) => {
    
    let userName = request.body.userName;
    
    let userPin = request.body.userPin;

    

    const selectSql = `SELECT * from userAccount WHERE userName = '${userName}'`;
    
    db.all(selectSql, (err, rows) => {
    
        if (err) {
    
            console.error(err)
    
        } else if (rows.length === 0) {//IF there's no rows (noone with that username) then it will return GeorgeNotFound.
        
            response.sendStatus(404)//NotFound
        
        } else {
        
            let dbPin = rows[0].userPin
        
            console.log(dbPin);
        
            if (dbPin === userPin) {
        
                response.sendStatus(302)//Found
        
            } else {
        
                response.sendStatus(401)//Unauthorized
        
            };
        
        };
    
    });

});

// function foobar() {
//     const selectSql = `SELECT * from users`;
//     return new Promise((res, rej) => {
//         db.all(selectSql, (err, rows) => {
//             if (err) {
//                 console.log('Hit rej')
//                 rej(new Error(err.message));
//             } else {
//                 console.log('Hit res')
//                 res(rows);
//             };
//         });
//     });
// };

