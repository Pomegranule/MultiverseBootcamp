'use strict';

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("Database/database.db", sqlite3.OPEN_READWRITE, (err)=>{ // Creating a new database that we can read and write to.
    if(err){
        return console.error(err.message);
    } else{
        console.log("Success!!");
    }
});


///////////////////Creating userPeeps Table//////////////////////
// db.run("CREATE TABLE userPeeps(ID INTEGER PRIMARY KEY AUTOINCREMENT, peepName TEXT NOT NULL, peepDeal TEXT NOT NULL, peepColour TEXT NOT NULL, peepFruit TEXT NOT NULL, peepDate INTEGER REAL, peepIcon, userID INTEGER,FOREIGN KEY (userID) REFERENCES userAccount(ID));");
///////////////////Creating userAccount Table//////////////////////


//////////////Inserting userPeepData row into userPeeps Table/////////////
// const sql = "INSERT INTO userPeeps(peepName, peepDeal, peepColour, peepFruit, peepDate, peepIcon, userID) VALUES('Pomegranule','This crap better work or Im going sicko mode', 'Teal', 'Pomegranate', 24/05/22, 'Pretend This is an image lmao', 1)";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });
//////////////Inserting userName column into userAccount Table/////////////


///////////////////////////////SELECT////////////////////////////////
const selectSql = "SELECT * FROM userPeeps";


db.all(selectSql, (err, rows)=>{
    if(err){
        return console.error(err.message);
    }else{

        rows.forEach((row)=>{
            console.log(row);
        });
    };
});
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
db.close((err)=>{
    if(err){
        return console.error(err.message);
    }else{
        console.log("DB Closed");
    };
});
//////////////////////////Closing the Database/////////////////////////////