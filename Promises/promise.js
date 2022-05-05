'use strict';

// function fiftyFifty() {
//     return Math.round(Math.random());
//   }

// function sayHello() {
//   return new Promise(function (resolve, reject) 
//                     {
//                       setTimeout(function () 
//                       {
//                         if (fiftyFifty()) //Function returns 1 or 0
//                         {
//                           resolve("Amazing!");
//                         } else {
//                           reject("We messed up somewhere...");
//       }
//     }, 5000);
//   });
// }
// sayHello()
//   .then(function (success) {
//     console.log(success);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

function party(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (fiftyFifty()){
                resolve("Whoop, whoop, it's the sound of the alarm!");
            } else {
                reject("Mission failed. We'll get 'em next time.");
            }
        }, 5000);
    });
};

party()
.then(function(success){
    console.log("Success");
})
.catch(function(error){
    console.error(error);
})
.finally(()=> {
    console.log("Done");
});