/*class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


function greeter(person: Student) {
    return "Hello, " + person.firstName + " " + person.middleInitial+" " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
*/
/*
abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
    //abstract generateReports():void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department:  Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = <AccountingDepartment>new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();

department.generateReports(); // error: method doesn't exist on declared abstract type
*/
/*
class Greeter {
    static greeting: string="ciao";
    constructor(greeting: string) {
        greeting = greeting;
    }
    
    greet() {
        return "Hello, " + Greeter.greeting;
    }
}

let greeter: Greeter;
console.log(Greeter.greeting);
greeter = new Greeter("world");

console.log(greeter.greet());
*/
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a")); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
