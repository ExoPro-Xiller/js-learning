const marksshowbtn = document.getElementById('marksshowbtn');
const marks = document.getElementById('marks');
const showmarks = document.getElementById('showmarks');

marksshowbtn.addEventListener('click', function () {

    marks.style.display =
        (marks.style.display === "none" || marks.style.display === "")
            ? "block"
            : "none";

});
showmarks.addEventListener('click', function () {

    let marks = document.getElementById('inputmarks').value;

    if (marks > 80) {
        alert("good");

    } else if (marks > 70 && marks < 80) {
        alert("i mean its alright like");

    } else if (marks >= 60 && marks < 70) {
        alert("you could try");

    } else if (marks <= 40) {
        alert("failed");
    }else if(marks > 100 ){
        alert("Enter Valid Marks");
    }

});
