'use strict';

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("Database/database.db", sqlite3.OPEN_READWRITE, (err) => { // Creating a new database that we can read and write to.

    if (err) {

        return console.error(err.message);

    } else {

        console.log("Success!!");

    }

});




// class userDatabase {
    
//     static GetAllUsers() {
    
//         const selectSql = `SELECT * from userAccount`;
    
//         return new Promise((response, reject) => {
    
//             db.all(selectSql, (err, rows) => {
    
//                 if (err) {
    
//                     console.log('Hit reject')
    
//                     reject(new Error(err.message));
    
//                 } else {
    
//                     console.log('Hit response')
    
//                     response(rows);
    
//                 };
    
//             });
    
//         });
    
//     };


//     static userSignUp(){
        


//         const sql = `INSERT INTO userAccount(userName, userPin) VALUES('${newUserName}','${newUserPin}')`;

//         db.run(sql, (err) => {
        
//             if (err) {
        
//                 return console.error(err.message);
        
//             } else {
        
//                 console.log("New user created!");
        
//             };
        
//         });
    
//     };

// };



///////////////////Creating userAccount Table//////////////////////
// db.run("CREATE TABLE userAccount(ID INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT NOT NULL, userPin TEXT NOT NULL);");

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Table Created!");
//     }
// });
///////////////////Creating userAccount Table//////////////////////


//////////////Inserting userName column into userAccount Table/////////////
// const sql = "INSERT INTO userAccount(userName, userPin) VALUES('sammieTheLambie','gorl22')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Rows Created!");
//     }
// });
//////////////Inserting userName column into userAccount Table/////////////


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


//////////////////////////Closing the Database/////////////////////////////
// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("DB Closed");
//     };
// });
//////////////////////////Closing the Database/////////////////////////////

// module.exports = userDatabase;