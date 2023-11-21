const button1 = document.querySelector("#addButton");
button1.onclick = goToAddRemovePage;

function goToAddRemovePage(){
   const path = "../add_remove/add_remove.html";
   window.open(path, "_self");
}

const button3 = document.querySelector("#bookIssued");
button3.onclick = goToBookIssue;

function goToBookIssue(){
   const path = "../books_issued/books_issued.html";
   window.open(path, "_self");
}

const button2 = document.querySelector("#defaulter");
button2.onclick = goToDefaulter_list;

function goToDefaulter_list(){
   const path = "../defaulter_list/defaulter_list.html";
   window.open(path,"_self");
}

const button4 = document.querySelector("#manage_student");
button4.onclick = goToManage_student;

function goToManage_student(){
   const path ="../manage_students/manage_students.html";
   window.open(path,"_self");
}