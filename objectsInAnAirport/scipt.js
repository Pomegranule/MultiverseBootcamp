class Bag {
    constructor(weight) {
        if (!weight) {
            throw new Error("Bag must have a weigh");
        }
        this.weight = weight
    }
}

try {
    const bag = new Bag(16);
} catch {
    alert("Error")
}


class Passenger{
    bags = [];
    constructor(name, passportNumber, seatNumber){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    }
    addbag(Bag){

    }
}

const austin = new Passenger
const eleanorGreen
const eleanorGreen
eleanor