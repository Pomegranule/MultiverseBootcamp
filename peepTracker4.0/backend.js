'use strict';

const express = require("express");
const app = express();
const cors = require('cors');
const sqlite3 = require("sqlite3");

const port = 6969;

app.use(cors())

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => {

    if (err) {

        return console.error(err.message);

    } else {

        console.log("Successfully connected to database.");

    };

});

// app.get('/api/user/:uid', (req, res) => {
//     const uid = req.params.uid
//     // Get a user from the db using SQL
// })

// app.post('/api/user', (req, res) => {
//     const postData = req.body
//     // Insert a user to the db using SQL
//     db.run
// })

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



app.listen(port, () => {

    console.log(`Server listening in at http://localhost:${port}`);

});




///////////////////////Database Shizz/////////////////////////

// class userAccount {

//     static getAllUsers(userNameVar){

//         const sql = `SELECT * FROM userAccounts WHERE userName = '${userNameVar}'`;

//         return new Promise((response, reject) => {

//             db.all(selectSql, (err, rows) => {

//                 if (err) {

//                     console.log("Rejected");

//                     reject(new Error(err.message));

//                 } else {

//                     console.log("Responded.");

//                     response(rows);

//                 };

//             });

//         });

//     };


//     static userSignUp(){

//         const sql = `INSERT INTO userAccounts(userName, userPin) VALUES('${newUserName}', '${newUserPin}')`;

//         db.run(sql, (err) => {

//             if (err) {

//                 return console.error(err.message);

//             } else {

//                 console.log("New user created!");

//             };

//         });

//     };

// };



/////////////////Creating userAccount Table//////////////////////
// db.run("CREATE TABLE userAccount(ID INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT NOT NULL, userPin TEXT NOT NULL);");
/////////////////Creating userAccount Table//////////////////////


/////////////////Creating userPeeps Table//////////////////////
// db.run("CREATE TABLE userPeeps(ID INTEGER PRIMARY KEY AUTOINCREMENT, peepName TEXT NOT NULL, peepDeal TEXT NOT NULL, peepColour TEXT NOT NULL, peepFruit TEXT NOT NULL, peepDate TEXT NOT NULL, peepIcon TEXT NOT NULL, userID INTEGER NOT NULL);");
/////////////////Creating userPeeps Table//////////////////////


////////////Inserting hard coded user into userAccount Table/////////////
// const sql = "INSERT INTO userAccount(userName, userPin) VALUES('PomPomPurray','Pommy97')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Rows Created!");
//     }
// });
//////////////Inserting hard coded user into userAccount Table/////////////



//////////////Inserting new users into the userAccount Table/////////////
// class userAccount{
//     userSignUp() {
//         const userNameInput = document.getElementById("userNameInput").value;
    
//         const userPinInput = document.getElementById("userPinInput").value;
    
//         const sql = `INSERT INTO userAccount(userName, userPin) VALUES('${userNameInput}','${userPinInput}')`;
    
//         db.run(sql, (err) => {
//             if (err) {
//                 return console.error(err.message);
//             } else {
//                 console.log("User Created!");
//                 alert("Account created! Please login using your new credentials.");
//             };
//         });
//     };


//     userLogin(){

//     }
// };


//////////////Inserting new users into userAccount Table/////////////



//////////////Inserting newPeep into userPeeps Table/////////////
// const sql = "INSERT INTO userPeeps(peepName, peepDeal, peepColour, peepFruit, peepDate, peepIcon, userID) VALUES('Elles Bells','You dont understand how broken I am right now. I hate this project and I never want to do anything like this ever again, except that I want to do this for a living and Im in this perpetual cycle of turmoil.', 'Grey', 'Pomegranate', '26/05/22', 'Look me in the eyes and tell that this isnt an image.', 1)";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Peep Created!");
//     }
// });
//////////////Inserting newPeep into userPeeps Table/////////////



///////////////////////////////SELECT////////////////////////////////
// const selectSql = "SELECT * FROM userAccount";


// db.all(selectSql, (err, rows) => {
//     if (err) {
//         return console.error(err.message);
//     } else {

//         rows.forEach((row) => {
//             console.log(row);
//         });
//     };
// });
///////////////////////////////SELECT////////////////////////////////



//////////////////////////Deleting Data in Row/////////////////////////////
// const sql = "DELETE FROM users WHERE first_name=‘Samantha';"
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Deleted!");
//     }
// });
//////////////////////////Deleting Data in Row/////////////////////////////


//////////////////////////Dropping a Column/////////////////////////////
// const sql = "ALTER TABLE MENUS DROP COLUMN PRICE";
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Column deleted!");
//     }
// });
//////////////////////////Dropping a Column/////////////////////////////


////////////////////////Closing the Database/////////////////////////////
// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("DB Closed");
//     };
// });
//////////////////////////Closing the Database/////////////////////////////

// module.exports = userAccount;