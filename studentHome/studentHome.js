const button1 = document.querySelector("#searchButton");
button1.onclick = goToSearchPage;

function goToSearchPage(){
    const path = "../student_search/student_Search.html";
    window.open(path, "_blank");
 }
