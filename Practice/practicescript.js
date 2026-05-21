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

// Login Page
const loginbtn = document.getElementById('loginbtn');
const login = document.getElementById('login');
const inputusername = document.getElementById("inputusername");
const checkusername = document.getElementById("checkusername");


loginbtn.addEventListener('click', function () {

    if (login.style.display === "block") {
        login.style.display = "none";
    }
    else {
        login.style.display = "block";
    }

});

checkusername.addEventListener('click', function () {

    let username = document.getElementById("inputusername").value;
    let existingPassword = document.getElementById("inputpassword");

    if (username === "Ahmad" && !existingPassword) {
        document.getElementById('inputusername').style.display = "none";
        document.getElementById('checkusername').style.display = "none";
        document.getElementById('enterusername').style.display = "none";


        let passmsg = document.createElement("p");
        let checkpassword = document.createElement("button");
        let inputpassword = document.createElement('input');

        passmsg.innerText = "Enter Password"
        passmsg.style.fontSize = "24px";
        passmsg.id = "passmsg";

        inputpassword.id = "inputpassword";
        inputpassword.type = "password";
        inputpassword.style.padding = "5px";
        inputpassword.style.margin = "5px";
        inputpassword.style.borderRadius = "1px";

        checkpassword.innerText = "Check Password"
        checkpassword.style.padding = "5px";
        checkpassword.style.margin = "5px";
        checkpassword.style.borderRadius = "1px"

        document.getElementById("login").appendChild(passmsg);

        document.getElementById('login').appendChild(inputpassword);

        document.getElementById('login').appendChild(checkpassword);

        checkpassword.addEventListener('click', function () {
            let password = document.getElementById('inputpassword').value;
            if (password == "138336") {
                document.getElementById("status").innerText = "Login Successful, Refreshing in 3 Seconds";
                setTimeout(function () { window.location.reload() }, 3000)
            }


        })
    }
})


// function login() {
//     let username = prompt("Enter Your Username",);
//     if (username == "Admin") {
//         let checkpassword = prompt("Enter Your Password",);
//         if (checkpassword == "Master") {
//             alert("Logged In, Welcome.");
//             return console.log("Logged In, Welcome.");

//         }
//         else if (checkpassword == "" || checkpassword != "Master") {
//             alert("Wrong Password");
//         }
//     }
//     else if (username == "" || username === null) {
//         alert("Cancelled");
//     }
//     else if (username != "Admin") {
//         alert("No user found");
//     }
// }

let salary = {
    "Ali": 390,
    "Ahmad": 400,
    "Khalid": 500,
}
// console.log(salary.Ali + salary.Ahmad + salary.Khalid);
// console.log(salary.Ali * salary.Ahmad * salary.Khalid);
let game = {
    name: "Subnautica",
    release: "14th of May, 2026",
    sold: "2 millon copies in 12 hours",
    good: "hell yea",
}
