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

