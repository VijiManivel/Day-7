class uber{
    constructor(firstName,lastName,pickUpLocation,dropLocation,pickupTime,dropTime,vehicleType,distance,rate,waitingCharg,contact)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.pickUpLocation=pickUpLocation;
        this.dropLocation= dropLocation;
        this.pickupTime=pickupTime;
        this.dropTime=dropTime;
        this.vehicleTupe=vehicleType;
        this.distance= distance;
        this.rate= rate;
        this.waitingCharg=waitingCharg;
        this.contact=contact;
    }
    calculatePrice(){
        let price = (this.rate * this.distance ) + (this.waitingCharg * 5);
        return price;
    }
    printDetails(){
        return(`Name:${this.firstName} ${this.lastName}, Pickup Location:${this.pickUpLocation}, Drop Location: ${this.dropLocation}, Travel Distance: ${this.distance}, Contact Number: ${this.contact}.`)

    }
}
let ride1=new uber("Juli","D","Urapakkam","Tambaram","10:45","11:20","Seadan","5","32","0","9596979890");
let ride2= new uber("Ashwin","M","Guduvanchery","Menambakkam","08:00","08:50","Mini","18","27","5","9594939291");
let ride3= new uber("Aravind", "G","Chrompet","Besant Nagar","02:00","03:30","Mini","27","25","10","9392919495");

console.log("Person 1: " ,ride1.printDetails(),"Total Charge: ",ride1.calculatePrice());
console.log("Person 2: ",ride2.printDetails(),"Total Charge : ",ride2.calculatePrice());
console.log("Person 3: ",ride3.printDetails(),"Total Charge : ",ride3.calculatePrice());