//ADD : session storage, array methods, try password encryption, better UI, error handling using try catch.

let users = JSON.parse(sessionStorage.getItem("users")) || [];
let currentUserE = JSON.parse(sessionStorage.getItem("currentUser")) || null;


//Global Variables
const form  = document.getElementById('loginForm');


//Misellaneous Functions

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

function saveUsers(){
    sessionStorage.setItem("users", JSON.stringify(users));
}

function clearstorage() {
    if (confirm("Do You Want to Clear All User Data and Storage?")) {
        sessionStorage.clear();
        users = [];
        console.log(sessionStorage);
        sessionStorage.setItem("loggedIn", "false");
    } else return;
}

//Creating account

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
        const username = formData.get('username')?.trim();
        const email = formData.get('email')?.trim();
        const password = formData.get('password'); 

    const userExists = users.some(existingUser => 
            existingUser.username.toLowerCase() === username.toLowerCase() || 
            existingUser.email.toLowerCase() === email.toLowerCase()
        );
        if(!userExists) {
        const formdata = new FormData(form);

        const user = new User(
            formdata.get('username'),
            formdata.get('email'),  
            formdata.get('password')
        );
        users.push(user);
        saveUsers();
        console.log(users);
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        document.getElementById('authcheck').textContent = "Account created successfully!";
        window.location.reload();
    }else{
        alert("User Already Exists");
        return;
    }
});