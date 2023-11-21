const button1 = document.querySelector("#searchButton");
button1.onclick = goToSearchPage;

function goToSearchPage(){
    const path = "../student_search/student_Search.html";
    window.open(path, "_self");
 }

 let loan=document.getElementById("loan_button");
 function goToLoansPage(){
     const path = "../Student_loan/Student_loan.html";
     window.open(path, "_self");
    }
    
    loan.onclick=goToLoansPage;

