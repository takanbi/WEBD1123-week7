const webClasses = [
    {
        courseNumber: "WEBD1121",
        courseTitle: "Web Design with HTML5 and CSS3",
        courseDescription: "This hands-on, project-oriented course introduces the many new and exciting options now available with HTML5 and CSS3. The course covers designing and creating both single- and multiple-page websites with text, graphics, multimedia elements, and interactivity. Topics include the semantic use of HTML5 (Hypertext Markup Language version 5), formatting the appearance of websites with CSS3 (Cascading Style Sheets version 3), optimizing graphics, and applying multimedia elements to produce efficient, interactive websites. The course also introduces the standard practice of working with the Git version control systems and their integration with GitHub."
    },
    {
        courseNumber: "WEBD1123",
        courseTitle: "Interactive Web Design 1",
        courseDescription: "This hands-on, project-oriented course focuses on designing and building informative and functional, modern web pages, using industry-standard software and design tools, to meet client needs. Topics include employing the elements and principles of design; using and modifying components of Adobe Dreamweaver; integrating Adobe Animate with Dreamweaver, HTML5, and CSS3; and a cursory introduction to JavaScript and jQuery within the design environment."
    }
];

console.log(webClasses[1].courseDescription);
courseNumb = document.getElementById("courseNum");
courseTit = document.getElementById("courseT");
courseDesc = document.getElementById("courseDesc");

courseNumb.innerHTML = webClasses[1].courseNumber;
courseTit.innerHTML = webClasses[1].courseTitle;
courseDesc.innerHTML = webClasses[1].courseDescription;