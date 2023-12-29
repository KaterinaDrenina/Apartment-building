class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        if (person instanceof Person) {
            this.residents.push(person);
        } else {
            console.log("Only intances of Person can be added as residents");
        }
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if(this.apartments.length < this.maxApartments) {
            if(apartment instanceof Apartment) {
                this.apartments.push(apartment);
            } else {
                console.log("Only instances of Apartment can be added");
            }
        } else {
            console.log("Maximum number of apartments reached");
        }
    }
}

let person1 = new Person("Mike", "Male");
let person2 = new Person("Kate", "Female");
console.log(`Created persons: ${person1.name} and ${person2.name}`);

let apartment1 = new Apartment();
apartment1.addResident(person1);
apartment1.addResident(person2);

let house = new House(3);
house.addApartment(apartment1);
console.log(`Created a house with a maximum of ${house.maxApartments} apartments`);

let apartment2 = new Apartment();
house.addApartment(apartment2);
console.log("Added a new empty apartment to the house");

console.log(`House has ${house.apartments.length} apartments`);
console.log(`First apartment has ${apartment1.residents.length} residents`);