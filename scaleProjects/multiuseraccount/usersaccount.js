let users = JSON.parse(localStorage.getItem("users")) || [];
let currentuser;
for(const user of users){
    if(user.Email === (localStorage.getItem("currentUserEmail"))){
        currentuser = user;
        break;
    }
}

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}
function clearstorage(){
    localStorage.clear();
    users = [];
    console.log(localStorage);
    localStorage.setItem("loggedIn", "false");
}
const account = document.getElementById('account');
const createaccbtn = document.getElementById('createaccbtn');
const createdashboard = document.getElementById('createdashboard');
const userinput = document.getElementById('userinput');
const emailinput = document.getElementById('emailinput');
const passwordinput = document.getElementById('passwordinput');
const confpassword = document.getElementById('confpassword');
const loginbtn = document.getElementById('loginbtn');
const logindashboard = document.getElementById('logindashboard');
const emailuserlogin = document.getElementById('emailuserlogin');
const passwordlogin = document.getElementById('passwordlogin');
const dashboard = document.getElementById('dashboard');
const showinfo = document.getElementById('showinfo');
const info = document.getElementById('info');
const logout = document.getElementById('logout');

// TOGGLE UI
function createaccounttoggle() {
    if (createdashboard.style.display == "none") {
        createdashboard.style.display = "block";
    } else createdashboard.style.display = "none";

    if (logindashboard.style.display == "block") {
        logindashboard.style.display = "none";
    }
}
function logintoggle() {
    if (logindashboard.style.display == "none") {
        logindashboard.style.display = "block";
    } else logindashboard.style.display = "none";

    if (createdashboard.style.display == "block") {
        createdashboard.style.display = "none";
    }
}


// User Adding

function User(userinput, emailinput, passwordinput) {
    this.Name = userinput;
    this.Email = emailinput;
    this.Password = passwordinput;
}

// Authentication
function createaccount() {

    if (emailinput.value === "" || userinput.value === "" || passwordinput.value === "" || confpassword.value === "") {
        alert("Enter Complete Details");
        return;
    } else if (passwordinput.value != confpassword.value) {
        alert("Passwords do NOT match");
        return;
    }
    for (const user of users) {
        if (user.Email === emailinput.value || user.Name === userinput.value) {
            alert("Account Already Exists");
            return;
        }
    }


    const newUser = new User(
        userinput.value,
        emailinput.value,
        passwordinput.value,
    )
    users.push(newUser);
    saveUsers();
    console.log(users);
    alert("Account has been succeccfully created!");
    localStorage.setItem("loggedIn", "true");
    for(const user of users){
        localStorage.setItem("currentUserEmail", user.Email);
    }
    window.location.reload();
}



function loginaccount() {

    if (!users) {
        return;
    }
    if (emailuserlogin.value == "" || passwordlogin.value == "") {
        alert("Please Provide the Required Information");
        return;
    }
    for (const user of users) {
        if ((user.Email === emailuserlogin.value || user.Name === emailuserlogin.value )&& user.Password === passwordlogin.value) {
            alert("Logged in Successful");
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("currentUserEmail", user.Email);
            window.location.reload();
        }
        
    }
}
function log_out(){
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("currentUserEmail");

    window.location.reload();
}
window.onload = function(){
    const state = localStorage.getItem("loggedIn");
    if(state === "true"){
        account.style.display = "none";
        dashboard.style.display = "block";
    
    }
}



showinfo.addEventListener('click', function(){
    
    if(!currentuser) {
        alert("no user available");
        return;
    }
    if(info.style.display == "none"){
        info.style.display = "block";
    }else info.style.display = "none";
    info.innerHTML = `<p><b>Name :</b>${currentuser.Name}
                      <p><b>Email :</b>${currentuser.Email}</p>`
                      

})

window.addEventListener('DOMContentLoaded', function(){
    console.log(users);
})