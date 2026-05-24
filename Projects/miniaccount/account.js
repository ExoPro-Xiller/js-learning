// Creating an account system
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

let LoggedState = false;
function createaccount() {
    if (accountinputs.style.display == "block") {

        accountinputs.style.display = "none";

    } else accountinputs.style.display = "block";

}
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

let newUser;

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
    accountinputs.style.display = "none";
    LoggedState = true;
    ButtonLoggin.style.display = "none";

    if (LoggedState) {
        dashboard.style.display = "block";
    }
}
function login(){
    if(newUser){
        
    }
}

function showinfo() {
    if (!newUser) {
        alert("No user created yet!");
        return;
    }

    info.innerHTML = `
        <p>Name: ${newUser.name}</p>
        <p>Email: ${newUser.email}</p>
    `;
}

ButtonLogout.addEventListener('click', function () {
    if (confirm("Are Your Sure You Want To Log Out?")) {
        LoggedState = false;
    } else return;
    window.location.reload();
}
)
