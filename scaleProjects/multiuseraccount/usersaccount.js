let logstate;
let users = JSON.parse(localStorage.getItem("users")) || [];

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
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
// TOGGLE UI
function createaccounttoggle() {
    if (createdashboard.style.display == "none") {
        createdashboard.style.display = "block";
    } else createdashboard.style.display = "none";
}


// User Adding

function User(userinput, emailinput, passwordinput) {
    this.Name = userinput;
    this.Email = emailinput;
    this.Password = passwordinput;
}

function createaccount() {

    for(const user of users){
        if(user.Email === emailinput.value || user.Name === userinput.value){
            alert("Account Already Exists");
            return;
        }
    }    
    if (emailinput.value === "" || userinput.value === "" || passwordinput.value === "" || confpassword.value === "") {
            alert("Enter Complete Details");
            return;
        } else if (passwordinput.value != confpassword.value) {
            alert("Passwords do NOT match");
            return;
        }
    

        const newUser = new User(
            userinput.value,
            emailinput.value,
            passwordinput.value,
        )
        users.push(newUser);
        saveUsers();
        console.log(users);
}


// Authentication