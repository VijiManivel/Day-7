class person{
    constructor(firstName,lastName,age,profession,exp,city,contact)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.profession=profession;
        this.exp=exp;
        this.city=city;
        this.contact=contact;
    }
    printDetails(){
        return(`Name:${this.firstName} ${this.lastName}, Age:${this.age}, Profession: ${this.profession}, Experience: ${this.exp}, City: ${this.city}, Contact Number: ${this.contact}.`)

    }
}
let person1=new person("Julia","Donaldson","35","IT","7","Banglore","9596979890");
let person2= new person("Jojo","Moyes","42","Accounts","15","Delhi","9594939291");
let person3= new person("Emily", "Gravet","33","Finance","6","Mumbai","9392919495");

console.log("Person 1: " ,person1.printDetails());
console.log("Person 2: ",person2.printDetails());
console.log("Person 3: ",person3.printDetails());
