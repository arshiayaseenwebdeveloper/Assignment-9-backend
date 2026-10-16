import totalMarks, { fullName } from "./studentTool.js";


const name = fullName("Sara", "Ahmed");
const total = totalMarks(80, 75, 90, 85);


console.log("Student Name:", name);
console.log("Total Marks:", total);