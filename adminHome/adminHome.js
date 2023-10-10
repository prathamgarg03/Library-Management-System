const button1 = document.querySelector("#addButton");
button1.onclick = goToAddRemovePage;

function goToAddRemovePage(){
   const path = "../add_remove/add_remove.html";
   window.open(path, "_blank");
}