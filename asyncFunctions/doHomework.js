'use strict';

// subject = {
//     "Maths": this.maths,
//     "English": this.english,
//     "Science": this.science,
//     "Callback": this.callBack,
// };
// function finishedHomework(subject){
//     console.log(`I've finished my ${subject} homework.`);
// };

// function doHomework(finishedHomework){

//     setTimeout(()=>{finishedHomework("Maths")}, 2000);
//     setTimeout(()=>{finishedHomework("English")}, 5000);
//     setTimeout(()=>{finishedHomework("Science")}, 4000);
//     setTimeout(()=>{finishedHomework("Callback")}, 10000);
// };



// doHomework((subject)=>{console.log(`I've finished my ${subject} homework.`)});//In this example, the parameter that is being passed through the "doHomework" function (whilst we are calling it), is an arrow function with it's own parameter of "subject". Within this arrow function, we are console logging the string "I've finished my ${subject} homework.". For some reason, the parameter "subject" ends up representing the strings within the "finishedHomework" functions. Legends say that Eleanor STILL hasn't figured out why "subject" ends up with those string values.




// function SayHello(cb){
//     setTimeout(()=>{cb("World!");}, 3000);
// };

// SayHello((name)=>{console.log(`Hello ${name}`);});

function doHomework(finishedHomework){

    setTimeout(()=>{finishedHomework("I've started my Maths Homework.")}, 1000);
    setTimeout(()=>{finishedHomework("I've finished my Maths homework.")}, 2000);
    setTimeout(()=>{finishedHomework("I've started my Science homework.")}, 3000);
    setTimeout(()=>{finishedHomework("I've finished my Science homework.")}, 4000);
    setTimeout(()=>{finishedHomework("I've finished my English homework.")}, 5000);
    setTimeout(()=>{finishedHomework("I've started my Callback homework.")}, 6000);
    setTimeout(()=>{finishedHomework("3")}, 7000);
    setTimeout(()=>{finishedHomework("2")}, 8000);
    setTimeout(()=>{finishedHomework("1")}, 9000);
    setTimeout(()=>{finishedHomework("I've finished my Callback homework.")}, 10000);
};



doHomework((subject)=>{console.log(`${subject}`)});