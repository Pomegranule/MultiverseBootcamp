const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err)=>{ // Creating a new database that we can read and write to.
    if(err){
        return console.error(err.message);
    } else{
        console.log("Success!!");
    }
});

// db.run("CREATE TABLE users(first_name, last_name, username, password, email, id)s");

// const sql = "INSERT INTO users VALUES('Sam', 'Test', 'STest', 'Test123', 'samantha.Test@multiverse.io', 2)";
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// const sql = "INSERT INTO users VALUES('Eleanor', 'Boop', 'Scadoop', 'Doopboop', 'eleanor.is.fashinonable@slaygorrrl.org', 3)";
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });


//////////////////////SELECT////////////////////////////////////////

const selectSql = "SELECT * FROM MENUITEMS";


db.all(selectSql, (err, rows)=>{
    if(err){
        return console.error(err.message);
    }else{

        rows.forEach((row)=>{
            console.log(row);
        });
    };
});

//////////////////////SELECT///////////////////////////////////////

// const sql = "UPDATE users SET first_name = 'Samantha' WHERE first_name = 'Sam';"
// db.run(sql,(err)=>{
//     if(err){
//         return console.error(err.message);
//     }else{
//         console.log("Row Updated!")
//     };
// });

// db.run("CREATE TABLE COMPANY(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER NOT NULL, ADDRESS, SALARY REAL);");

// const sql = "INSERT INTO COMPANY(NAME,AGE,ADDRESS,SALARY) VALUES('Jon', 29, 'New York', 35000.00)";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

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

// const sql = "DROP TABLE COMPANY";
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Table deleted!");
//     }
// });

// db.run("CREATE TABLE RESTAURANTS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, IMAGELINK);");

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Jazzgir','https://www.thefoodaholic.co.uk/wp-content/uploads/2017/08/DSC_0104.jpg')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Zaibatsu','https://www.visitgreenwich.org.uk/imageresizer/?image=%2Fdmsimgs%2FZaibatsu_Japanese_Fusion_606265686.jpg&action=ProductDetailProFullWidth')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Wagamama','https://www.peterboroughtoday.co.uk/webimg/T0FLMTI5NzU5MTMw.jpg?width=2048&enable=upscale')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// db.run("CREATE TABLE MENUITEMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, PRICE INTEGER);");

// const sql = "INSERT INTO MENUITEMS(NAME, PRICE) VALUES('Green Tea Ice Cream', 1.90 )";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

db.close((err)=>{
    if(err){
        return console.error(err.message);
    }else{
        console.log("DB Closed");
    };
});


