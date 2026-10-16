
const student = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};


let {name , age , department: program }= student

let {city , country} = student.address

let {phone = "Not Provided"} = student

console.log("Student Name:", name);
console.log("Program:", program);
console.log("City:", city);
console.log("Phone:", phone);





