"use strict";
const nanoid = require("nanoid");

const app = {
    loggedInUsers: [],
    
}

class User{
    constructor(age){
        this.userID=nanoid.nanoid();
        this.age=age;
    };
    logIn(){
        if (this.age>=18){
            app.loggedInUsers.push(this);
        }else{
                  
            throw new Error("You have failed the vibe check. :c");
        }
    };

    getUserAge(){
        return this.age;
    };
};


class Customer extends User{
    scooters=[];
    currentScooter = null; //This preset of "null" will be changed to a scooter object once the customer has been assigned a scooter.
   
    constructor(age, bankBalance){
        //We don't need access to the ID parameter as it is already defined in the User class. And we have extended this via "super".
        super(age);
        if(!bankBalance){// if statements must be declared within the constructor
            console.log("no money")
        } 
       
       this.bankBalance=bankBalance;


    };
    
    getBankBalance()
    {
        return this.bankBalance;
    }

    rentScooter(dock){
        if(dock.availableScooters.length>0){
            
            this.currentScooter = dock.availableScooters.pop(); // this.currentScooter is referring to the instance of this customer's scooter.
            this.currentScooter.charged = false;
            this.bankBalance = this.bankBalance-1
            console.log(`Harry got his pockets rinsed. Foo only got ${this.bankBalance} in his bank account `)
        }else{
        
        throw new Error("We caught you lacking, lmao."); 
    }
            
    };

    returnScooter(dock, broken) {
        if (this.currentScooter) {
            dock.scooters.push(this.currentScooter); //Putting the scooter into the dock.
            this.currentScooter.startCharging(); // It starts charging. ALERT:: We need to add the charging function.
            this.currentScooter.broken = broken;//sets broken value for this customer's instance of scooter
            this.currentScooter = null //This needs to be last so that it only removes the scooter from the user once it has been docked.
            
        };
    };
      
  

};



class MaintWorker extends User{
    
    constructor(age){
        super(age)
      

    }
   // if (//go to scooters array and see which are broken) {
       //call the fix function.
    
    //}

    
    fix(scooter){
           
        scooter.broken = false
        console.log("The scooter's HP has been restored");
          //  console.log(`there are ${scootersNum} scooters`);
            
        

    };

    getBrokenScooter(){

        return this.scooter.broken
    }

};



class Scooter {
    //add charging function
    maxRange = 32;
    charged = true;
    broken = false;
    constructor(){
        
        this.scooterID = nanoid.nanoid();
    };

    startCharging(){
        this.charged = true;
    };

    getChargedScooter(){
        return this.scooter.charged;
    };
    
};
    

class ChargingDock{
    scooters=[]
    get availableScooters () {
        return this.scooters.filter(s=> s.charged === true && s.broken === false);
        
    };
    addScooter(scooter){
        this.scooters.push(scooter)
    }
        

    
};

const londonDock = new ChargingDock()
const harry = new Customer(18,1)
const scooter1 = new Scooter()
const scooter2 = new Scooter()
const scooter3 = new Scooter()
const bob = new MaintWorker()


//Start of London Dock's Scooters.
londonDock.addScooter(scooter1)
londonDock.addScooter(scooter2)
londonDock.addScooter(scooter3)
//End of London Dock's Scooters.
try{
harry.logIn();
}
catch{
    console.log("Oops");
}
harry.rentScooter(londonDock)
harry.returnScooter(londonDock, true)
bob.fix(scooter3)

// console.log(bob.userID)
// console.log(harry.userID)

//This is the error that we left off on.
//Tested for type and referrence errors. We've made instances of customers and one maintanence worker.
//TODO: We need to make sure that the bank balance object has a function.

module.exports={User,Customer,MaintWorker,Scooter,ChargingDock,app}//exports all classes to test file 