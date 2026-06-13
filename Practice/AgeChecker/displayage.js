const checkage = document.getElementById('checkage');
const ageshowbtn = document.getElementById('ageshowbtn');
const showage = document.getElementById('showage');
ageshowbtn.addEventListener('click', function () {
    showage.style.display = (showage.style.display === "none" || showage.style.display === "") ? "block" : "none"
})
checkage.addEventListener("click", function () {
    let age = document.getElementById("inputage").value;
    if (age <= 10) {
        alert("Toddler");
    } else if (age > 10 && age < 18) {
        alert("Teenager");
    } else if (age >= 18 && age <= 100) {
        alert("Adult");
    }else if(age > 100) alert("Enter a valid Age");
})