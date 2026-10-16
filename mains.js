import courses from "./course.js";
import { courseSummary } from "./courseTools.js";


const { courseName, fee } = courses[0];

console.log("Course Name:", courseName);
console.log("Course Fee:", fee);


const newCourse = {
    courseName: "React",
    instructor: "Ms. Ayesha",
    duration: "2 months",
    fee: 20000
};

const updatedCourses = [...courses, newCourse];


const revisedCourses = courses.map(course =>
    course.courseName === "Web Development"
        ? { ...course, fee: 20000 }
        : course
);


console.log("Original Courses:", courses);
console.log("Courses with New Course:", updatedCourses);
console.log("Courses with Revised Fee:", revisedCourses);


console.log("Course Summaries:");

updatedCourses.forEach(course => {
    console.log(courseSummary(course));
});