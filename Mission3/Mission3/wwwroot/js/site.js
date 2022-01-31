// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//document.getElementById("calcButton").addEventListener("click", function () {
//    Assignments = document.getElementById("numAssignments").value 
//    groupProject = document.getElementById("numGroupProject").value 
//    Quizzes = document.getElementById("numQuizzes").value 
//    Exams = document.getElementById("numExams").value 
//    Intex = document.getElementById("numIntex").value)
//    totalGrade = Assignments + groupProject + Quizzes + Exams + Intex  
//})



//document.getElementById("calcButton").addEventListener("click", function () {
//    alert("Assignments: " + document.getElementById("numAssignments").value +
//        ", Group Projects: " + document.getElementById("numGroupProject").value +
//        ", Quizzes: " + document.getElementById("numQuizzes").value +
//        ", Exams: " + document.getElementById("numExams").value +
//        ", INTEX: " + document.getElementById("numIntex").value);

//})

$("#calcButton").click(function () {
    alert("Assignments: " + $("#numAssignments").val() +
        ", Group Projects: " + $("#numGroupProject").val() +
        ", Quizzes: " + $("#numQuizzes").val() +
        ", Exams: " + $("#numExams").val() +
        ", INTEX: " + $("#numIntex").val() +
        ", Total Grade: ");
        
})


