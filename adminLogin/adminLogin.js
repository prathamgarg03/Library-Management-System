const button1 = document.querySelector("#LoginButton");
button1.onclick = goToHomePage;

function goToHomePage(){
   const path = "../adminHome/adminHome.html";
   window.open(path, "_self");
}
