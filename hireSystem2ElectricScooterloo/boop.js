'use strict';

class User{
   constructor(age){// "age" is defined when a new user is created using this constructor class.
       this.age = age;
       this.userID = Math.random().toString(36).slice(2);
   };

   userSubmit = document.getElementById("userSubmit");

   userLogIn(){
       const userInput = document.getElementById("userIDInput").value;

       if (userInput === this.userID){
           console.log(`Welcome back, ${customer.userName}!`);
       }else if(userInput === staff.userID){
           console.log(`Welcome back, ${staff.userName}!`);
       }else {
           console.log(`${userInput} is not a valid user ID.`);
       };
   };

//    noobieUserLogIn(){
//         console.log("Welcome to Hire System 2: The Electric Scooterloo!");
//         let u = prompt("Please input your userID:").value;
        
//         if (idInput === )
//    };

//    ogUserLogIn(){

//    };
} 

const eleanor = new User(24)
eleanor.userLogIn();