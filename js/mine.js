// Global Variable

var signUpNameInput = document.getElementById("signUpName");
var signUpEmailInput = document.getElementById("signUpEmail");
var signUpPasswordInput = document.getElementById("signUpPassword");
var signInEmailInput = document.getElementById("signInEmail");
var signInPasswordInput = document.getElementById("signInPassword");
var UserArray = [];

if (localStorage.getItem("usersInfo") != null) {
    UserArray = JSON.parse(localStorage.getItem("usersInfo"))

}

else {
    UserArray = [];

}
// Add Users
function addUser() {


    var regexEmail = /^[a-zA-Z]{1,}(@)[a-zA-Z]+\.[a-zA-z]{1,}$/

    users = {
        userName: signUpNameInput.value,
        userEmail: signUpEmailInput.value,
        userPassword: signUpPasswordInput.value
    }




    if (regexEmail.test(users.userEmail) == true) {
        UserArray.push(users);
        localStorage.setItem("usersInfo", JSON.stringify(UserArray));
        document.getElementById("alertdan").classList.add("d-none")

        clearInput();
        document.getElementById("alertsuc").classList.replace("d-none", "d-block")
    }

    else {
        document.getElementById("alertdan").classList.remove("d-none")
    }

}

// Clear SignUp Form
function clearInput() {
    signUpNameInput.value = null;
    signUpEmailInput.value = null;
    signUpPasswordInput.value = null;
}


// /Login 




function loginUser() {


    if (localStorage.getItem("usersInfo") != null) {
        UserArray = JSON.parse(localStorage.getItem("usersInfo"))
        for (var i = 0; i < UserArray.length; i++) {

            if (signInEmailInput.value == UserArray[i].userEmail && signInPasswordInput.value == UserArray[i].userPassword) {

           localStorage.setItem("user",UserArray[i].userName)
                window.open("home.html", "_self");
                // document.getElementById("welcomeMessage").innerHTML += ge;
              
              
            }


            else if (signInEmailInput.value == "" && signInPasswordInput.value == "") {
                Swal.fire({
                    title: "You Must Fill User Email And User Password",
                    text: "",
                    icon: "question"
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "User Name Or Password Not Match Please Sign Up",
                    footer: ''
                });
            }

        }
    }

    else {
        UserArray = [];
        Swal.fire({
            title: "We Dont have this Mail You Must Sign Up",
            text: "",
            icon: "question"
        });
    }


  

}

