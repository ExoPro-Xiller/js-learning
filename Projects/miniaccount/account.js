// Creating an account system
let LoggedState = false;
let newUser;
newUser = JSON.parse(localStorage.getItem("user"));
const createaccountbtn = document.getElementById('createaccountbtn');
const accountinputs = document.getElementById('AccountInputs');
const name = document.getElementById('Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const userinfo = document.getElementById('userinfo');
const dashboard = document.getElementById('dashboard');
const ButtonLoggin = document.getElementById('ButtonLoggin');
const ButtonLogout = document.getElementById('ButtonLogout');
const info = document.getElementById('info');
const logininputs = document.getElementById('logininputs');
const inputuseremail = document.getElementById('inputuseremail');
const inputpassword = document.getElementById('inputpassword');
const loginbtn = document.getElementById('loginbtn');
const login = document.getElementById('login');
const delaccount = document.getElementById('delaccount');



function createaccount() {
    if (accountinputs.style.display == "block") {

        accountinputs.style.display = "none";

    } else accountinputs.style.display = "block";
    if (logininputs.style.display == "block") {
        logininputs.style.display = "none";
    }
}
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}


function createUserAccount() {

    if (name.value == "" || email.value == "" || password.value == "" || confirmpassword.value == "") {
        alert("Please Provide the Required Information")
    }
    else if (password.value !== confirmpassword.value) {
        alert("Passwords do not match!");
        return;
    }

    newUser = new User(
        name.value,
        email.value,
        password.value
    );

    console.log(newUser);
    alert("Account Has Been Successfully created")
    LoggedState = true;
    ButtonLoggin.style.display = "none";
    accountinputs.style.display = "none";

    if (LoggedState) {
        dashboard.style.display = "block";
    }

    localStorage.setItem("user", JSON.stringify(newUser));
}

function togglelogin() {
    if (logininputs.style.display === "block") {
        logininputs.style.display = "none";
    }
    else {
        logininputs.style.display = "block";
    }

    if (accountinputs.style.display == "block") {
        accountinputs.style.display = "none"
    }
}

function handlelogin() {
    if (!newUser) {
        alert("No User Found");
        return;
    }
    let emailinput = inputuseremail.value;
    let passwordinput = inputpassword.value;
    if ((emailinput === newUser.email) && (passwordinput === newUser.password)) {
        LoggedState = true;
        alert("Logged in Success");
        dashboard.style.display = "block";
        ButtonLoggin.style.display = "none";
        logininputs.style.display = "none";

    } else alert("Email or Password Incorrect");
    LoggedState = localStorage.getItem("loggedIn") === "true";
}


function showinfo() {
    if (!newUser) {
        alert("No user created yet!");
        return;
    }

    info.innerHTML = `
        <p><b>Name:</b> ${newUser.name}</p>
        <p><b>Email:</b> ${newUser.email}</p>
    `;

}

ButtonLogout.addEventListener('click', function () {
    if (confirm("Are Your Sure You Want To Log Out?")) {
        LoggedState = false;
    } else return;
    window.location.reload();
}
)

delaccount.addEventListener('click', function () {
    let conf = confirm("Are You Sure You Want To Delete Your Account?");
    if (conf == true) {
        localStorage.clear();
        window.location.reload();
    } else {
        return;
    }
})