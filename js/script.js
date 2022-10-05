//objects with literal syntax
// const webClasses = {
//     webd1121: "Web Design with HTML5 and CSS3",
//     webd1123: "Interactive Web Design 1",
//     webd1125: "Advanced Web Design with CSS3",
//     webd1127: "Interactive Web Design 2- SVG and Canvas",
//     webd2121:"Responsive Web Design for Desktop and Mobile Devices",
//     webd2123:"Interactive User Interface Design",
//     webd2125:"Advanced Web Concepts",
//     webd2127:"App Design for Mobile Devices",
//     webd2129:"Web Design Portfolio",
//     addClasses: function() {
//         return this.webd1121 + " AND " + this.webd1123
//     }
// }
// console.log(webClasses.webd1121);
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
console.log(heading1);
// heading1.innerHTML = webClasses.webd1123;
// heading1.innerHTML = webClasses.addClasses();

//objects with constructor syntax
const webClasses = new Object();
webClasses.webd1121 = "Web Design with HTML5 and CSS3";
webClasses.webd1123 = "Interactive Web Design 1";
webClasses.addClasses = function() {
            return this.webd1121 + " AND " + this.webd1123
        }
heading1.innerHTML = webClasses.addClasses();
//literal array syntax
// let words = ["process", "solution", "tipping-point", "strategy", "vision"];
// console.log(words[0]);
// heading2.innerHTML = words[0];

// constructor array syntax
let words = new Array(
    "process", 
    "solution", 
    "tipping-point", 
    "strategy", 
    "vision"
);
 heading2.innerHTML = words[0];