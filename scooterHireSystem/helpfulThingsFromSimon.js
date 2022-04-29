const phones =  [
    {
        id: 1,
        model: "nokia",
        charge: 0.12,
    },
    {
        id: 2,
        model: "apple",
        charge: 0.78,
    },
    {
        id: 3,
        model: "nokia",
        charge: 0.42,
    },
];

const filteredPhones = phones.filter(p => p.model === "nokia");
console.log(filteredPhones);

// This is a charging model that was proposed by Simon, using phones.



// This is another charging models.
class ChargingDock {
    scooters = [];
    get availableScooters () {
        return this.scooters.filter(s=> s.charged === true);
    };
};

const scooter = {//This constant is now redundant. Ali has now added this into our current scooter class.
    charged: true,//although this and
    broken: false,// this are useful
    startCharging () {
        setTimeout(this.charged = true, 10000);//Keeps the scooter in the dock for 10 seconds.
    },
};

const user = {

    currentScooter: scooter,

    returnScooter(dock) {
        if (this.currentScooter) {
            dock.scooters.push(this.currentScooter); //Putting the scooter into the dock.
            this.currentScooter.startcharging(); // It starts charging.
            this.currentScooter = null //This needs to be last so that it only removes the scooter from the user once it has been charged.
        };
    },
};

const nanoid =  require("nanoid")

class Scooter {
    static allScooter = []

    static get scooterCount(){
        return Scooter.allScooters.length; // Storing scooters(?)
    };

    constructor(){
        this.id = nanoid.nanoid();
        this.allScooters.push(this); //Do this last.
    };

    startCharging(){
        setTimeout(this.charged = true, 10000);
    };
};




module.exports = Scooter;

const Scooter = require("./Scooter")

describe("A scooter should", () => {
    const scooter1 = new Scooter()
    const scooter2 = new Scooter()
    TextDecoderStream("not be charged after 9 seconds", () => {
        scooter1.charged = false
        scooter1.startCharging()
        setTimeout(expect(scooter1.charged)toBe(false), 9000)
    })
    test("be charged after 13 seconds", () => {
        scooter2.charged = false
        scooter2.startCharging()
        settimeout
    })
})