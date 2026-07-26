const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit",function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email == "" || password == ""){
        alert("Fill in all fields");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) ||[];

    const user = users.find(function(u){
        return u.email === email && u.password === password;
    });

    if(user){
        alert("Login Successful");

        localStorage.setItem("currentUser",JSON.stringify(user));

        window.location.href = "index.html";
    }
    else{
        alert("Invalid email or password");
    }
    




});
