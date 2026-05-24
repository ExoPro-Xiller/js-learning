// Creating an account system
const createaccountbtn = document.getElementById('createaccountbtn');
const accountinputs = document.getElementById('AccountInputs');
const name = document.getElementById('Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const userinfo = document.getElementById('userinfo');
const ButtonLoggin = document.getElementById('ButtonLoggin');
const ButtonLogout = document.getElementById('ButtonLogout');

let LoggedState = false;
function createaccount(){
    if(accountinputs.style.display == "block"){

        accountinputs.style.display = "none";

    }else accountinputs.style.display = "block";

}

function User(name, email, password){
    this.name =  name;
    this.email = email;
    this.password = password;
}
let newUser = new User(name.value, email.value, password.value)

function createUserAccount() {
    if( (name.value == "" && email.value == "") || (password.value == "" && confirmpassword.value == "") ) {
        alert("Please Provide the Required Information")
    }
    else if(password.value !== confirmpassword.value) {
        alert("Passwords do not match!");
        return;
    }

    let newUser = new User(
        name.value,
        email.value,
        password.value
    );

    console.log(newUser);
    alert("Account Has Been Successfully created")
    accountinputs.style.display = "none";
    LoggedState = true;
    ButtonLoggin.style.display = "none";
}
if(LoggedState == true){
    

}
