// Creating an account system
let LoggedState;
let newUser;
newUser = JSON.parse(localStorage.getItem("user"));

const createaccountbtn = document.getElementById('createaccountbtn');
const accountinputs = document.getElementById('AccountInputs');
const name = document.getElementById('Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

const ButtonLoggin = document.getElementById('ButtonLoggin');
const logininputs = document.getElementById('logininputs');
const inputuseremail = document.getElementById('inputuseremail');
const inputpassword = document.getElementById('inputpassword');
const loginbtn = document.getElementById('loginbtn');
const login = document.getElementById('login');

const userinfo = document.getElementById('userinfo');
const dashboard = document.getElementById('dashboard');
const ButtonLogout = document.getElementById('ButtonLogout');
const info = document.getElementById('info');
const delaccount = document.getElementById('delaccount');

const gotocoin = document.getElementById('gotocoin');
const options = document.getElementById('options');
const add5 = document.getElementById('add5');
const add10 = document.getElementById('add10');
const add100 = document.getElementById('add100');
const sub5 = document.getElementById('sub5');
const sub10 = document.getElementById('sub10');
const sub100 = document.getElementById('sub100');
// FUNCTION FOR LATER USE
window.addEventListener('DOMContentLoaded', function(){
    const Logged = localStorage.getItem("loggedIn");
    if(Logged == "true"){
        ButtonLoggin.style.display = "none";
        dashboard.style.display = "block";

    }else console.log("No Logged User found");
})
function saveUser() {
    localStorage.setItem("user", JSON.stringify(newUser));
}

// Account System
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.coins = 0;
}
function createaccount() {
    if (accountinputs.style.display == "block") {

        accountinputs.style.display = "none";

    } else accountinputs.style.display = "block";
    if (logininputs.style.display == "block") {
        logininputs.style.display = "none";
    }
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
    localStorage.setItem("loggedIn", "true");
    LoggedState = true;
    ButtonLoggin.style.display = "none";
    accountinputs.style.display = "none";

    if (LoggedState) {
        dashboard.style.display = "block";
    }

    saveUser();
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
    if ((emailinput === newUser.email || emailinput === newUser.name) && (passwordinput === newUser.password)) {
        LoggedState = true;
        localStorage.setItem("loggedIn", "true");
        LoggedState = localStorage.getItem("loggedIn");
        alert("Logged in Success");
        dashboard.style.display = "block";
        ButtonLoggin.style.display = "none";
        logininputs.style.display = "none";

    } else alert("Email or Password Incorrect");
}


// DashBoard

function showinfo() {
    if (info.style.display == "block") {
        info.style.display = "none"
    } else info.style.display = "block";

    if (!newUser) {
        alert("No user created yet!");
        return;
    }

    info.innerHTML = `
        <p><b>Name:</b> ${newUser.name}</p>
        <p><b>Email:</b> ${newUser.email}</p>
        <p>Coin Balance: ${newUser.coins}</p>
    `;

}

ButtonLogout.addEventListener('click', function () {
    if (confirm("Are Your Sure You Want To Log Out?")) {
        LoggedState = false;
        localStorage.removeItem("loggedIn");
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
// COIN SYSTEM:

gotocoin.addEventListener('click', function () {

    if (confirm("Do you want to Earn COINS")) {
        options.style.display = "block";
    } else {
        options.style.display = "none";
        return;
    }
})

add5.addEventListener('click', function () {
    if (newUser.coins == 400 || newUser.coins + 5 > 400) {
        alert("Coin Limit reached, Cannot add more balance");
        console.log(`Limit Reached, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins += 5;
        saveUser();
        console.log(`Added 5 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})
add10.addEventListener('click', function () {
    if (newUser.coins == 400 || newUser.coins + 10 > 400) {
        alert("Coin Aquirement limit Reached!");
        console.log(`Limit Reached, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins += 10;
        saveUser();
        console.log(`Added 10 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})
add100.addEventListener('click', function () {
    if (newUser.coins == 400 || newUser.coins + 100 > 400) {
        alert("Coin Aquirement limit Reached!");
        console.log(`Limit Reached, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins += 100;
        saveUser();
        console.log(`Added 100 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})

sub5.addEventListener('click', function () {
    if (newUser.coins < 5) {
        alert("Not Enough Coins to Spend!");
        console.log(`Not Enough Coins to Spend, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins -= 5;
        saveUser();
        console.log(`Subtracted 5 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})
sub10.addEventListener('click', function () {
    if (newUser.coins < 10) {
        alert("Not Enough Coins to Spend!");
        console.log(`Not Enough Coins to Spend, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins -= 10;
        saveUser();
        console.log(`Subtracted 10 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})
sub100.addEventListener('click', function () {
    if (newUser.coins < 100) {
        alert("Not Enough Coins to Spend!");
        console.log(`Not Enough Coins to Spend, Current Balance: ${newUser.coins}`);
        return;
    } else {
        newUser.coins -= 100;
        saveUser();
        console.log(`Subtracted 100 coins to the balance, Current Balance: ${newUser.coins}`);
        return;
    }
})
