let users = JSON.parse(sessionStorage.getItem("users")) || []; 
let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) || null; 

// Global Variables 
const form = document.getElementById('createAccountForm'); 
const createacbtn = document.getElementById('createaccbtn'); 
const userinfo = document.getElementById('userInfo'); // Fixed ID casing from 'userInfo'
const h1 = document.querySelector('h1'); 
const loginForm = document.getElementById('loginForm'); 
const loginButton = document.getElementById('loginbtn'); 
const login = document.getElementById("login");
const loginpas = document.getElementById("loginPassword")
const loginemail = document.getElementById("loginEmail")
// Initialize default view state on load
function initFormView() {
    // Hide login form by default, show create account
    loginForm.style.display = "none";
    form.style.display = "block";
} 
initFormView();

// Miscellaneous Functions 
loginButton.addEventListener('click', function() { 
    if (loginForm.style.display === "none") { 
        loginForm.style.display = "block"; 
        form.style.display = "none"; 
    } else { 
        loginForm.style.display = "none"; 
    } 
});

createacbtn.addEventListener("click", function(){ 
    if (form.style.display === "none") { 
        form.style.display = "block"; 
        loginForm.style.display = "none"; 
    } else {
        form.style.display = "none"; 
    }
});

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
        sessionStorage.setItem("loggedIn", "false"); 
        window.location.reload(); 
    } 
} 

// Creating account 
form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    const formData = new FormData(form); 
    const username = formData.get('username')?.trim(); 
    const email = formData.get('email')?.trim(); 
    const password = formData.get('password'); 
    
    const userExists = users.some(existingUser => existingUser.email.toLowerCase() === email.toLowerCase()); 
    
    if(!userExists) { 
        const user = new User(username, email, password); 
        users.push(user); 
        saveUsers(); 
        
        sessionStorage.setItem("loggedIn", "true"); 
        sessionStorage.setItem("currentUser", JSON.stringify(user)); 
        document.getElementById('authcheck').textContent = "Account created successfully!"; 
        window.location.reload(); 
    } else { 
        alert("User Already Exists"); 
    } 
}); 

loginForm.addEventListener('submit', function(){
    const logindata = new FormData(loginForm)
    const email = logindata.get("loginEmail");
    const pass =  logindata.get("loginPassword")
    if(users.length === 0){
        alert("NO user");
        return;
    }
    const user = users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === pass)
    if(user){
        alert("Logged In");
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        sessionStorage.setItem("loggedIn", "true");
        window.location.reload();

    }else {
        alert("Invalid Credentials");
        return;
    }
})

// Handling Logged In UI State
window.addEventListener('load', function() { 
    if(sessionStorage.getItem("loggedIn") === "true") { 

        loginForm.style.display = "none"; 
        form.style.display = "none"; 
        createacbtn.style.display = "none"; 
        loginButton.style.display = "none"; 
        
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser")); 
        if (currentUser && userinfo) {
            userinfo.innerHTML = `<p>Name: ${currentUser.username}</p> <p>Email: ${currentUser.email}</p>`; 
        }
        h1.textContent = "Dashboard"; 
    } 
});


function logout(){
    if(confirm("Do you want to log out?")){
        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("loggedIn", "false");
        window.location.reload();
    }
}
