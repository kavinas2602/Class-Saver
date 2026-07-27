const signupForm=document.getElementById("signupForm");

signupForm.addEventListener("submit",function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim(); 

    const password = document.getElementById("password").value.trim();

    const confirmPassword = document.getElementById("confirm-password").value.trim();
    
    if(name === "" || email === "" || password === "" || confirmPassword === "" ){
            alert("Fill in all fields");

            return;
        }

    if(password !== confirmPassword){
        alert("Passwords do not match");

        return;
    }    

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(function(user){

        return user.email === email;


    });

if(existingUser){

    alert("An account with this email already exists");

    return;
}

const newUser ={

    name: name,

    email: email,

    password: password



};

users.push(newUser);

localStorage.setItem("users",JSON.stringify(users));

alert("Account created successfully");

window.location.href = "login.html";


}



)