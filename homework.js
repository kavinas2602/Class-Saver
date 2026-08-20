const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
    window.location.href="login.html";
}

const addHomeworkBtn=document.getElementById("addHomeworkBtn");

if(currentUser.role== "student"){
    addHomeworkBtn.style.display="none";
}
addHomeworkBtn.addEventListener("click",function(){
    addHomeworkForm.style.display="block";
});

cancelBtn.addEventListener("click",function() {
    addHomeworkForm.style.display="none";
});

const homeworkForm = document.getElementById("homewworkForm");

homeworkForm.addEventListener("submit",function(event){
    event.preventDefault();
    alert("homework saved");
});
