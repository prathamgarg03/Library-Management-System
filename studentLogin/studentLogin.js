const button1 = document.querySelector("#Studentloginbutton");
button1.onclick = goToHomePage;

function goToHomePage(){
   const path = "../studentHome/studentHome.html";
   window.open(path, "_self");
}
