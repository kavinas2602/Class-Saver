const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
    window.location.href="login.html";
}

const addHomeworkBtn=document.getElementById("addHomeworkBtn");

if(currentUser.role== "student"){
    addHomeworkBtn.style.display="none";
}
addHomeworkBtn.addEventListener("click",function(){
    window.location.href="add-homework.html";
});
