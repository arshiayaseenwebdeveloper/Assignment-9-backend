
const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];

const profile = {
    name: "Arshia",
    className: "Web Development",
    city: "Karachi"
};

const combine = [...groupA , ...groupB]

const copyA = [...groupA];
copyA.push("Usman");

const update = {...profile , city : "lahore"}

const email = {...profile,
    email: "arshiayaseen751@gmail.com"
}

console.log("Combined List:", combine);

console.log("Original Group A:", groupA);
console.log("Copied Group A:", copyA);

console.log("Original Profile:", profile);
console.log("Updated Profile:", update);

console.log("Profile with Email:", email);













