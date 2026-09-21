const currentUser = 
JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
    window.location.href="login.html";
}

const addHomeworkBtn=document.getElementById("addHomeworkBtn");
const addHomeworkForm = document.getElementById("addHomeworkForm");
const homeworkForm = document.getElementById("homeworkForm");
const cancelBtn = document.getElementById("cancelBtn");

const homeworkContainer = document.getElementById("homeworkContainer");
const emptyMesssage = document.getElementById("emptyMessage");

const titleInput = document.getElementById("title");
const subjectInput = document.getElementById("subject");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");

let homeworks = JSON.parse(localStorage.getItem("homeworks")) || [];
if(currentUser.role== "student"){
    addHomeworkBtn.style.display="none";
}

addHomeworkBtn.addEventListener("click",function(){
    addHomeworkForm.style.display="block";
});
cancelBtn.addEventListener("click",function(){
    addHomeworkForm.style.display="none";
    homeworkForm.reset();
});

function displayHomeworks(){
    const oldCards = document.querySelectorAll(".homework-card");

    oldCards.forEach(function(card){
        card.remove();
    }); 
}
